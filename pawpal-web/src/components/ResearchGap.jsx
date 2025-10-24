const sections = [
  {
    title: "1️⃣ Problem Identified",
    description:
      "Existing digital pet-care solutions operate in silos—tele-consultation, reminders, or donation drives—without intelligent integration. The lack of coordination between owners, veterinarians, and welfare programs results in fragmented experiences, limited automation, and generic nutritional advice.",
  },
  {
    title: "2️⃣ Integration of AI & ML",
    description:
      "Prior work often isolates AI for diagnosis or ML for service matching without merging the two. PawPal unifies AI-led symptom interpretation with machine learning that powers predictive, adaptive workflows, creating an ecosystem that learns across triage, booking, donations, and care routines.",
  },
  {
    title: "3️⃣ Data-Driven, Accessible Support",
    description:
      "Manual input and static rules hold current platforms back. Our approach automates insight generation by ingesting pet profiles, behavior cues, and context to recommend next steps instantly—closing the loop with accessible, software-only guidance that scales.",
  },
  {
    title: "4️⃣ Personalized & Welfare-Oriented",
    description:
      "Generic advice ignores breed, age, medical history, and the urgency of stray animal aid. PawPal personalizes every recommendation with ML while structuring welfare outreach so donations target the highest-need cases, benefiting pets at home and on the streets alike.",
  },
];

export default function ResearchGap() {
  return (
    <section
      id="gap"
      className="bg-neutral-950 px-6 py-24 text-white sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="flex flex-col gap-6 text-center sm:text-left">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 sm:justify-start">
            Research Gap
          </span>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Building the connective tissue missing from digital pet care
            </h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              This study pinpoints the limitations of fragmented solutions and proposes a unified platform
              that fuses AI, machine learning, and welfare-centric workflows to elevate outcomes for pet parents
              and stray animal initiatives.
            </p>
          </div>
        </header>

        <div className="relative grid gap-6 sm:grid-cols-2">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-white/10 sm:block" />
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:p-8"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                {section.title}
              </span>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                {section.description}
              </p>
              <div className="absolute -left-8 top-6 hidden h-16 w-16 rounded-full border border-white/20 bg-white/5 blur-xl sm:block" />
              <div className="absolute -right-8 bottom-6 hidden h-16 w-16 rounded-full border border-white/20 bg-white/5 blur-xl sm:block" />
              <div className="absolute -bottom-1 left-0 h-1 w-1/2 origin-left scale-x-50 bg-gradient-to-r from-white/0 via-white/40 to-white/0 transition duration-300 group-hover:scale-x-100 sm:w-1/3" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
