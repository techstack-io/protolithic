export type Thesis = {
  /** Market the thesis covers — the plate's headline. */
  label: string;
  /** File number, set tabular. */
  kicker: string;
  /** Optional image; when set the plate renders the photograph instead of type. */
  src?: string;
};

export const theses: Thesis[] = [
  { label: "Freight settlement", kicker: "Thesis 001" },
  { label: "Utility inspection", kicker: "Thesis 014" },
  { label: "Industrial procurement", kicker: "Thesis 022" },
  { label: "Clinical staffing", kicker: "Thesis 037" },
  { label: "Insurance archives", kicker: "Thesis 041" },
  { label: "Grid interconnection", kicker: "Thesis 058" },
  { label: "Port logistics", kicker: "Thesis 063" },
  { label: "Waste traceability", kicker: "Thesis 071" },
  { label: "Municipal permitting", kicker: "Thesis 084" },
  { label: "Cold chain", kicker: "Thesis 092" },
  { label: "Fleet maintenance", kicker: "Thesis 103" },
  { label: "Agronomy records", kicker: "Thesis 118" },
  { label: "Marine survey", kicker: "Thesis 126" },
  { label: "Aftermarket parts", kicker: "Thesis 131" },
  { label: "Reinsurance data", kicker: "Thesis 147" },
  { label: "Rail yard planning", kicker: "Thesis 152" },
  { label: "Mine safety", kicker: "Thesis 166" },
  { label: "Water utilities", kicker: "Thesis 178" },
  { label: "Steel trading", kicker: "Thesis 184" },
  { label: "Warehouse labour", kicker: "Thesis 197" },
  { label: "Specialty pharma", kicker: "Thesis 203" },
  { label: "Building retrofit", kicker: "Thesis 211" },
  { label: "Textile sourcing", kicker: "Thesis 219" },
  { label: "Airport ground ops", kicker: "Thesis 228" },
  { label: "Public transit fares", kicker: "Thesis 234" },
  { label: "Forestry yield", kicker: "Thesis 240" },
];

export const stages = [
  {
    kicker: "Stage 01 · 4 weeks",
    title: "Survey",
    body: "A written thesis on one market: the shift, the buyer, the wedge, and the reason it is now.",
    gate: "Gate — thesis kept or shelved",
  },
  {
    kicker: "Stage 02 · 6 weeks",
    title: "Assay",
    body: "Thirty conversations, two pilots, one paid commitment — or the thesis returns to the shelf.",
    gate: "Gate — evidence of pull",
  },
  {
    kicker: "Stage 03 · 12 weeks",
    title: "Prototype",
    body: "A working product in the hands of real users, built by the studio's own team.",
    gate: "Gate — retained usage",
  },
  {
    kicker: "Stage 04 · ongoing",
    title: "Spin out",
    body: "A cofounder takes the helm with equity, capital, and the studio still behind them.",
    gate: "Gate — an independent company",
  },
] as const;

export const ventures = [
  {
    name: "Ledgerwork",
    market: "Freight settlement",
    stage: "04 — Spun out",
    status: "Independent, 2025",
    tone: "accent",
  },
  {
    name: "Fieldmark",
    market: "Utility inspection",
    stage: "03 — Prototype",
    status: "Seeking cofounder",
    tone: "neutral",
  },
  {
    name: "Quarry",
    market: "Industrial procurement",
    stage: "03 — Prototype",
    status: "In build",
    tone: "neutral",
  },
  {
    name: "Basalt",
    market: "Clinical staffing",
    stage: "02 — Assay",
    status: "Validating",
    tone: "outline",
  },
  {
    name: "Vellum",
    market: "Insurance archives",
    stage: "01 — Survey",
    status: "Thesis open",
    tone: "outline",
  },
] as const;
