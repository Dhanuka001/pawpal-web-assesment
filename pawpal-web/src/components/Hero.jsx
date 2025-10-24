export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#0F5CFF] via-[#ECF3FF] to-[#70B7FF]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-12 h-64 w-64 rounded-full bg-white/45 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#0F5CFF]/20 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="z-20 max-w-xl text-center text-slate-900 sm:text-left lg:-mr-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur">
            Petcare reimagined
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            PawPal keeps every tail wagging with on-demand pet care services
          </h1>

          <p className="mt-6 text-base text-slate-700 sm:text-lg">
            Discover the easiest way to manage vet visits, grooming sessions, and wellness routines in a single app.
            PawPal brings trusted professionals closer to you, helping your furry friends stay happy, healthy, and cared for.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="#project-scope"
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60"
            >
              View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <p className="max-w-xs text-xs text-slate-600 sm:text-sm">
              Scroll to explore the PawPal experience, features, and how we keep pets thriving.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-lg lg:max-w-xl">
          <div className="absolute -left-10 top-10 hidden h-32 w-32 rounded-3xl border border-white/40 bg-white/30 shadow-lg shadow-blue-200/40 backdrop-blur lg:block" />
          <img
            src="/app-mockup-2.png"
            alt="PawPal mobile experience"
            className="relative z-10 w-full origin-bottom -rotate-2 rounded-3xl border border-white/40 bg-white/10 shadow-[0_40px_90px_-40px_rgba(15,92,255,0.65)]"
          />
          <div className="absolute bottom-10 right-0 h-36 w-36 rounded-full border border-white/50 bg-blue-200/60 blur-2xl lg:-right-12 lg:bottom-0" />
        </div>
      </div>
    </section>
  );
}
