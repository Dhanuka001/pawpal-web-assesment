const technologies = [
  {
    name: "Flutter",
    category: "Mobile App",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
  },
  {
    name: "JWT",
    category: "Auth & Security",
    logo: "/jwt.png",
  },
  {
    name: "Python",
    category: "Core Language",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Flask",
    category: "Backend Framework",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "/mongo.png",
  },
  {
    name: "Ollama",
    category: "Local LLM",
    logo: "/ollama.png",
  },
  {
    name: "TensorFlow",
    category: "Machine Learning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  },
  {
    name: "Figma",
    category: "Product Design",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "VS Code",
    category: "Development IDE",
    logo: "/vs.png",
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="bg-gradient-to-b from-white via-[#ECF7FF] to-white px-6 py-20 text-slate-900 sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="space-y-3 text-center sm:text-left">
          <span className="inline-flex justify-center rounded-full bg-[#CFE9FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1E6FB8] sm:justify-start">
            Technologies Used
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            The stack behind PawPal’s intelligent pet-care ecosystem
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-lg">
            A balanced blend of mobile, backend, AI, and design tools keeps the experience cohesive across every touchpoint.
          </p>
        </header>

        <div className="relative rounded-3xl border border-[#1E6FB8]/10 bg-white/70 p-6 shadow-xl shadow-[#5FBAFF1A] backdrop-blur sm:p-10">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <article
                key={tech.name}
                className="group flex items-center gap-4 rounded-2xl border border-[#1E6FB8]/10 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#1E6FB8]/30 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#CFE9FF] shadow-inner shadow-[#1E6FB8]/20">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-900">{tech.name}</h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#1E6FB8]/70">{tech.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
