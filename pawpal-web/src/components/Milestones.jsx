import Reveal from "./Reveal";

const milestones = [
  {
    title: "Proposal Presentation",
    status: "✅ Completed",
    priority: "High",
    date: "2025.01.27",
    marks: "6",
    description:
      "The project concept, objectives, and scope were formally presented to the panel. Feedback from this session guided refinements to ensure research relevance and feasibility.",
  },
  {
    title: "Proposal Document",
    status: "✅ Completed",
    priority: "Medium",
    date: "2024.12.14",
    marks: "6",
    description:
      "A detailed written proposal was submitted outlining the research background, problem identification, proposed methodology, and expected outcomes.",
  },
  {
    title: "Progress Presentation I",
    status: "✅ Completed",
    priority: "High",
    date: "2025.04.07",
    marks: "15",
    description:
      "The first progress evaluation showcased system design, architecture, and early implementation results, receiving valuable suggestions for improvement.",
  },
  {
    title: "Research Paper Submission",
    status: "✅ Completed",
    priority: "High",
    date: "2025.08.01",
    marks: "10",
    description:
      "A formal research paper was prepared summarizing the study’s theoretical framework, findings, and experimental outcomes aligned with academic standards.",
  },
  {
    title: "Progress Presentation II",
    status: "✅ Completed",
    priority: "High",
    date: "2025.09.15",
    marks: "18",
    description:
      "The second progress review demonstrated a near-final prototype, results validation, and integration of feedback from earlier evaluations.",
  },
  {
    title: "Final Report Submission",
    status: "✅ Completed",
    priority: "High",
    date: "2025.09.15",
    marks: "20",
    description:
      "A comprehensive final report was submitted, documenting the entire research process, methodology, analysis, and system implementation.",
  },
  {
    title: "Final Presentation & Viva",
    status: "⏳ Pending",
    priority: "High",
    date: "2025.10.27",
    marks: "20",
    description:
      "The concluding phase where the complete solution and research findings will be presented to the evaluation panel through a formal viva session.",
  },
  {
    title: "Website Assessment",
    status: "✅ Completed",
    priority: "Medium",
    date: "2025.10.23",
    marks: "2",
    description:
      "An online demonstration of the system was conducted to assess usability, design quality, and system functionality through a dedicated web platform.",
  },
  {
    title: "Log Book Submission",
    status: "⏳ Pending",
    priority: "Medium",
    date: "TBA",
    marks: "3",
    description:
      "The individual log book will be finalized to record weekly progress, tasks, and reflections throughout the research journey.",
  },
];

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="relative bg-gradient-to-br from-[#F4F7FF] via-white to-[#EEF4FF] px-6 py-24 text-slate-900 sm:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(78,158,231,0.25)_0%,_rgba(255,255,255,0)_60%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <Reveal as="header" variant="up" className="space-y-4 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E6FB8]/80">
            Project Milestones Roadmap
          </span>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            A structured journey towards a smart pet-care experience
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-lg">
            The PawPal research project followed a structured timeline with key milestones that
            ensured steady progress from proposal to final evaluation. Each milestone contributed
            significantly to the overall success and assessment of the project.
          </p>
        </Reveal>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1E6FB8]/50 to-transparent lg:block" />
          <div className="grid gap-10 lg:gap-14">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <Reveal
                  key={milestone.title}
                  variant="up"
                  delay={index * 0.05}
                  className={`relative flex flex-col gap-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_18px_45px_-24px_rgba(30,111,184,0.25)] backdrop-blur lg:flex-row lg:items-stretch ${
                    isEven ? "lg:ml-auto lg:pl-16" : "lg:mr-auto lg:pr-16"
                  } lg:w-[calc(50%+3rem)]`}
                >
                  <div className="flex flex-col gap-4 lg:w-2/5">
                    <h3 className="text-xl font-semibold text-slate-900">{milestone.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#1E6FB8]/70">
                      <span>{milestone.status}</span>
                      <span>Priority: {milestone.priority}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-500">
                      <span>Date: {milestone.date}</span>
                      <span>Marks: {milestone.marks}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 lg:w-3/5">
                    {milestone.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
