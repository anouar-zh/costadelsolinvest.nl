import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

interface EmailData {
  firstName: string;
  email: string;
  locale: string;
  selections: {
    motivation?: string;
    subcategory?: string;
    propertyType?: string;
    budget?: string;
  };
}

const SUBJECTS: Record<string, string> = {
  nl: "Bedankt voor uw investeringsscan — Costa del Sol Invest",
  en: "Thank you for your investment scan — Costa del Sol Invest",
  es: "Gracias por su análisis de inversión — Costa del Sol Invest",
  de: "Vielen Dank für Ihren Investitionsscan — Costa del Sol Invest",
};

interface EmailStrings {
  greeting: string;
  thankYou: string;
  profileTitle: string;
  motivation: string;
  focus: string;
  propertyType: string;
  budget: string;
  nextSteps: string;
  signature: string;
  team: string;
}

const STRINGS: Record<string, EmailStrings> = {
  nl: {
    greeting: "Beste",
    thankYou: "Bedankt dat u de investeringsscan heeft ingevuld! Wij hebben uw profiel ontvangen en gaan hiermee aan de slag.",
    profileTitle: "Uw investeringsprofiel",
    motivation: "Motivatie",
    focus: "Focus",
    propertyType: "Vastgoedtype",
    budget: "Budget",
    nextSteps: "Een van onze specialisten neemt binnen 24 uur contact met u op om uw wensen te bespreken en u vrijblijvend te adviseren.",
    signature: "Met vriendelijke groet,",
    team: "Het Costa del Sol Invest team",
  },
  en: {
    greeting: "Dear",
    thankYou: "Thank you for completing the investment scan! We have received your profile and will get to work on it.",
    profileTitle: "Your investment profile",
    motivation: "Motivation",
    focus: "Focus",
    propertyType: "Property type",
    budget: "Budget",
    nextSteps: "One of our specialists will contact you within 24 hours to discuss your requirements and provide you with free, no-obligation advice.",
    signature: "Kind regards,",
    team: "The Costa del Sol Invest team",
  },
  es: {
    greeting: "Estimado/a",
    thankYou: "¡Gracias por completar el análisis de inversión! Hemos recibido su perfil y trabajaremos en ello.",
    profileTitle: "Su perfil de inversión",
    motivation: "Motivación",
    focus: "Enfoque",
    propertyType: "Tipo de propiedad",
    budget: "Presupuesto",
    nextSteps: "Uno de nuestros especialistas se pondrá en contacto con usted en un plazo de 24 horas para analizar sus necesidades y asesorarle sin compromiso.",
    signature: "Atentamente,",
    team: "El equipo de Costa del Sol Invest",
  },
  de: {
    greeting: "Sehr geehrte/r",
    thankYou: "Vielen Dank, dass Sie den Investitionsscan ausgefüllt haben! Wir haben Ihr Profil erhalten und werden uns darum kümmern.",
    profileTitle: "Ihr Investitionsprofil",
    motivation: "Motivation",
    focus: "Fokus",
    propertyType: "Immobilientyp",
    budget: "Budget",
    nextSteps: "Einer unserer Spezialisten wird sich innerhalb von 24 Stunden mit Ihnen in Verbindung setzen, um Ihre Anforderungen zu besprechen und Sie unverbindlich zu beraten.",
    signature: "Mit freundlichen Grüßen,",
    team: "Das Costa del Sol Invest Team",
  },
};

function buildHtml(data: EmailData): string {
  const s = STRINGS[data.locale] ?? STRINGS.nl;

  return `<!DOCTYPE html>
<html lang="${data.locale}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#1a1a1a;font-family:Segoe UI,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;">
        <!-- Header -->
        <tr><td style="padding:24px 28px 16px;background-color:#222;">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="padding-right:12px;">
              <div style="width:32px;height:32px;background-color:#E8762D;display:inline-block;"></div>
            </td>
            <td>
              <span style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.6);letter-spacing:1px;">COSTA DEL SOL INVEST</span>
            </td>
          </tr></table>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:28px;background-color:#222;border-top:3px solid #E8762D;">
          <p style="font-size:18px;color:#fff;margin:0 0 8px;font-weight:300;">
            ${s.greeting} <strong style="font-weight:600;">${data.firstName}</strong>,
          </p>
          <p style="font-size:14px;color:rgba(255,255,255,0.65);line-height:1.6;margin:0 0 24px;">
            ${s.thankYou}
          </p>

          <!-- Profile card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:rgba(255,255,255,0.05);margin-bottom:24px;">
            <tr><td style="padding:16px 20px 8px;">
              <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,0.4);margin:0 0 12px;font-weight:600;">
                ${s.profileTitle}
              </p>
            </td></tr>
            ${[
              [s.motivation, data.selections.motivation],
              [s.focus, data.selections.subcategory],
              [s.propertyType, data.selections.propertyType],
              [s.budget, data.selections.budget],
            ].map(([label, value]) => `
            <tr><td style="padding:0 20px 10px;">
              <table cellpadding="0" cellspacing="0" width="100%"><tr>
                <td style="font-size:12px;color:rgba(255,255,255,0.4);">${label}</td>
                <td align="right" style="font-size:13px;color:#fff;font-weight:500;">${value ?? "—"}</td>
              </tr></table>
            </td></tr>`).join("")}
            <tr><td style="padding:0 0 4px;"></td></tr>
          </table>

          <p style="font-size:14px;color:rgba(255,255,255,0.65);line-height:1.6;margin:0 0 24px;">
            ${s.nextSteps}
          </p>

          <p style="font-size:13px;color:rgba(255,255,255,0.5);margin:0 0 4px;">
            ${s.signature}
          </p>
          <p style="font-size:14px;color:#E8762D;font-weight:600;margin:0;">
            ${s.team}
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 28px;background-color:#1d1d1d;">
          <p style="font-size:10px;color:rgba(255,255,255,0.25);margin:0;text-align:center;">
            &copy; ${new Date().getFullYear()} costadelsolinvest.nl | Data Changes B.V. | KvK 93372051
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendConfirmationEmail(data: EmailData): Promise<void> {
  const subject = SUBJECTS[data.locale] ?? SUBJECTS.nl;

  await getResend().emails.send({
    from: "Costa del Sol Invest <info@costadelsolinvest.nl>",
    to: data.email,
    subject,
    html: buildHtml(data),
  });
}
