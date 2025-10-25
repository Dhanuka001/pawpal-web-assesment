import Reveal from "./Reveal";

const documents = [
  {
    title: "Topic Assessment",
    href: "/documents/topic-assessment.pdf",
    format: "PDF",
  },
  {
    title: "Project Proposal",
    href: "/documents/project-proposal.pdf",
    format: "PDF",
  },
  {
    title: "Research Paper",
    href: "/documents/research-paper.pdf",
    format: "PDF",
  },
  {
    title: "Final Report",
    href: "/documents/final-report.pdf",
    format: "PDF",
  },
  {
    title: "Log Book",
    href: "/documents/log-book.pdf",
    format: "PDF",
  },
];

const presentations = [
  {
    title: "Project Proposal",
    href: "/presentations/project-proposal.pptx",
    format: "PPTX",
  },
  {
    title: "Progress Presentation I",
    href: "/presentations/progress-presentation-i.pptx",
    format: "PPTX",
  },
  {
    title: "Progress Presentation II",
    href: "/presentations/progress-presentation-ii.pptx",
    format: "PPTX",
  },
  {
    title: "Final Presentation",
    href: "/presentations/final-presentation.pptx",
    format: "PPTX",
  },
];

function DocumentIcon() {
  return (
    <img
      src="/paper.png"
      alt=""
      role="presentation"
      className="h-8 w-8 object-contain"
    />
  );
}

function PresentationIcon() {
  return (
    <img
      src="/presenation.png"
      alt=""
      role="presentation"
      className="h-8 w-8 object-contain"
    />
  );
}

function ResourceCard({ title, href, format, accent, Icon }) {
  return (
    <Reveal
      variant="up"
      className="group relative mx-auto flex h-full w-full max-w-[260px] min-h-[280px] flex-col items-center rounded-3xl border border-slate-200/70 bg-white px-8 py-10 text-center shadow-[0_18px_45px_-24px_rgba(30,111,184,0.35)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-2xl"
    >
      <div
        className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl text-white shadow-lg shadow-[#1E6FB8]/25 mt-4 ${accent}`}
        aria-hidden="true"
      >
        <Icon />
      </div>
      <div className="mt-4 flex flex-1 flex-col items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1E6FB8]/70">
          {format}
        </span>
        <h3 className="text-lg font-semibold leading-snug text-slate-900">{title}</h3>
      </div>
      <div className="mt-auto w-full pt-4 pb-2">
        <a
          href={href}
          download
          className="mx-auto mb-1 inline-flex items-center gap-2 rounded-full bg-[#1E6FB8]/10 px-5 py-2 text-sm font-semibold text-[#1E6FB8] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-black"
        >
          Download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path d="M12 5v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 19h14" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </Reveal>
  );
}

export default function Downloads() {
  return (
    <section
      id="downloads"
      className="bg-gradient-to-b from-[#F4F9FF] via-white to-[#F9FBFF] px-6 py-24 text-slate-900 sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <Reveal variant="up" as="header" className="space-y-4 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E6FB8]/80">
            Downloads
          </span>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Access our project deliverables and presentation decks
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-lg">
            Explore the full documentation and presentations behind PawPal&apos;s intelligent pet-care experience. Each resource is ready for you to download directly.
          </p>
        </Reveal>

        <div className="space-y-16">
          <div id="documents" className="space-y-6 scroll-mt-24">
            <Reveal variant="up" as="h3" className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#1E6FB8]/80 sm:text-left">
              Documents
            </Reveal>
            <div className="mx-auto grid gap-8 justify-center justify-items-center sm:grid-cols-2 lg:grid-cols-5">
              {documents.map((resource, index) => (
                <ResourceCard
                  key={resource.title}
                  Icon={DocumentIcon}
                  accent={index % 2 === 0 ? "bg-gradient-to-br from-[#1E6FB8] to-[#4F9EE7]" : "bg-gradient-to-br from-[#4F9EE7] to-[#1E6FB8]"}
                  {...resource}
                />
              ))}
            </div>
          </div>

          <div id="presentations" className="space-y-6 scroll-mt-24">
            <Reveal variant="up" as="h3" className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#1E6FB8]/80 sm:text-left mt-8">
              Presentations
            </Reveal>
            <div className="mx-auto grid gap-8 justify-center justify-items-center sm:grid-cols-2 lg:grid-cols-5">
              {presentations.map((resource, index) => (
                <ResourceCard
                  key={resource.title}
                  Icon={PresentationIcon}
                  accent={index % 2 === 0 ? "bg-gradient-to-br from-[#1E6FB8] to-[#7AB6F2]" : "bg-gradient-to-br from-[#7AB6F2] to-[#1E6FB8]"}
                  {...resource}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
