import Reveal from "./Reveal";

const objectives = [
  {
    step: "1",
    title: "AI Veterinary Triage & Recommendations",
    description:
      "Build an intelligent triage engine that interprets symptoms, offers immediate guidance, and recommends the most suitable veterinarians by specialization, experience, and case severity.",
    emphasis: "Instant, AI-led support for urgent pet needs.",
  },
  {
    step: "2",
    title: "Service Provider Matching",
    description:
      "Design ML-driven matching that connects pet owners with trainers, groomers, and walkers aligned with each pet’s attributes, owner preferences, and historical success.",
    emphasis: "Precision matching for every lifestyle and routine.",
  },
  {
    step: "3",
    title: "Stray Welfare Donation Model",
    description:
      "Implement data-informed donation routing that prioritizes urgent stray cases using welfare scores, geography, and impact metrics for transparent aid distribution.",
    emphasis: "Transparent impact for communities and donors.",
  },
  {
    step: "4",
    title: "Personalized Meal Plans",
    description:
      "Develop adaptive nutrition recommendations powered by machine learning to adjust diets for breed, age, activity, and health conditions.",
    emphasis: "Balanced nutrition tuned to every pet’s profile.",
  },
  {
    step: "5",
    title: "Unified Mobile Platform",
    description:
      "Integrate every intelligent module inside a bilingual, user-centered app that synchronizes workflows for owners, veterinarians, and welfare partners.",
    emphasis: "One seamless hub for coordinated pet care.",
  },
];

export default function ResearchObjectives() {
  return (
    <section
      id="objectives"
      className="bg-gradient-to-b from-[#CFE9FF] via-white to-white px-6 py-16 text-slate-900 sm:px-10"
    >
      <Reveal
        as="div"
        className="mx-auto flex max-w-6xl flex-col gap-12"
        variant="up"
      >
        <header className="space-y-3 text-center sm:text-left">
          <span className="inline-flex justify-center text-xs font-semibold uppercase tracking-[0.3em] text-[#3E9FEF] sm:justify-start">
            Research Objectives
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Our roadmap to a smarter pet-care ecosystem
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-lg">
            From rapid triage to data-informed welfare, each objective layers capability on top of the next to
            deliver a connected, intelligent experience for pets and their communities.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#6CB8F766] to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {objectives.map((objective, index) => (
              <article
                key={objective.title}
                className="group relative flex flex-col gap-4 rounded-2xl border border-[#3E9FEF1F] bg-white/85 p-6 shadow-sm shadow-[#3E9FEF1F] backdrop-blur transition hover:-translate-y-2 hover:border-[#3E9FEF40] hover:shadow-xl lg:items-start"
              >
                <div className="flex w-full items-center justify-between gap-3 lg:flex-col lg:items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5FBAFF] text-lg font-semibold text-white shadow-lg shadow-[#5FBAFF44] lg:mx-auto lg:text-xl">
                    {objective.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3E9FEF]/70 lg:mt-3">
                    Phase {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                  {objective.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {objective.description}
                </p>
                <p className="rounded-xl bg-[#5FBAFF1A] px-4 py-3 text-xs font-medium text-[#1E6FB8] sm:text-sm">
                  {objective.emphasis}
                </p>
                {index < objectives.length - 1 && (
                  <span className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-[#0F5CFF22] to-transparent lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
