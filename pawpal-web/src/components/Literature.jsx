const keyPoints = [
  "Existing apps are single-function; end-to-end flows (triage → referral → booking) are rare.",
  "Service matching for pet providers is underexplored; literature favors generic ratings, not pet-fit recommendations.",
  "AI vet triage can cut costs and response time but is seldom coupled with smart vet recommendation + scheduling.",
  "Stray-dog aid lacks ML-based prioritization to maximize impact of donations.",
  "Nutrition tools often ignore personalization (breed, age, medical flags, budget, availability).",
  "Users need a lightweight, bilingual, affordable app—no IoT hardware requirement—for wider adoption.",
];

export default function Literature() {
  return (
    <section
      id="literature"
      className="bg-white px-6 py-24 text-black sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            Literature Survey
          </span>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Mapping the gaps in pet-care technology
            </h2>
            <p className="text-base leading-relaxed text-black/70 sm:text-lg">
              Prior work in pet-care tech spans scheduling apps, simple record-keepers,
              and isolated ML prototypes such as disease classifiers or nutrition tip
              generators. Recommender systems flourish in e-commerce and human
              healthcare triage, yet few adapt them to pet services that weigh breed,
              age, temperament, and provider quality signals.
            </p>
            <p className="text-base leading-relaxed text-black/70 sm:text-lg">
              Tele-vet platforms improve access but often rely on human-only chat, with
              limited AI triage to deliver first-line care or smart routing to the right
              veterinarian. Meanwhile, stray-animal efforts prioritize awareness over
              data-driven donation targeting, and nutrition tools rarely personalize
              meal plans around local availability, allergies, or owner constraints.
            </p>
            <p className="text-base leading-relaxed text-black/70 sm:text-lg">
              Together, the literature signals the need for an integrated, affordable,
              software-only mobile solution that blends AI guidance, recommender logic,
              and practical workflows end to end.
            </p>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="flex flex-col gap-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold sm:text-2xl">Where PawPal steps in</h3>
            <p className="text-sm leading-relaxed text-black/70 sm:text-base">
              PawPal delivers a unified software experience that closes the gaps identified above by combining:
            </p>
            <ol className="space-y-4 text-sm leading-relaxed text-black/80 sm:text-base">
              <li>
                <span className="font-semibold text-black">Best-match service recommendations</span> for trainers, groomers, walkers, and boarders using pet-specific attributes plus provider quality signals.
              </li>
              <li>
                <span className="font-semibold text-black">AI vet assistant</span> that offers step-by-step triage guidance and suggests the most suitable experienced vet for escalation.
              </li>
              <li>
                <span className="font-semibold text-black">Integrated vet booking</span> that links triage, referral, and appointment scheduling in one flow.
              </li>
              <li>
                <span className="font-semibold text-black">ML-based donation routing</span> to prioritize stray dogs with highest need, optimizing donor impact.
              </li>
              <li>
                <span className="font-semibold text-black">Personalized meal planning</span> powered by ML, tuned to breed, age, allergies, budget, and local ingredient availability.
              </li>
            </ol>
          </article>

          <aside className="flex flex-col gap-6 rounded-3xl border border-black/10 bg-black text-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-2xl">
              Key points
            </h3>
            <ul className="space-y-4 text-sm leading-relaxed text-white/80 sm:text-base">
              {keyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-white/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="overflow-hidden rounded-3xl border border-black/5 bg-black text-white">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">The literature in one snapshot</h3>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                Put together, prior work showcases the potential of digital pet care, but
                leaves meaningful integration unfinished. PawPal advances the field with a
                holistic approach that is software-only, affordable, and accessible.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-white/80 sm:text-base">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-xs">
                  AI
                </span>
                Intelligent symptom triage and proactive wellness nudges.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-xs">
                  ML
                </span>
                Personalized care plans that evolve with pet activity and history.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-xs">
                  UX
                </span>
                Seamless vet booking and case matching for faster, reliable treatment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
