import { Translations } from "@/i18n/translations";

export type TileSize = "normal" | "wide" | "large";

export interface TileOption {
  id: string;
  labelKey: string;
  emoji: string;
  color: string;
  size?: TileSize;
  image?: string;
}

export interface Selections {
  motivation?: string;
  subcategory?: string;
  propertyType?: string;
  budget?: string;
}

export const STEP_KEYS: (keyof Selections)[] = [
  "motivation",
  "subcategory",
  "propertyType",
  "budget",
];

// Costa del Sol Mediterranean palette — darkened 15% (30% amber) for WCAG AA on white text
export const METRO_COLORS = {
  azure:      "#2968A2",
  emerald:    "#237A5B",
  terracotta: "#A65431",
  amber:      "#94702A",
  teal:       "#198383",
  rose:       "#8F4460",
  olive:      "#5B7650",
  stone:      "#756B5B",
  cta:        "#E8762D",
  ctaHover:   "#F08535",
  error:      "#D94040",
} as const;

// Label resolvers: maps tile id → translation key path
function resolveLabel(id: string, stepIndex: number, selections: Selections, t: Translations): string {
  if (stepIndex === 0) {
    const map: Record<string, string> = {
      lifestyle: t.motivation.lifestyle,
      "investment-return": t.motivation.investmentReturn,
      "location-preference": t.motivation.locationPreference,
      "growth-market": t.motivation.growthMarket,
    };
    return map[id] ?? id;
  }
  if (stepIndex === 1) {
    const mot = selections.motivation ?? "";
    const maps: Record<string, Record<string, string>> = {
      lifestyle: {
        "gastronomy-culture": t.subcategories.lifestyle.gastronomyCulture,
        "golf-luxury": t.subcategories.lifestyle.golfLuxury,
        "beach-relaxation": t.subcategories.lifestyle.beachRelaxation,
        "year-round-living": t.subcategories.lifestyle.yearRoundLiving,
      },
      "investment-return": {
        "rental-yield": t.subcategories.investmentReturn.rentalYield,
        "long-term-appreciation": t.subcategories.investmentReturn.longTermAppreciation,
        "short-term-flip": t.subcategories.investmentReturn.shortTermFlip,
        "mixed-strategy": t.subcategories.investmentReturn.mixedStrategy,
      },
      "location-preference": {
        marbella: t.subcategories.locationPreference.marbella,
        estepona: t.subcategories.locationPreference.estepona,
        mijas: t.subcategories.locationPreference.mijas,
        "malaga-city": t.subcategories.locationPreference.malagaCity,
        "inland-villages": t.subcategories.locationPreference.inlandVillages,
      },
      "growth-market": {
        "emerging-areas": t.subcategories.growthMarket.emergingAreas,
        "new-developments": t.subcategories.growthMarket.newDevelopments,
        "infrastructure-zones": t.subcategories.growthMarket.infrastructureExpansion,
        "undervalued-areas": t.subcategories.growthMarket.undervaluedAreas,
      },
    };
    return maps[mot]?.[id] ?? id;
  }
  if (stepIndex === 2) {
    const map: Record<string, string> = {
      apartment: t.propertyTypes.apartment,
      penthouse: t.propertyTypes.penthouse,
      townhouse: t.propertyTypes.townhouse,
      villa: t.propertyTypes.villa,
      "new-build": t.propertyTypes.newBuild,
      resale: t.propertyTypes.resale,
    };
    return map[id] ?? id;
  }
  if (stepIndex === 3) {
    const map: Record<string, string> = {
      "250k-400k": t.budget.range1,
      "400k-750k": t.budget.range2,
      "750k-1.5m": t.budget.range3,
      "1.5m-plus": t.budget.range4,
    };
    return map[id] ?? id;
  }
  return id;
}

// Step 1 options
const motivationOptions: TileOption[] = [
  { id: "lifestyle", labelKey: "lifestyle", emoji: "🌞", color: METRO_COLORS.amber, size: "large", image: "/images/tiles/lifestyle.jpg" },
  { id: "investment-return", labelKey: "investmentReturn", emoji: "📈", color: METRO_COLORS.emerald, size: "large", image: "/images/tiles/investment.jpg" },
  { id: "location-preference", labelKey: "locationPreference", emoji: "🏖", color: METRO_COLORS.azure, size: "large", image: "/images/tiles/location.jpg" },
  { id: "growth-market", labelKey: "growthMarket", emoji: "🚀", color: METRO_COLORS.terracotta, size: "large", image: "/images/tiles/growth.jpg" },
];

// Step 2 options per motivation
const subcategoryOptions: Record<string, TileOption[]> = {
  lifestyle: [
    { id: "gastronomy-culture", labelKey: "gastronomyCulture", emoji: "🍷", color: METRO_COLORS.terracotta, size: "wide", image: "/images/tiles/gastronomy.jpg" },
    { id: "golf-luxury", labelKey: "golfLuxury", emoji: "⛳", color: METRO_COLORS.emerald, image: "/images/tiles/golf.jpg" },
    { id: "beach-relaxation", labelKey: "beachRelaxation", emoji: "🏖", color: METRO_COLORS.teal, image: "/images/tiles/beach.jpg" },
    { id: "year-round-living", labelKey: "yearRoundLiving", emoji: "☀️", color: METRO_COLORS.amber, size: "wide", image: "/images/tiles/yearround.jpg" },
  ],
  "investment-return": [
    { id: "rental-yield", labelKey: "rentalYield", emoji: "💰", color: METRO_COLORS.emerald, size: "wide", image: "/images/tiles/rental.jpg" },
    { id: "long-term-appreciation", labelKey: "longTermAppreciation", emoji: "📊", color: METRO_COLORS.azure, image: "/images/tiles/longterm.jpg" },
    { id: "short-term-flip", labelKey: "shortTermFlip", emoji: "⚡", color: METRO_COLORS.cta, image: "/images/tiles/flip.jpg" },
    { id: "mixed-strategy", labelKey: "mixedStrategy", emoji: "🔀", color: METRO_COLORS.rose, size: "wide", image: "/images/tiles/mixed.jpg" },
  ],
  "location-preference": [
    { id: "marbella", labelKey: "marbella", emoji: "✨", color: METRO_COLORS.amber, size: "wide", image: "/images/tiles/marbella.jpg" },
    { id: "estepona", labelKey: "estepona", emoji: "🌸", color: METRO_COLORS.rose, image: "/images/tiles/estepona.jpg" },
    { id: "mijas", labelKey: "mijas", emoji: "🏔", color: METRO_COLORS.olive, image: "/images/tiles/mijas.jpg" },
    { id: "malaga-city", labelKey: "malagaCity", emoji: "🏙", color: METRO_COLORS.azure, size: "wide", image: "/images/tiles/malaga.jpg" },
    { id: "inland-villages", labelKey: "inlandVillages", emoji: "🏘", color: METRO_COLORS.stone, image: "/images/tiles/village.jpg" },
  ],
  "growth-market": [
    { id: "emerging-areas", labelKey: "emergingAreas", emoji: "🌱", color: METRO_COLORS.emerald, image: "/images/tiles/emerging.jpg" },
    { id: "new-developments", labelKey: "newDevelopments", emoji: "🏗", color: METRO_COLORS.terracotta, size: "wide", image: "/images/tiles/newdev.jpg" },
    { id: "infrastructure-zones", labelKey: "infrastructureExpansion", emoji: "🛤", color: METRO_COLORS.stone, size: "wide", image: "/images/tiles/infra.jpg" },
    { id: "undervalued-areas", labelKey: "undervaluedAreas", emoji: "💎", color: METRO_COLORS.azure, image: "/images/tiles/undervalued.jpg" },
  ],
};

// Step 3 options
const propertyOptions: TileOption[] = [
  { id: "apartment", labelKey: "apartment", emoji: "🏢", color: METRO_COLORS.azure, image: "/images/tiles/apartment.jpg" },
  { id: "penthouse", labelKey: "penthouse", emoji: "🌇", color: METRO_COLORS.amber, size: "wide", image: "/images/tiles/penthouse.jpg" },
  { id: "townhouse", labelKey: "townhouse", emoji: "🏠", color: METRO_COLORS.olive, image: "/images/tiles/townhouse.jpg" },
  { id: "villa", labelKey: "villa", emoji: "🏡", color: METRO_COLORS.emerald, size: "wide", image: "/images/tiles/villa.jpg" },
  { id: "new-build", labelKey: "newBuild", emoji: "🆕", color: METRO_COLORS.terracotta, image: "/images/tiles/newbuild.jpg" },
  { id: "resale", labelKey: "resale", emoji: "🔑", color: METRO_COLORS.stone, image: "/images/tiles/resale.jpg" },
];

// Step 4 options
const budgetOptions: TileOption[] = [
  { id: "250k-400k", labelKey: "range1", emoji: "💶", color: METRO_COLORS.olive, size: "wide", image: "/images/tiles/budget1.jpg" },
  { id: "400k-750k", labelKey: "range2", emoji: "💶", color: METRO_COLORS.azure, size: "wide", image: "/images/tiles/budget2.jpg" },
  { id: "750k-1.5m", labelKey: "range3", emoji: "💶", color: METRO_COLORS.teal, size: "wide", image: "/images/tiles/budget3.jpg" },
  { id: "1.5m-plus", labelKey: "range4", emoji: "💶", color: METRO_COLORS.amber, size: "wide", image: "/images/tiles/budget4.jpg" },
];

export const TOTAL_STEPS = 4;

export function getOptionsForStep(stepIndex: number, selections: Selections): TileOption[] {
  switch (stepIndex) {
    case 0: return motivationOptions;
    case 1: return subcategoryOptions[selections.motivation ?? ""] ?? [];
    case 2: return propertyOptions;
    case 3: return budgetOptions;
    default: return [];
  }
}

export function getLabelForSelection(
  stepIndex: number,
  value: string,
  selections: Selections,
  t: Translations
): string {
  return resolveLabel(value, stepIndex, selections, t);
}

export function getColorForSelection(
  stepIndex: number,
  value: string,
  selections: Selections
): string {
  const options = getOptionsForStep(stepIndex, selections);
  return options.find((o) => o.id === value)?.color ?? METRO_COLORS.azure;
}

export function getImageForSelection(
  stepIndex: number,
  value: string,
  selections: Selections
): string | undefined {
  const options = getOptionsForStep(stepIndex, selections);
  return options.find((o) => o.id === value)?.image;
}

export function getDescriptionForTile(
  id: string,
  stepIndex: number,
  selections: Selections,
  t: Translations
): string {
  if (stepIndex === 0) {
    const map: Record<string, string> = {
      lifestyle: t.descriptions.motivation.lifestyle,
      "investment-return": t.descriptions.motivation.investmentReturn,
      "location-preference": t.descriptions.motivation.locationPreference,
      "growth-market": t.descriptions.motivation.growthMarket,
    };
    return map[id] ?? "";
  }
  if (stepIndex === 1) {
    const mot = selections.motivation ?? "";
    const maps: Record<string, Record<string, string>> = {
      lifestyle: {
        "gastronomy-culture": t.descriptions.subcategories.lifestyle.gastronomyCulture,
        "golf-luxury": t.descriptions.subcategories.lifestyle.golfLuxury,
        "beach-relaxation": t.descriptions.subcategories.lifestyle.beachRelaxation,
        "year-round-living": t.descriptions.subcategories.lifestyle.yearRoundLiving,
      },
      "investment-return": {
        "rental-yield": t.descriptions.subcategories.investmentReturn.rentalYield,
        "long-term-appreciation": t.descriptions.subcategories.investmentReturn.longTermAppreciation,
        "short-term-flip": t.descriptions.subcategories.investmentReturn.shortTermFlip,
        "mixed-strategy": t.descriptions.subcategories.investmentReturn.mixedStrategy,
      },
      "location-preference": {
        marbella: t.descriptions.subcategories.locationPreference.marbella,
        estepona: t.descriptions.subcategories.locationPreference.estepona,
        mijas: t.descriptions.subcategories.locationPreference.mijas,
        "malaga-city": t.descriptions.subcategories.locationPreference.malagaCity,
        "inland-villages": t.descriptions.subcategories.locationPreference.inlandVillages,
      },
      "growth-market": {
        "emerging-areas": t.descriptions.subcategories.growthMarket.emergingAreas,
        "new-developments": t.descriptions.subcategories.growthMarket.newDevelopments,
        "infrastructure-zones": t.descriptions.subcategories.growthMarket.infrastructureExpansion,
        "undervalued-areas": t.descriptions.subcategories.growthMarket.undervaluedAreas,
      },
    };
    return maps[mot]?.[id] ?? "";
  }
  if (stepIndex === 2) {
    const map: Record<string, string> = {
      apartment: t.descriptions.propertyTypes.apartment,
      penthouse: t.descriptions.propertyTypes.penthouse,
      townhouse: t.descriptions.propertyTypes.townhouse,
      villa: t.descriptions.propertyTypes.villa,
      "new-build": t.descriptions.propertyTypes.newBuild,
      resale: t.descriptions.propertyTypes.resale,
    };
    return map[id] ?? "";
  }
  if (stepIndex === 3) {
    const map: Record<string, string> = {
      "250k-400k": t.descriptions.budget.range1,
      "400k-750k": t.descriptions.budget.range2,
      "750k-1.5m": t.descriptions.budget.range3,
      "1.5m-plus": t.descriptions.budget.range4,
    };
    return map[id] ?? "";
  }
  return "";
}

export function generateProfileDescription(selections: Selections, t: Translations): string {
  const motivation = getLabelForSelection(0, selections.motivation ?? "", selections, t);
  const sub = getLabelForSelection(1, selections.subcategory ?? "", selections, t);
  const property = getLabelForSelection(2, selections.propertyType ?? "", selections, t);
  const budget = getLabelForSelection(3, selections.budget ?? "", selections, t);

  return t.summary.description(motivation, sub, property, budget);
}
