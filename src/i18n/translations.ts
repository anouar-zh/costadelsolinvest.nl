export type Locale = "nl" | "en" | "es" | "de";

export const LOCALE_LABELS: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
  es: "ES",
  de: "DE",
};

export interface Translations {
  // Landing
  landing: {
    discover: string;
    whereToInvest: string;
    inCostaDel: string;
    subtitle: string;
    cta: string;
    free: string;
    minutes: string;
    noObligation: string;
  };
  // Progress
  progress: {
    step: string;
    of: string;
    labels: [string, string, string, string];
  };
  // Steps
  steps: {
    titles: [string, string, string, string];
    subtitles: [string, string, string, string];
    back: string;
  };
  // Tile labels (Level 1)
  motivation: {
    lifestyle: string;
    investmentReturn: string;
    locationPreference: string;
    growthMarket: string;
  };
  // Subcategories
  subcategories: {
    lifestyle: {
      gastronomyCulture: string;
      golfLuxury: string;
      beachRelaxation: string;
      yearRoundLiving: string;
    };
    investmentReturn: {
      rentalYield: string;
      longTermAppreciation: string;
      shortTermFlip: string;
      mixedStrategy: string;
    };
    locationPreference: {
      marbella: string;
      estepona: string;
      mijas: string;
      malagaCity: string;
      inlandVillages: string;
    };
    growthMarket: {
      emergingAreas: string;
      newDevelopments: string;
      infrastructureExpansion: string;
      undervaluedAreas: string;
    };
  };
  // Property types
  propertyTypes: {
    apartment: string;
    penthouse: string;
    townhouse: string;
    villa: string;
    newBuild: string;
    resale: string;
  };
  // Budget
  budget: {
    range1: string;
    range2: string;
    range3: string;
    range4: string;
  };
  // Summary
  summary: {
    title1: string;
    title2: string;
    description: (motivation: string, sub: string, property: string, budget: string) => string;
    driverLabel: string;
    focusLabel: string;
    propertyLabel: string;
    budgetLabel: string;
    adjust: string;
    next: string;
  };
  // Lead form
  leadForm: {
    title1: string;
    title2: string;
    subtitle: string;
    firstName: string;
    email: string;
    phone: string;
    message: string;
    contactMethod: string;
    contactPhone: string;
    contactEmail: string;
    contactWhatsApp: string;
    cta: string;
    sending: string;
    errors: {
      firstNameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneInvalid: string;
      submitError: string;
    };
  };
  // Confirmation
  confirmation: {
    title1: string;
    title2: string;
    message: string;
    restart: string;
  };
  // Desktop side
  desktop: {
    yourNext: string;
    investment: string;
    startsHere: string;
    description: string;
  };
  // Tile descriptions (flip info)
  descriptions: {
    motivation: {
      lifestyle: string;
      investmentReturn: string;
      locationPreference: string;
      growthMarket: string;
    };
    subcategories: {
      lifestyle: {
        gastronomyCulture: string;
        golfLuxury: string;
        beachRelaxation: string;
        yearRoundLiving: string;
      };
      investmentReturn: {
        rentalYield: string;
        longTermAppreciation: string;
        shortTermFlip: string;
        mixedStrategy: string;
      };
      locationPreference: {
        marbella: string;
        estepona: string;
        mijas: string;
        malagaCity: string;
        inlandVillages: string;
      };
      growthMarket: {
        emergingAreas: string;
        newDevelopments: string;
        infrastructureExpansion: string;
        undervaluedAreas: string;
      };
    };
    propertyTypes: {
      apartment: string;
      penthouse: string;
      townhouse: string;
      villa: string;
      newBuild: string;
      resale: string;
    };
    budget: {
      range1: string;
      range2: string;
      range3: string;
      range4: string;
    };
  };
  // Tile UI strings
  tiles: {
    moreInfo: string;
    selectThis: string;
  };
  // Footer
  footer: {
    initiative: string;
    privacyLink: string;
    termsLink: string;
  };
  // Legal
  legal: {
    consent: string;
    consentRequired: string;
    privacyTitle: string;
    termsTitle: string;
    backHome: string;
    lastUpdated: string;
    privacySections: { heading: string; body: string }[];
    termsSections: { heading: string; body: string }[];
  };
  // Trust elements
  trust: {
    privacyNote: string;
    dataSource: string;
    processTitle: string;
    processSteps: [string, string, string, string];
    testimonialQuote: string;
    testimonialAuthor: string;
    kvkLabel: string;
    avgLabel: string;
    dutchTeam: string;
  };
}

export const translations: Record<Locale, Translations> = {
  nl: {
    landing: {
      discover: "Ontdek",
      whereToInvest: "waar te investeren",
      inCostaDel: "aan de Costa del Sol",
      subtitle: "Beantwoord een paar vragen en ontvang uw persoonlijke investeringsrichting.",
      cta: "Start Mijn Investeringsscan",
      free: "Gratis",
      minutes: "2 minuten",
      noObligation: "Vrijblijvend",
    },
    progress: {
      step: "Stap",
      of: "van",
      labels: ["Motivatie", "Focus", "Vastgoed", "Budget"],
    },
    steps: {
      titles: [
        "Wat drijft uw investering?",
        "Verfijn uw keuze",
        "Type vastgoed",
        "Budgetrange",
      ],
      subtitles: [
        "Kies uw primaire motivatie",
        "Wat is voor u het belangrijkst?",
        "Wat zoekt u?",
        "Wat is uw investeringsbudget?",
      ],
      back: "terug",
    },
    motivation: {
      lifestyle: "Lifestyle",
      investmentReturn: "Rendement",
      locationPreference: "Locatievoorkeur",
      growthMarket: "Groeimarkt",
    },
    subcategories: {
      lifestyle: {
        gastronomyCulture: "Gastronomie & Cultuur",
        golfLuxury: "Golf & Luxe",
        beachRelaxation: "Strand & Ontspanning",
        yearRoundLiving: "Jaarrond Wonen",
      },
      investmentReturn: {
        rentalYield: "Huurrendement",
        longTermAppreciation: "Langetermijngroei",
        shortTermFlip: "Korte Termijn Flip",
        mixedStrategy: "Gemengde Strategie",
      },
      locationPreference: {
        marbella: "Marbella",
        estepona: "Estepona",
        mijas: "Mijas",
        malagaCity: "Málaga Stad",
        inlandVillages: "Dorpen in het Binnenland",
      },
      growthMarket: {
        emergingAreas: "Opkomende Gebieden",
        newDevelopments: "Nieuwbouwprojecten",
        infrastructureExpansion: "Infrastructuurzones",
        undervaluedAreas: "Ondergewaardeerde Gebieden",
      },
    },
    propertyTypes: {
      apartment: "Appartement",
      penthouse: "Penthouse",
      townhouse: "Herenhuis",
      villa: "Villa",
      newBuild: "Nieuwbouw",
      resale: "Bestaande Bouw",
    },
    budget: {
      range1: "€250k – €400k",
      range2: "€400k – €750k",
      range3: "€750k – €1,5M",
      range4: "€1,5M+",
    },
    summary: {
      title1: "Uw Investerings",
      title2: "Profiel",
      description: (motivation, sub, property, budget) =>
        `U zoekt een ${sub.toLowerCase()}-gericht ${property.toLowerCase()} als ${motivation.toLowerCase()} investering binnen de range ${budget}.`,
      driverLabel: "Motivatie",
      focusLabel: "Focus",
      propertyLabel: "Vastgoed",
      budgetLabel: "Budget",
      adjust: "selecties aanpassen",
      next: "Ga verder",
    },
    leadForm: {
      title1: "Plan een Gratis",
      title2: "Strategiegesprek",
      subtitle: "Laat uw gegevens achter en wij nemen binnen 24 uur contact op.",
      firstName: "Voornaam",
      email: "E-mail",
      phone: "Telefoon",
      message: "Bericht (optioneel)",
      contactMethod: "Hoe wilt u gecontacteerd worden?",
      contactPhone: "Telefoon",
      contactEmail: "E-mail",
      contactWhatsApp: "WhatsApp",
      cta: "Boek Mijn Gratis Consult",
      sending: "Verzenden...",
      errors: {
        firstNameRequired: "Voornaam is verplicht",
        emailRequired: "E-mail is verplicht",
        emailInvalid: "Voer een geldig e-mailadres in",
        phoneRequired: "Telefoonnummer is verplicht",
        phoneInvalid: "Voer een geldig telefoonnummer in",
        submitError: "Er ging iets mis. Probeer het opnieuw.",
      },
    },
    confirmation: {
      title1: "Bedankt",
      title2: "!",
      message: "Wij hebben uw investeringsprofiel ontvangen. Ons team neemt binnen 24 uur contact met u op om uw gratis strategiegesprek in te plannen.",
      restart: "nieuwe scan starten",
    },
    desktop: {
      yourNext: "Uw volgende",
      investment: "investering",
      startsHere: "begint hier.",
      description: "Wij helpen u stap voor stap de perfecte Costa del Sol investering te vinden, afgestemd op uw doelen, lifestyle en budget.",
    },
    descriptions: {
      motivation: {
        lifestyle: "Investeer in een woning die uw levenskwaliteit verbetert. Denk aan Mediterraan klimaat, cultuur en vrije tijd voor de deur.",
        investmentReturn: "Kies voor vastgoed met sterk financieel rendement: huurinkomsten, waardestijging of snelle winst.",
        locationPreference: "Kies op basis van een specifiek gebied aan de Costa del Sol dat past bij uw visie.",
        growthMarket: "Richt u op opkomende kansen in snel groeiende zones met hoog groeipotentieel.",
      },
      subcategories: {
        lifestyle: {
          gastronomyCulture: "Geniet van de Spaanse keuken, lokale wijnen en een rijk cultureel erfgoed vlak bij uw deur.",
          golfLuxury: "Toegang tot wereldklasse golfbanen en luxe faciliteiten in een exclusieve omgeving.",
          beachRelaxation: "Woon op loopafstand van de mooiste stranden en geniet van een ontspannen levensstijl.",
          yearRoundLiving: "Meer dan 300 zondagen per jaar. Perfect voor permanent wonen of als tweede huis.",
        },
        investmentReturn: {
          rentalYield: "Gemiddeld 5-8% bruto huurrendement per jaar dankzij sterk toeristisch seizoen.",
          longTermAppreciation: "Vastgoedprijzen in Málaga stegen 13,8% in 2025. Een sterke keuze voor langetermijnwinst.",
          shortTermFlip: "Koop nieuwbouw in vroege fase en verkoop met winst bij oplevering.",
          mixedStrategy: "Combineer huurinkomsten met waardestijging voor een gebalanceerd rendement.",
        },
        locationPreference: {
          marbella: "Luxe en glamour. Marbella biedt premium vastgoed, internationale sfeer en sterke waardegroei.",
          estepona: "Charmant kustplaatsje met authentiek karakter, groeiend aanbod en aantrekkelijke prijzen.",
          mijas: "Schilderachtig dorp met zeezicht. Populair bij gezinnen en uitstekende prijs-kwaliteit.",
          malagaCity: "Bruisende stad met cultuur, universiteit en een groeiende tech-sector. Sterk voor verhuur.",
          inlandVillages: "Authentiek Andalusisch dorpsleven met de laagste instapprijzen aan de Costa del Sol.",
        },
        growthMarket: {
          emergingAreas: "Nieuwe hotspots met snel stijgende prijzen en veel ontwikkelingspotentieel.",
          newDevelopments: "Modern nieuwbouw met de nieuwste energie-eisen en aantrekkelijke betaalplannen.",
          infrastructureExpansion: "Gebieden rondom nieuwe snelwegen, ziekenhuizen en winkelcentra. Vroege instap.",
          undervaluedAreas: "Gebieden die nog niet ontdekt zijn door de massa, met sterke groeiverwachting.",
        },
      },
      propertyTypes: {
        apartment: "Compact en onderhoudsvriendelijk. Goed als investering of als vakantieverblijf.",
        penthouse: "Exclusief wonen op het hoogste niveau met privédakterras en panoramisch uitzicht.",
        townhouse: "Ruim en gezinsvriendelijk. Meerdere verdiepingen met eigen tuin en terras.",
        villa: "Vrijstaand luxe wonen met privézwembad, tuin en maximale privacy.",
        newBuild: "Modern en energiezuinig met garanties. Vaak met flexibele betaalregelingen.",
        resale: "Direct beschikbaar, ingericht en vaak op de beste locaties tegen marktwaarde.",
      },
      budget: {
        range1: "Instapniveau voor appartementen en studio's in opkomende gebieden.",
        range2: "Het populairste segment. Ruime keuze in appartementen en townhouses.",
        range3: "Premium vastgoed: grote penthouses, villa's en top-locaties.",
        range4: "Ultra-luxe segment. Exclusieve villa's in Marbella's Golden Mile en omgeving.",
      },
    },
    tiles: {
      moreInfo: "Meer informatie",
      selectThis: "Kies dit",
    },
    footer: {
      initiative: "Een initiatief van",
      privacyLink: "Privacybeleid",
      termsLink: "Voorwaarden",
    },
    legal: {
      consent: "Ik ga akkoord met de {terms} en het {privacy}",
      consentRequired: "U dient akkoord te gaan om door te gaan",
      privacyTitle: "Privacybeleid",
      termsTitle: "Algemene Voorwaarden",
      backHome: "Terug naar home",
      lastUpdated: "Laatst bijgewerkt: maart 2026",
      privacySections: [
        {
          heading: "Wie zijn wij",
          body: "Data Changes B.V. (KvK 93372051) gevestigd aan de Nassausingel 3, 6511 EV Nijmegen, is verantwoordelijk voor de verwerking van persoonsgegevens via costadelsolinvest.nl.",
        },
        {
          heading: "Welke gegevens verzamelen wij",
          body: "Wij verzamelen de gegevens die u invult in onze investeringsscan: voornaam, e-mailadres, telefoonnummer en uw investeringsvoorkeuren (motivatie, woningtype, budget).",
        },
        {
          heading: "Waarvoor gebruiken wij uw gegevens",
          body: "Uw gegevens worden gebruikt om u persoonlijk investeringsadvies te geven. Ons team neemt telefonisch contact met u op om uw wensen te bespreken en te kwalificeren.",
        },
        {
          heading: "Delen met derden",
          body: "Na ons telefonisch contact en uitsluitend in overleg met u, kunnen wij uw gegevens delen met geselecteerde vastgoedpartner(s) aan de Costa del Sol. Dit doen wij alleen wanneer wij ervan overtuigd zijn dat de partner bij uw wensen past. Zonder uw toestemming delen wij nooit gegevens.",
        },
        {
          heading: "Bewaartermijn",
          body: "Wij bewaren uw gegevens maximaal 24 maanden na uw laatste contact. U kunt op elk moment verzoeken uw gegevens te laten verwijderen.",
        },
        {
          heading: "Uw rechten",
          body: "U heeft recht op inzage, correctie en verwijdering van uw persoonsgegevens. Ook kunt u bezwaar maken tegen de verwerking. Neem hiervoor contact op via info@costasecret.nl.",
        },
        {
          heading: "Contact",
          body: "Data Changes B.V.\nNassausingel 3, 6511 EV Nijmegen\ninfo@costasecret.nl\nKvK 93372051",
        },
      ],
      termsSections: [
        {
          heading: "Gebruik van de investeringsscan",
          body: "De investeringsscan op costadelsolinvest.nl is bedoeld als orienterend hulpmiddel. De uitkomsten vormen geen bindend aanbod, financieel advies of koopovereenkomst.",
        },
        {
          heading: "Doorverwijzing",
          body: "Op basis van uw profiel kunnen wij u in contact brengen met een vastgoedpartner aan de Costa del Sol. Deze doorverwijzing gebeurt altijd in overleg met u en is vrijblijvend.",
        },
        {
          heading: "Aansprakelijkheid",
          body: "Data Changes B.V. is niet aansprakelijk voor beslissingen genomen op basis van de investeringsscan. Marktomstandigheden en rendementen uit het verleden bieden geen garantie voor de toekomst. Wij adviseren altijd om onafhankelijk juridisch en financieel advies in te winnen.",
        },
        {
          heading: "Intellectueel eigendom",
          body: "Alle inhoud op costadelsolinvest.nl, waaronder teksten, afbeeldingen en het ontwerp, is eigendom van Data Changes B.V. en mag niet zonder toestemming worden hergebruikt.",
        },
        {
          heading: "Toepasselijk recht",
          body: "Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Arnhem.",
        },
      ],
    },
    trust: {
      privacyNote: "Uw gegevens worden zorgvuldig en alleen in overleg gedeeld",
      dataSource: "Bron: Idealista / INE 2025",
      processTitle: "Ons proces",
      processSteps: [
        "Investeringsscan invullen (2 min)",
        "Gratis strategiegesprek (30 min)",
        "Persoonlijk investeringsvoorstel",
        "Begeleiding bij aankoop",
      ],
      testimonialQuote: "Dankzij de scan wisten wij precies wat we zochten. Binnen drie maanden hadden we ons droomappartement in Estepona.",
      testimonialAuthor: "Peter V., Amsterdam",
      kvkLabel: "KvK 93372051",
      avgLabel: "AVG-compliant",
      dutchTeam: "Nederlandstalig team",
    },
  },

  en: {
    landing: {
      discover: "Discover",
      whereToInvest: "where to invest",
      inCostaDel: "in the Costa del Sol",
      subtitle: "Answer a few questions and receive your personalized investment direction.",
      cta: "Start My Investment Scan",
      free: "Free",
      minutes: "2 minutes",
      noObligation: "No obligation",
    },
    progress: {
      step: "Step",
      of: "of",
      labels: ["Motivation", "Focus", "Property", "Budget"],
    },
    steps: {
      titles: [
        "What drives your investment?",
        "Narrow it down",
        "Property type",
        "Budget range",
      ],
      subtitles: [
        "Choose your primary motivation",
        "What matters most to you?",
        "What are you looking for?",
        "What is your investment budget?",
      ],
      back: "back",
    },
    motivation: {
      lifestyle: "Lifestyle",
      investmentReturn: "Investment Return",
      locationPreference: "Location Preference",
      growthMarket: "Growth Market",
    },
    subcategories: {
      lifestyle: {
        gastronomyCulture: "Gastronomy & Culture",
        golfLuxury: "Golf & Luxury",
        beachRelaxation: "Beach & Relaxation",
        yearRoundLiving: "Year-round Living",
      },
      investmentReturn: {
        rentalYield: "Rental Yield",
        longTermAppreciation: "Long-term Appreciation",
        shortTermFlip: "Short-term Flip",
        mixedStrategy: "Mixed Strategy",
      },
      locationPreference: {
        marbella: "Marbella",
        estepona: "Estepona",
        mijas: "Mijas",
        malagaCity: "Málaga City",
        inlandVillages: "Inland Villages",
      },
      growthMarket: {
        emergingAreas: "Emerging Areas",
        newDevelopments: "New Developments",
        infrastructureExpansion: "Infrastructure Expansion",
        undervaluedAreas: "Undervalued Areas",
      },
    },
    propertyTypes: {
      apartment: "Apartment",
      penthouse: "Penthouse",
      townhouse: "Townhouse",
      villa: "Villa",
      newBuild: "New Build",
      resale: "Resale",
    },
    budget: {
      range1: "€250k – €400k",
      range2: "€400k – €750k",
      range3: "€750k – €1.5M",
      range4: "€1.5M+",
    },
    summary: {
      title1: "Your Investment",
      title2: "Profile",
      description: (motivation, sub, property, budget) =>
        `You are looking for a ${sub.toLowerCase()}-focused ${property.toLowerCase()} as a ${motivation.toLowerCase()} investment within the ${budget} range.`,
      driverLabel: "Driver",
      focusLabel: "Focus",
      propertyLabel: "Property",
      budgetLabel: "Budget",
      adjust: "adjust selections",
      next: "Continue",
    },
    leadForm: {
      title1: "Plan a Free",
      title2: "Strategy Call",
      subtitle: "Leave your details and we'll contact you within 24 hours.",
      firstName: "First Name",
      email: "Email",
      phone: "Phone",
      message: "Message (optional)",
      contactMethod: "How would you like to be contacted?",
      contactPhone: "Phone",
      contactEmail: "Email",
      contactWhatsApp: "WhatsApp",
      cta: "Book My Free Consultation",
      sending: "Sending...",
      errors: {
        firstNameRequired: "First name is required",
        emailRequired: "Email is required",
        emailInvalid: "Enter a valid email",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Enter a valid phone number",
        submitError: "Something went wrong. Please try again.",
      },
    },
    confirmation: {
      title1: "Thank",
      title2: "You!",
      message: "We have received your investment profile. Our team will contact you within 24 hours to schedule your free strategy call.",
      restart: "start a new scan",
    },
    desktop: {
      yourNext: "Your next",
      investment: "investment",
      startsHere: "starts here.",
      description: "We help you find the perfect Costa del Sol property investment, step by step, matched to your goals, lifestyle and budget.",
    },
    descriptions: {
      motivation: {
        lifestyle: "Invest in a property that enhances your quality of life. Think Mediterranean climate, culture, and leisure at your doorstep.",
        investmentReturn: "Go for properties with strong financial performance: rental yields, capital appreciation, or quick returns.",
        locationPreference: "Choose based on a specific area of the Costa del Sol that matches your vision and preferences.",
        growthMarket: "Target emerging opportunities in rapidly developing zones with high growth potential.",
      },
      subcategories: {
        lifestyle: {
          gastronomyCulture: "Enjoy Spanish cuisine, local wines, and a rich cultural heritage right at your doorstep.",
          golfLuxury: "Access world-class golf courses and luxury amenities in an exclusive environment.",
          beachRelaxation: "Live within walking distance of beautiful beaches and enjoy a relaxed coastal lifestyle.",
          yearRoundLiving: "Over 300 sunny days per year. Perfect for permanent living or as a second home.",
        },
        investmentReturn: {
          rentalYield: "Average 5-8% gross rental yield per year thanks to a strong tourist season.",
          longTermAppreciation: "Property prices in Málaga rose 13.8% in 2025. Ideal for long-term capital gains.",
          shortTermFlip: "Buy new-build in early phase and sell at a profit upon completion.",
          mixedStrategy: "Combine rental income with capital appreciation for a balanced return.",
        },
        locationPreference: {
          marbella: "Luxury and glamour. Marbella offers premium real estate, international flair, and strong value growth.",
          estepona: "Charming coastal town with authentic character, growing supply, and attractive prices.",
          mijas: "Picturesque village with sea views. Popular with families and excellent value for money.",
          malagaCity: "Vibrant city with culture, university, and a growing tech sector. Strong rental market.",
          inlandVillages: "Authentic Andalusian village life with the lowest entry prices on the Costa del Sol.",
        },
        growthMarket: {
          emergingAreas: "New hotspots with rapidly rising prices and significant development potential.",
          newDevelopments: "Modern new-build properties meeting latest energy standards with attractive payment plans.",
          infrastructureExpansion: "Areas around new highways, hospitals, and shopping centers. Early entry opportunity.",
          undervaluedAreas: "Areas not yet discovered by the masses, with strong growth expectations.",
        },
      },
      propertyTypes: {
        apartment: "Compact and low-maintenance. Ideal as an investment or holiday residence.",
        penthouse: "Exclusive top-floor living with private rooftop terrace and panoramic views.",
        townhouse: "Spacious and family-friendly. Multiple floors with private garden and terrace.",
        villa: "Detached luxury living with private pool, garden, and maximum privacy.",
        newBuild: "Modern and energy-efficient with warranties. Often with flexible payment plans.",
        resale: "Immediately available, furnished, and often in the best locations at market value.",
      },
      budget: {
        range1: "Entry level for apartments and studios in emerging areas.",
        range2: "The most popular segment. Wide choice of apartments and townhouses.",
        range3: "Premium real estate: large penthouses, villas, and prime locations.",
        range4: "Ultra-luxury segment. Exclusive villas in Marbella's Golden Mile and surroundings.",
      },
    },
    tiles: {
      moreInfo: "More info",
      selectThis: "Select",
    },
    footer: {
      initiative: "An initiative by",
      privacyLink: "Privacy Policy",
      termsLink: "Terms",
    },
    legal: {
      consent: "I agree to the {terms} and the {privacy}",
      consentRequired: "You must agree to continue",
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms and Conditions",
      backHome: "Back to home",
      lastUpdated: "Last updated: March 2026",
      privacySections: [
        {
          heading: "Who we are",
          body: "Data Changes B.V. (CoC 93372051), located at Nassausingel 3, 6511 EV Nijmegen, the Netherlands, is responsible for the processing of personal data via costadelsolinvest.nl.",
        },
        {
          heading: "What data we collect",
          body: "We collect the data you enter in our investment scan: first name, email address, phone number, and your investment preferences (motivation, property type, budget).",
        },
        {
          heading: "How we use your data",
          body: "Your data is used to provide you with personal investment advice. Our team will contact you by phone to discuss your wishes and qualify your profile.",
        },
        {
          heading: "Sharing with third parties",
          body: "After our phone consultation and only in agreement with you, we may share your data with selected real estate partner(s) on the Costa del Sol. We only do this when we are confident the partner matches your requirements. We never share data without your consent.",
        },
        {
          heading: "Retention period",
          body: "We retain your data for a maximum of 24 months after your last contact. You can request deletion of your data at any time.",
        },
        {
          heading: "Your rights",
          body: "You have the right to access, correct, and delete your personal data. You may also object to processing. Contact us at info@costasecret.nl.",
        },
        {
          heading: "Contact",
          body: "Data Changes B.V.\nNassausingel 3, 6511 EV Nijmegen\ninfo@costasecret.nl\nCoC 93372051",
        },
      ],
      termsSections: [
        {
          heading: "Use of the investment scan",
          body: "The investment scan on costadelsolinvest.nl is intended as an exploratory tool. The results do not constitute a binding offer, financial advice, or purchase agreement.",
        },
        {
          heading: "Referral",
          body: "Based on your profile, we may put you in contact with a real estate partner on the Costa del Sol. This referral is always made in consultation with you and is non-binding.",
        },
        {
          heading: "Liability",
          body: "Data Changes B.V. is not liable for decisions made based on the investment scan. Market conditions and past returns do not guarantee future results. We always recommend obtaining independent legal and financial advice.",
        },
        {
          heading: "Intellectual property",
          body: "All content on costadelsolinvest.nl, including text, images, and design, is the property of Data Changes B.V. and may not be reused without permission.",
        },
        {
          heading: "Applicable law",
          body: "Dutch law applies to these terms. Disputes shall be submitted to the competent court in Arnhem, the Netherlands.",
        },
      ],
    },
    trust: {
      privacyNote: "Your data is handled carefully and shared only with your consent",
      dataSource: "Source: Idealista / INE 2025",
      processTitle: "Our process",
      processSteps: [
        "Complete investment scan (2 min)",
        "Free strategy call (30 min)",
        "Personal investment proposal",
        "Guidance through purchase",
      ],
      testimonialQuote: "Thanks to the scan, we knew exactly what we were looking for. Within three months we had our dream apartment in Estepona.",
      testimonialAuthor: "Peter V., Amsterdam",
      kvkLabel: "CoC 93372051",
      avgLabel: "GDPR compliant",
      dutchTeam: "Dutch-speaking team",
    },
  },

  es: {
    landing: {
      discover: "Descubre",
      whereToInvest: "dónde invertir",
      inCostaDel: "en la Costa del Sol",
      subtitle: "Responde unas preguntas y recibe tu dirección de inversión personalizada.",
      cta: "Iniciar Mi Análisis de Inversión",
      free: "Gratis",
      minutes: "2 minutos",
      noObligation: "Sin compromiso",
    },
    progress: {
      step: "Paso",
      of: "de",
      labels: ["Motivación", "Enfoque", "Inmueble", "Presupuesto"],
    },
    steps: {
      titles: [
        "¿Qué impulsa tu inversión?",
        "Concreta tu elección",
        "Tipo de propiedad",
        "Rango de presupuesto",
      ],
      subtitles: [
        "Elige tu motivación principal",
        "¿Qué es lo más importante para ti?",
        "¿Qué estás buscando?",
        "¿Cuál es tu presupuesto de inversión?",
      ],
      back: "atrás",
    },
    motivation: {
      lifestyle: "Estilo de Vida",
      investmentReturn: "Rentabilidad",
      locationPreference: "Preferencia de Ubicación",
      growthMarket: "Mercado en Crecimiento",
    },
    subcategories: {
      lifestyle: {
        gastronomyCulture: "Gastronomía y Cultura",
        golfLuxury: "Golf y Lujo",
        beachRelaxation: "Playa y Relax",
        yearRoundLiving: "Vida Todo el Año",
      },
      investmentReturn: {
        rentalYield: "Rendimiento de Alquiler",
        longTermAppreciation: "Revalorización a Largo Plazo",
        shortTermFlip: "Reventa Rápida",
        mixedStrategy: "Estrategia Mixta",
      },
      locationPreference: {
        marbella: "Marbella",
        estepona: "Estepona",
        mijas: "Mijas",
        malagaCity: "Málaga Ciudad",
        inlandVillages: "Pueblos del Interior",
      },
      growthMarket: {
        emergingAreas: "Zonas Emergentes",
        newDevelopments: "Obra Nueva",
        infrastructureExpansion: "Zonas de Expansión",
        undervaluedAreas: "Zonas Infravaloradas",
      },
    },
    propertyTypes: {
      apartment: "Apartamento",
      penthouse: "Ático",
      townhouse: "Adosado",
      villa: "Villa",
      newBuild: "Obra Nueva",
      resale: "Segunda Mano",
    },
    budget: {
      range1: "€250k – €400k",
      range2: "€400k – €750k",
      range3: "€750k – €1,5M",
      range4: "€1,5M+",
    },
    summary: {
      title1: "Tu Perfil de",
      title2: "Inversión",
      description: (motivation, sub, property, budget) =>
        `Buscas un ${property.toLowerCase()} enfocado en ${sub.toLowerCase()} como inversión de ${motivation.toLowerCase()} dentro del rango de ${budget}.`,
      driverLabel: "Motivación",
      focusLabel: "Enfoque",
      propertyLabel: "Inmueble",
      budgetLabel: "Presupuesto",
      adjust: "ajustar selecciones",
      next: "Continuar",
    },
    leadForm: {
      title1: "Agenda una",
      title2: "Llamada Estratégica Gratis",
      subtitle: "Deja tus datos y te contactamos en 24 horas.",
      firstName: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje (opcional)",
      contactMethod: "¿Cómo prefieres que te contactemos?",
      contactPhone: "Teléfono",
      contactEmail: "Correo",
      contactWhatsApp: "WhatsApp",
      cta: "Reservar Mi Consulta Gratis",
      sending: "Enviando...",
      errors: {
        firstNameRequired: "El nombre es obligatorio",
        emailRequired: "El correo es obligatorio",
        emailInvalid: "Introduce un correo válido",
        phoneRequired: "El teléfono es obligatorio",
        phoneInvalid: "Introduce un teléfono válido",
        submitError: "Algo salió mal. Inténtalo de nuevo.",
      },
    },
    confirmation: {
      title1: "¡Gracias",
      title2: "!",
      message: "Hemos recibido tu perfil de inversión. Nuestro equipo se pondrá en contacto contigo en 24 horas para programar tu llamada estratégica gratuita.",
      restart: "iniciar nuevo análisis",
    },
    desktop: {
      yourNext: "Tu próxima",
      investment: "inversión",
      startsHere: "comienza aquí.",
      description: "Te ayudamos paso a paso a encontrar la inversión perfecta en la Costa del Sol, adaptada a tus objetivos, estilo de vida y presupuesto.",
    },
    descriptions: {
      motivation: {
        lifestyle: "Invierte en una propiedad que mejore tu calidad de vida. Clima mediterráneo, cultura y ocio a tu puerta.",
        investmentReturn: "Apuesta por propiedades con fuerte rendimiento financiero: alquiler, revalorización o ganancias rápidas.",
        locationPreference: "Elige según la zona de la Costa del Sol que mejor se adapte a tu visión y preferencias.",
        growthMarket: "Apunta a oportunidades emergentes en zonas de rápido desarrollo con alto potencial de crecimiento.",
      },
      subcategories: {
        lifestyle: {
          gastronomyCulture: "Disfruta de la cocina española, vinos locales y un rico patrimonio cultural a tu puerta.",
          golfLuxury: "Acceso a campos de golf de clase mundial e instalaciones de lujo en un entorno exclusivo.",
          beachRelaxation: "Vive a pocos pasos de hermosas playas y disfruta de un estilo de vida relajado.",
          yearRoundLiving: "Más de 300 días de sol al año. Perfecto para vivir permanentemente o como segunda residencia.",
        },
        investmentReturn: {
          rentalYield: "Rendimiento bruto medio del 5-8% anual gracias a una fuerte temporada turística.",
          longTermAppreciation: "Los precios en Málaga subieron un 13,8% en 2025. Ideal para ganancias a largo plazo.",
          shortTermFlip: "Compra obra nueva en fase inicial y vende con beneficio en la entrega.",
          mixedStrategy: "Combina ingresos por alquiler con revalorización para un rendimiento equilibrado.",
        },
        locationPreference: {
          marbella: "Lujo y glamour. Marbella ofrece inmuebles premium, ambiente internacional y fuerte revalorización.",
          estepona: "Encantador pueblo costero con carácter auténtico, oferta creciente y precios atractivos.",
          mijas: "Pintoresco pueblo con vistas al mar. Popular entre familias y excelente relación calidad-precio.",
          malagaCity: "Ciudad vibrante con cultura, universidad y sector tecnológico en crecimiento. Fuerte mercado de alquiler.",
          inlandVillages: "Auténtica vida de pueblo andaluz con los precios de entrada más bajos de la Costa del Sol.",
        },
        growthMarket: {
          emergingAreas: "Nuevos puntos calientes con precios en rápido ascenso y gran potencial de desarrollo.",
          newDevelopments: "Obra nueva moderna que cumple los últimos estándares energéticos con planes de pago atractivos.",
          infrastructureExpansion: "Zonas junto a nuevas autopistas, hospitales y centros comerciales. Entrada anticipada.",
          undervaluedAreas: "Zonas aún no descubiertas por las masas, con fuertes expectativas de crecimiento.",
        },
      },
      propertyTypes: {
        apartment: "Compacto y de bajo mantenimiento. Ideal como inversión o residencia vacacional.",
        penthouse: "Vida exclusiva en la planta superior con terraza privada y vistas panorámicas.",
        townhouse: "Espacioso y familiar. Varias plantas con jardín privado y terraza.",
        villa: "Vida de lujo independiente con piscina privada, jardín y máxima privacidad.",
        newBuild: "Moderno y eficiente energéticamente con garantías. A menudo con planes de pago flexibles.",
        resale: "Disponible de inmediato, amueblado y en las mejores ubicaciones a precio de mercado.",
      },
      budget: {
        range1: "Nivel de entrada para apartamentos y estudios en zonas emergentes.",
        range2: "El segmento más popular. Amplia elección de apartamentos y adosados.",
        range3: "Inmuebles premium: grandes áticos, villas y ubicaciones privilegiadas.",
        range4: "Segmento ultra-lujo. Villas exclusivas en la Milla de Oro de Marbella y alrededores.",
      },
    },
    tiles: {
      moreInfo: "Más info",
      selectThis: "Elegir",
    },
    footer: {
      initiative: "Una iniciativa de",
      privacyLink: "Política de privacidad",
      termsLink: "Condiciones",
    },
    legal: {
      consent: "Acepto las {terms} y la {privacy}",
      consentRequired: "Debe aceptar para continuar",
      privacyTitle: "Política de Privacidad",
      termsTitle: "Condiciones Generales",
      backHome: "Volver al inicio",
      lastUpdated: "Última actualización: marzo 2026",
      privacySections: [
        {
          heading: "Quiénes somos",
          body: "Data Changes B.V. (CoC 93372051), con sede en Nassausingel 3, 6511 EV Nijmegen, Países Bajos, es responsable del tratamiento de datos personales a través de costadelsolinvest.nl.",
        },
        {
          heading: "Qué datos recopilamos",
          body: "Recopilamos los datos que introduces en nuestro análisis de inversión: nombre, correo electrónico, teléfono y tus preferencias de inversión (motivación, tipo de propiedad, presupuesto).",
        },
        {
          heading: "Cómo usamos tus datos",
          body: "Tus datos se utilizan para ofrecerte asesoramiento de inversión personalizado. Nuestro equipo te contactará por teléfono para hablar sobre tus deseos y evaluar tu perfil.",
        },
        {
          heading: "Compartir con terceros",
          body: "Tras nuestra conversación telefónica y solo con tu consentimiento, podemos compartir tus datos con socio(s) inmobiliarios seleccionados en la Costa del Sol. Solo lo hacemos cuando estamos seguros de que el socio se ajusta a tus necesidades. Nunca compartimos datos sin tu consentimiento.",
        },
        {
          heading: "Periodo de conservación",
          body: "Conservamos tus datos durante un máximo de 24 meses desde tu último contacto. Puedes solicitar la eliminación de tus datos en cualquier momento.",
        },
        {
          heading: "Tus derechos",
          body: "Tienes derecho a acceder, corregir y eliminar tus datos personales. También puedes oponerte al tratamiento. Contacta con nosotros en info@costasecret.nl.",
        },
        {
          heading: "Contacto",
          body: "Data Changes B.V.\nNassausingel 3, 6511 EV Nijmegen\ninfo@costasecret.nl\nCoC 93372051",
        },
      ],
      termsSections: [
        {
          heading: "Uso del análisis de inversión",
          body: "El análisis de inversión en costadelsolinvest.nl es una herramienta orientativa. Los resultados no constituyen una oferta vinculante, asesoramiento financiero ni contrato de compra.",
        },
        {
          heading: "Derivación",
          body: "En función de tu perfil, podemos ponerte en contacto con un socio inmobiliario en la Costa del Sol. Esta derivación siempre se realiza en consulta contigo y es sin compromiso.",
        },
        {
          heading: "Responsabilidad",
          body: "Data Changes B.V. no es responsable de las decisiones tomadas en base al análisis de inversión. Las condiciones del mercado y los rendimientos pasados no garantizan resultados futuros. Recomendamos obtener asesoramiento legal y financiero independiente.",
        },
        {
          heading: "Propiedad intelectual",
          body: "Todo el contenido de costadelsolinvest.nl, incluyendo textos, imágenes y diseño, es propiedad de Data Changes B.V. y no puede reutilizarse sin permiso.",
        },
        {
          heading: "Ley aplicable",
          body: "Se aplica la legislación neerlandesa a estas condiciones. Los litigios se someterán al tribunal competente de Arnhem, Países Bajos.",
        },
      ],
    },
    trust: {
      privacyNote: "Tus datos se tratan con cuidado y solo se comparten con tu consentimiento",
      dataSource: "Fuente: Idealista / INE 2025",
      processTitle: "Nuestro proceso",
      processSteps: [
        "Completa el análisis de inversión (2 min)",
        "Llamada estratégica gratis (30 min)",
        "Propuesta de inversión personalizada",
        "Acompañamiento en la compra",
      ],
      testimonialQuote: "Gracias al análisis, supimos exactamente lo que buscábamos. En tres meses teníamos nuestro apartamento en Estepona.",
      testimonialAuthor: "Peter V., Amsterdam",
      kvkLabel: "CoC 93372051",
      avgLabel: "RGPD",
      dutchTeam: "Equipo en neerlandés",
    },
  },

  de: {
    landing: {
      discover: "Entdecken Sie",
      whereToInvest: "wo Sie investieren",
      inCostaDel: "an der Costa del Sol",
      subtitle: "Beantworten Sie einige Fragen und erhalten Sie Ihre persönliche Investitionsrichtung.",
      cta: "Meine Investitionsanalyse starten",
      free: "Kostenlos",
      minutes: "2 Minuten",
      noObligation: "Unverbindlich",
    },
    progress: {
      step: "Schritt",
      of: "von",
      labels: ["Motivation", "Fokus", "Immobilie", "Budget"],
    },
    steps: {
      titles: [
        "Was treibt Ihre Investition an?",
        "Verfeinern Sie Ihre Auswahl",
        "Immobilientyp",
        "Budgetrahmen",
      ],
      subtitles: [
        "Wählen Sie Ihre Hauptmotivation",
        "Was ist Ihnen am wichtigsten?",
        "Was suchen Sie?",
        "Wie hoch ist Ihr Investitionsbudget?",
      ],
      back: "zurück",
    },
    motivation: {
      lifestyle: "Lifestyle",
      investmentReturn: "Rendite",
      locationPreference: "Standortpräferenz",
      growthMarket: "Wachstumsmarkt",
    },
    subcategories: {
      lifestyle: {
        gastronomyCulture: "Gastronomie & Kultur",
        golfLuxury: "Golf & Luxus",
        beachRelaxation: "Strand & Entspannung",
        yearRoundLiving: "Ganzjährig Wohnen",
      },
      investmentReturn: {
        rentalYield: "Mietrendite",
        longTermAppreciation: "Langfristige Wertsteigerung",
        shortTermFlip: "Kurzfristiger Weiterverkauf",
        mixedStrategy: "Gemischte Strategie",
      },
      locationPreference: {
        marbella: "Marbella",
        estepona: "Estepona",
        mijas: "Mijas",
        malagaCity: "Málaga Stadt",
        inlandVillages: "Dörfer im Landesinneren",
      },
      growthMarket: {
        emergingAreas: "Aufstrebende Gebiete",
        newDevelopments: "Neubauprojekte",
        infrastructureExpansion: "Infrastrukturzonen",
        undervaluedAreas: "Unterbewertete Gebiete",
      },
    },
    propertyTypes: {
      apartment: "Wohnung",
      penthouse: "Penthouse",
      townhouse: "Reihenhaus",
      villa: "Villa",
      newBuild: "Neubau",
      resale: "Bestandsimmobilie",
    },
    budget: {
      range1: "€250k – €400k",
      range2: "€400k – €750k",
      range3: "€750k – €1,5M",
      range4: "€1,5M+",
    },
    summary: {
      title1: "Ihr Investitions",
      title2: "Profil",
      description: (motivation, sub, property, budget) =>
        `Sie suchen eine ${sub.toLowerCase()}-fokussierte ${property} als ${motivation.toLowerCase()}-Investition im Bereich ${budget}.`,
      driverLabel: "Motivation",
      focusLabel: "Fokus",
      propertyLabel: "Immobilie",
      budgetLabel: "Budget",
      adjust: "Auswahl anpassen",
      next: "Weiter",
    },
    leadForm: {
      title1: "Planen Sie ein kostenloses",
      title2: "Strategiegespräch",
      subtitle: "Hinterlassen Sie Ihre Daten und wir melden uns innerhalb von 24 Stunden.",
      firstName: "Vorname",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht (optional)",
      contactMethod: "Wie möchten Sie kontaktiert werden?",
      contactPhone: "Telefon",
      contactEmail: "E-Mail",
      contactWhatsApp: "WhatsApp",
      cta: "Mein kostenloses Beratungsgespräch buchen",
      sending: "Wird gesendet...",
      errors: {
        firstNameRequired: "Vorname ist erforderlich",
        emailRequired: "E-Mail ist erforderlich",
        emailInvalid: "Geben Sie eine gültige E-Mail ein",
        phoneRequired: "Telefonnummer ist erforderlich",
        phoneInvalid: "Geben Sie eine gültige Telefonnummer ein",
        submitError: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
      },
    },
    confirmation: {
      title1: "Vielen",
      title2: "Dank!",
      message: "Wir haben Ihr Investitionsprofil erhalten. Unser Team wird sich innerhalb von 24 Stunden mit Ihnen in Verbindung setzen, um Ihr kostenloses Strategiegespräch zu vereinbaren.",
      restart: "neue Analyse starten",
    },
    desktop: {
      yourNext: "Ihre nächste",
      investment: "Investition",
      startsHere: "beginnt hier.",
      description: "Wir helfen Ihnen Schritt für Schritt die perfekte Costa del Sol Immobilieninvestition zu finden, abgestimmt auf Ihre Ziele, Ihren Lebensstil und Ihr Budget.",
    },
    descriptions: {
      motivation: {
        lifestyle: "Investieren Sie in eine Immobilie, die Ihre Lebensqualität steigert. Mediterranes Klima, Kultur und Freizeit vor der Tür.",
        investmentReturn: "Setzen Sie auf Immobilien mit starker finanzieller Performance: Mietrendite, Wertsteigerung oder schnelle Gewinne.",
        locationPreference: "Wählen Sie basierend auf dem Gebiet der Costa del Sol, das zu Ihrer Vision und Ihren Wünschen passt.",
        growthMarket: "Zielen Sie auf aufkommende Chancen in schnell wachsenden Zonen mit hohem Wachstumspotenzial.",
      },
      subcategories: {
        lifestyle: {
          gastronomyCulture: "Genießen Sie die spanische Küche, lokale Weine und ein reiches kulturelles Erbe vor Ihrer Tür.",
          golfLuxury: "Zugang zu Weltklasse-Golfplätzen und Luxuseinrichtungen in exklusiver Umgebung.",
          beachRelaxation: "Wohnen Sie in Strandnähe und genießen Sie einen entspannten Küsten-Lebensstil.",
          yearRoundLiving: "Über 300 Sonnentage pro Jahr. Perfekt zum Dauerwohnen oder als Zweitwohnsitz.",
        },
        investmentReturn: {
          rentalYield: "Durchschnittlich 5-8% Bruttomietrendite pro Jahr dank starker Tourismussaison.",
          longTermAppreciation: "Immobilienpreise in Málaga stiegen 2025 um 13,8%. Ideal für langfristigen Kapitalgewinn.",
          shortTermFlip: "Kaufen Sie Neubau in früher Phase und verkaufen Sie mit Gewinn bei Fertigstellung.",
          mixedStrategy: "Kombinieren Sie Mieteinnahmen mit Wertsteigerung für eine ausgewogene Rendite.",
        },
        locationPreference: {
          marbella: "Luxus und Glamour. Marbella bietet Premium-Immobilien, internationales Flair und starke Wertsteigerung.",
          estepona: "Charmante Küstenstadt mit authentischem Charakter, wachsendem Angebot und attraktiven Preisen.",
          mijas: "Malerisches Dorf mit Meerblick. Beliebt bei Familien und ausgezeichnetes Preis-Leistungs-Verhältnis.",
          malagaCity: "Pulsierende Stadt mit Kultur, Universität und wachsendem Tech-Sektor. Starker Mietmarkt.",
          inlandVillages: "Authentisches andalusisches Dorfleben mit den niedrigsten Einstiegspreisen an der Costa del Sol.",
        },
        growthMarket: {
          emergingAreas: "Neue Hotspots mit schnell steigenden Preisen und erheblichem Entwicklungspotenzial.",
          newDevelopments: "Moderne Neubauten nach neuesten Energiestandards mit attraktiven Zahlungsplänen.",
          infrastructureExpansion: "Gebiete an neuen Autobahnen, Krankenhäusern und Einkaufszentren. Früher Einstieg.",
          undervaluedAreas: "Gebiete, die von der Masse noch nicht entdeckt wurden, mit starken Wachstumserwartungen.",
        },
      },
      propertyTypes: {
        apartment: "Kompakt und pflegeleicht. Ideal als Investition oder Feriendomizil.",
        penthouse: "Exklusives Wohnen im Obergeschoss mit privater Dachterrasse und Panoramablick.",
        townhouse: "Geräumig und familienfreundlich. Mehrere Etagen mit eigenem Garten und Terrasse.",
        villa: "Freistehend und luxuriös mit privatem Pool, Garten und maximaler Privatsphäre.",
        newBuild: "Modern und energieeffizient mit Garantien. Oft mit flexiblen Zahlungsplänen.",
        resale: "Sofort verfügbar, eingerichtet und oft in den besten Lagen zum Marktwert.",
      },
      budget: {
        range1: "Einstiegsniveau für Wohnungen und Studios in aufstrebenden Gebieten.",
        range2: "Das beliebteste Segment. Große Auswahl an Wohnungen und Reihenhäusern.",
        range3: "Premium-Immobilien: große Penthouses, Villen und Top-Lagen.",
        range4: "Ultra-Luxus-Segment. Exklusive Villen an Marbellas Goldener Meile und Umgebung.",
      },
    },
    tiles: {
      moreInfo: "Mehr Info",
      selectThis: "Wählen",
    },
    footer: {
      initiative: "Eine Initiative von",
      privacyLink: "Datenschutz",
      termsLink: "AGB",
    },
    legal: {
      consent: "Ich stimme den {terms} und der {privacy} zu",
      consentRequired: "Sie müssen zustimmen, um fortzufahren",
      privacyTitle: "Datenschutzerklärung",
      termsTitle: "Allgemeine Geschäftsbedingungen",
      backHome: "Zurück zur Startseite",
      lastUpdated: "Zuletzt aktualisiert: März 2026",
      privacySections: [
        {
          heading: "Wer wir sind",
          body: "Data Changes B.V. (HRB 93372051), ansässig in Nassausingel 3, 6511 EV Nijmegen, Niederlande, ist verantwortlich für die Verarbeitung personenbezogener Daten über costadelsolinvest.nl.",
        },
        {
          heading: "Welche Daten wir erheben",
          body: "Wir erheben die Daten, die Sie in unsere Investitionsanalyse eingeben: Vorname, E-Mail-Adresse, Telefonnummer und Ihre Investitionspräferenzen (Motivation, Immobilientyp, Budget).",
        },
        {
          heading: "Wie wir Ihre Daten verwenden",
          body: "Ihre Daten werden verwendet, um Ihnen eine persönliche Investitionsberatung zu bieten. Unser Team wird Sie telefonisch kontaktieren, um Ihre Wünsche zu besprechen und Ihr Profil zu bewerten.",
        },
        {
          heading: "Weitergabe an Dritte",
          body: "Nach unserem Telefongespräch und ausschließlich in Absprache mit Ihnen können wir Ihre Daten an ausgewählte Immobilienpartner an der Costa del Sol weitergeben. Dies tun wir nur, wenn wir überzeugt sind, dass der Partner zu Ihren Anforderungen passt. Ohne Ihre Zustimmung geben wir keine Daten weiter.",
        },
        {
          heading: "Aufbewahrungsfrist",
          body: "Wir bewahren Ihre Daten maximal 24 Monate nach Ihrem letzten Kontakt auf. Sie können jederzeit die Löschung Ihrer Daten verlangen.",
        },
        {
          heading: "Ihre Rechte",
          body: "Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer personenbezogenen Daten. Sie können auch der Verarbeitung widersprechen. Kontaktieren Sie uns unter info@costasecret.nl.",
        },
        {
          heading: "Kontakt",
          body: "Data Changes B.V.\nNassausingel 3, 6511 EV Nijmegen\ninfo@costasecret.nl\nHRB 93372051",
        },
      ],
      termsSections: [
        {
          heading: "Nutzung der Investitionsanalyse",
          body: "Die Investitionsanalyse auf costadelsolinvest.nl dient als Orientierungshilfe. Die Ergebnisse stellen kein verbindliches Angebot, keine Finanzberatung und keinen Kaufvertrag dar.",
        },
        {
          heading: "Vermittlung",
          body: "Basierend auf Ihrem Profil können wir Sie mit einem Immobilienpartner an der Costa del Sol in Kontakt bringen. Diese Vermittlung erfolgt immer in Absprache mit Ihnen und ist unverbindlich.",
        },
        {
          heading: "Haftung",
          body: "Data Changes B.V. haftet nicht für Entscheidungen, die auf Grundlage der Investitionsanalyse getroffen werden. Marktbedingungen und vergangene Renditen garantieren keine zukünftigen Ergebnisse. Wir empfehlen stets, unabhängige rechtliche und finanzielle Beratung einzuholen.",
        },
        {
          heading: "Geistiges Eigentum",
          body: "Alle Inhalte auf costadelsolinvest.nl, einschließlich Texte, Bilder und Design, sind Eigentum von Data Changes B.V. und dürfen nicht ohne Genehmigung weiterverwendet werden.",
        },
        {
          heading: "Anwendbares Recht",
          body: "Auf diese Bedingungen ist niederländisches Recht anwendbar. Streitigkeiten werden dem zuständigen Gericht in Arnhem, Niederlande, vorgelegt.",
        },
      ],
    },
    trust: {
      privacyNote: "Ihre Daten werden sorgfältig und nur in Absprache weitergegeben",
      dataSource: "Quelle: Idealista / INE 2025",
      processTitle: "Unser Prozess",
      processSteps: [
        "Investitionsanalyse ausfüllen (2 Min.)",
        "Kostenloses Strategiegespräch (30 Min.)",
        "Persönlicher Investitionsvorschlag",
        "Begleitung beim Kauf",
      ],
      testimonialQuote: "Dank der Analyse wussten wir genau, was wir suchten. Innerhalb von drei Monaten hatten wir unsere Traumwohnung in Estepona.",
      testimonialAuthor: "Peter V., Amsterdam",
      kvkLabel: "HRB 93372051",
      avgLabel: "DSGVO-konform",
      dutchTeam: "Niederländischsprachiges Team",
    },
  },
};
