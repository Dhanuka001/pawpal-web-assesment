import Reveal from "./Reveal";

const supervisors = [
  {
    name: "Dr. Samantha Rajapaksha",
    tag: "Supervisor",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/",
    email: "alex.fernando@example.com",
  },
  {
    name: "Dr.Dinuka Wijendra",
    tag: "Co-Supervisor",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/",
    email: "nethmi.perera@example.com",
  },
];

const teamMembers = [
  {
    name: "Warnakula H D",
    tag: "Group Leader",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/",
    email: "dinuka.silva@example.com",
  },
  {
    name: "Godage P S P",
    tag: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/",
    email: "rashmi.j@example.com",
  },
  {
    name: "Rathnayaka R M L D",
    tag: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/",
    email: "tharindu.w@example.com",
    photo: "/gm-3.JPG",
  },
  {
    name: "Abesekara D A P D",
    tag: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/",
    email: "chathuri.d@example.com",
    photo: "/gm-4.JPG",
  },
];

function PersonCard({ person }) {
  return (
    <Reveal
      variant="up"
      className="group flex flex-col items-center rounded-3xl border border-[#1E6FB8]/15 bg-white/80 p-6 shadow-sm shadow-[#1E6FB8]/10 transition hover:-translate-y-2 hover:border-[#1E6FB8]/35 hover:shadow-2xl"
    >
      {person.photo ? (
        <img
          src={person.photo}
          alt={`${person.name} portrait`}
          className="h-28 w-28 rounded-full object-cover shadow-lg shadow-[#1E6FB8]/20"
        />
      ) : (
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#CFE9FF] via-white to-[#8CCBFF] text-sm font-semibold uppercase tracking-[0.3em] text-[#1E6FB8] shadow-inner shadow-[#1E6FB8]/20">
          Photo
        </div>
      )}
      <div className="mt-5 space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1E6FB8]/70">{person.tag}</p>
        <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
        <div className="space-y-1 text-sm text-slate-600">
          <p>{person.university}</p>
          <p>{person.department}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-[#1E6FB8]">
        <a
          href={person.linkedin}
          aria-label={`${person.name} LinkedIn`}
          className="rounded-full border border-current p-2 transition hover:bg-[#1E6FB8] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3 8.75h3.96V21H3zM9.168 8.75h3.793v1.681h.053c.528-1 1.817-2.057 3.743-2.057 4 0 4.738 2.635 4.738 6.06V21h-3.96v-5.772c0-1.376-.026-3.148-1.92-3.148-1.92 0-2.214 1.5-2.214 3.043V21h-3.96z" />
          </svg>
        </a>
        <a
          href={`mailto:${person.email}`}
          aria-label={`${person.name} email`}
          className="rounded-full border border-current p-2 transition hover:bg-[#1E6FB8] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4"
          >
            <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-900 sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <Reveal variant="up" as="header" className="space-y-4 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-6">
            About Us
          </span>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            The minds shaping PawPal&apos;s intelligent pet-care experience
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-lg">
            A collaborative team blending academic guidance and hands-on innovation to build a future-ready digital ecosystem for pets and their communities.
          </p>
        </Reveal>

        <div className="space-y-12">
          <div className="space-y-6">
            <Reveal variant="up" as="h3" className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#1E6FB8]/80 sm:text-left">
              Supervisory Panel
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {supervisors.map((person) => (
                <PersonCard key={person.email} person={person} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Reveal variant="up" as="h3" className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#1E6FB8]/80 sm:text-left">
              Team Members
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((person) => (
                <PersonCard key={person.email} person={person} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
