import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#0F1C3E] via-[#132552] to-[#091025] px-6 py-24 text-white sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1E6FB8] blur-3xl" />
        <div className="absolute bottom-0 right-12 h-48 w-48 rounded-full bg-[#4F9EE7]/80 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-16 lg:flex-row lg:items-start">
        <Reveal variant="up" className="lg:w-2/5">
          <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7AB6F2]">
              Contact Us
            </span>
            <h2 className="text-3xl font-semibold leading-tight">
              We&apos;d love to hear from you
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Have questions about PawPal&apos;s intelligent pet-care experience or want to
              collaborate with us? Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-4 grid gap-4 text-sm text-white/80">
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-[#7AB6F2]">
                  Email
                </span>
                <a
                  href="mailto:hello@pawpal.com"
                  className="mt-1 inline-flex items-center gap-2 font-medium text-white transition hover:text-[#7AB6F2]"
                >
                  hello@pawpal.com
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-[#7AB6F2]">
                  Phone
                </span>
                <a
                  href="tel:+94771234567"
                  className="mt-1 inline-flex items-center gap-2 font-medium text-white transition hover:text-[#7AB6F2]"
                >
                  +94 77 123 4567
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-[#7AB6F2]">
                  Address
                </span>
                <p className="mt-1 text-sm font-medium text-white">
                  Faculty of Computing, SLIIT,
                  <br />
                  Malabe, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.1} className="lg:w-3/5">
          <form className="grid gap-6 rounded-3xl border border-white/10 bg-white p-8 text-slate-900 shadow-xl shadow-[#1E6FB8]/10 backdrop-blur">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-800">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1E6FB8] focus:ring-2 focus:ring-[#7AB6F2]/40"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1E6FB8] focus:ring-2 focus:ring-[#7AB6F2]/40"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us how we can help"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1E6FB8] focus:ring-2 focus:ring-[#7AB6F2]/40"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1E6FB8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1E6FB8]/40 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#154f88]"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
