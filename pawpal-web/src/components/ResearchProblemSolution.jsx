import Reveal from "./Reveal";

const highlights = [
  {
    title: "Research Problem",
    description:
      "Despite the rise of mobile and AI technologies, pet-care solutions remain fragmented. Health tracking, tele-consultation, donations, and nutrition tools operate separately, leaving owners and welfare teams juggling disjointed apps. Without AI triage, data-driven service matching, or personalized care, the result is delayed support, generic recommendations, and inequitable welfare outcomes.",
  },
  {
    title: "Research Solution",
    description:
      "PawPal unifies the entire journey inside a single mobile ecosystem powered by AI and ML. Intelligent virtual vets interpret symptoms and guide immediate care, while recommendation engines match owners with the right professionals. ML-driven donation routing and adaptive meal planning ensure every pet—and stray dog—gets timely, personalized support with transparent impact.",
  },
];

export default function ResearchProblemSolution() {
  return (
    <section
      id="problem"
      className="bg-white px-6 py-24 text-slate-900 sm:px-10"
    >
      <Reveal
        as="div"
        className="mx-auto flex max-w-6xl flex-col gap-16"
        variant="up"
      >
        <header className="space-y-6 text-center sm:text-left">
          <span className="inline-flex justify-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:justify-start">
            Research Problem &amp; Solution
          </span>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Bridging the gap between fragmented pet-care tools and intelligent, connected care
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-lg">
            PawPal addresses both functional and social challenges by combining AI triage, service matching,
            donation intelligence, and nutrition personalization in one cohesive app. Here’s how the research
            problem translates into a unified solution.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {highlights.map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
            <ul className="grid gap-4 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600 sm:grid-cols-2 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                  1
                </span>
                AI-driven virtual vet assistance delivers instant triage and clear next steps.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                  2
                </span>
                Intelligent matching connects pet owners to trusted vets and service providers.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                  3
                </span>
                ML donation module prioritizes high-need stray dogs with transparent impact.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                  4
                </span>
                Adaptive meal-plan generator personalizes nutrition to every pet profile.
              </li>
            </ul>
          </article>

          <aside className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-black/90 text-white shadow-lg before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,#0F5CFF33,transparent_60%)]">
              <div className="relative flex aspect-[16/9] items-center justify-center bg-slate-900">
                <button
                  type="button"
                  aria-label="Play PawPal overview video"
                  className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <span className="ml-1 inline-block h-0 w-0 border-y-[14px] border-y-transparent border-l-[24px] border-l-white" />
                </button>
              </div>
              <div className="relative space-y-3 px-6 py-6">
                <h3 className="text-lg font-semibold">Watch PawPal in action</h3>
                <p className="text-sm text-white/70">
                  This YouTube walkthrough introduces our AI triage, booking flow, and donation intelligence.
                </p>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  Coming soon
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600 shadow-sm sm:p-8 sm:text-base">
              <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">What sets PawPal apart?</h3>
              <p className="mt-3">
                A single, software-only app that adapts care, connects stakeholders, and channels welfare aid efficiently—making advanced
                pet support accessible and equitable for every community.
              </p>
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
