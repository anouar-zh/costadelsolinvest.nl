const TWENTY_API_URL = process.env.TWENTY_API_URL!;
const TWENTY_API_KEY = process.env.TWENTY_API_KEY!;

async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(TWENTY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TWENTY_API_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join(", "));
  }
  return json.data;
}

interface LeadData {
  firstName: string;
  email: string;
  phone: string;
  message?: string;
  contactMethod: string;
  locale: string;
  inferredCountry: string;
  device: string;
  selections: {
    motivation?: string;
    subcategory?: string;
    propertyType?: string;
    budget?: string;
  };
}

const CALLING_CODES: Record<string, string> = {
  NL: "+31",
  GB: "+44",
  ES: "+34",
  DE: "+49",
};

function parsePhone(phone: string, country: string) {
  const callingCode = CALLING_CODES[country] ?? "+31";
  // Strip the calling code prefix from the number if present
  let number = phone.replace(/[\s()-]/g, "");
  if (number.startsWith(callingCode)) {
    number = number.slice(callingCode.length);
  } else if (number.startsWith("+")) {
    // Different prefix — keep as-is but strip the +
    number = number.replace(/^\+\d{1,3}/, "");
  }
  return { number: number || phone, callingCode, countryCode: country };
}

export async function createLead(data: LeadData): Promise<string> {
  const { number, callingCode, countryCode } = parsePhone(data.phone, data.inferredCountry);

  // 1. Create Person
  const personResult = await gql<{ createPerson: { id: string } }>(`
    mutation CreatePerson($data: PersonCreateInput!) {
      createPerson(data: $data) {
        id
      }
    }
  `, {
    data: {
      name: { firstName: data.firstName, lastName: "" },
      emails: { primaryEmail: data.email },
      phones: {
        primaryPhoneNumber: number,
        primaryPhoneCallingCode: callingCode,
        primaryPhoneCountryCode: countryCode,
      },
      city: data.inferredCountry,
      jobTitle: `Lead via website (${data.locale.toUpperCase()})`,
    },
  });

  const personId = personResult.createPerson.id;

  // 2. Create Note with investment profile
  const profileLines = [
    `**Motivatie:** ${data.selections.motivation ?? "—"}`,
    `**Focus:** ${data.selections.subcategory ?? "—"}`,
    `**Vastgoedtype:** ${data.selections.propertyType ?? "—"}`,
    `**Budget:** ${data.selections.budget ?? "—"}`,
    "",
    `**Contactvoorkeur:** ${data.contactMethod}`,
    `**Bericht:** ${data.message || "—"}`,
    `**Apparaat:** ${data.device}`,
    `**Taal:** ${data.locale.toUpperCase()}`,
    `**Land:** ${data.inferredCountry}`,
  ];

  const noteResult = await gql<{ createNote: { id: string } }>(`
    mutation CreateNote($data: NoteCreateInput!) {
      createNote(data: $data) {
        id
      }
    }
  `, {
    data: {
      title: `Investeringsprofiel — ${data.firstName}`,
      bodyV2: { markdown: profileLines.join("\n") },
    },
  });

  const noteId = noteResult.createNote.id;

  // 3. Link Note to Person
  await gql(`
    mutation CreateNoteTarget($data: NoteTargetCreateInput!) {
      createNoteTarget(data: $data) {
        id
      }
    }
  `, {
    data: {
      noteId,
      targetPersonId: personId,
    },
  });

  return personId;
}
