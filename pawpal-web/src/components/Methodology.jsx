export default function Methodology() {
  return (
    <section
      id="methodology"
      className="bg-white px-6 py-20 text-slate-900 sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-2 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Methodology
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Research methodology from discovery to deployment
          </h2>
        </header>

        <article className="relative rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-sm sm:p-8 sm:text-base">
          <figure className="float-none mb-6 w-full overflow-hidden rounded-2xl bg-slate-100 p-4 shadow-lg sm:float-left sm:mb-4 sm:mr-6 sm:w-[60%]">
            <img
              src="/sys-diagram.png"
              alt="PawPal system architecture diagram"
              className="mx-auto w-full max-w-4xl rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
              System architecture overview
            </figcaption>
          </figure>

          <p>
            The proposed study adopts a systematic and modular research methodology that integrates artificial
            intelligence, machine learning, and modern web and mobile development frameworks to create a unified
            digital ecosystem for pet care and welfare. The research begins with an extensive requirement analysis
            and data collection phase, where information was gathered through surveys, veterinary consultations, and
            open datasets related to pet health, service preferences, and stray animal conditions. These insights were
            used to define system requirements and identify the input parameters for model development, such as pet
            attributes, symptom patterns, and donation data. A comprehensive system design was then formulated to ensure
            seamless interaction between the mobile and web components. The backend was developed using Flask (Python),
            handling AI and ML model operations and managing data through MongoDB, while the Flutter mobile app serves as
            the primary interface for pet owners and veterinarians. The React + Tailwind web interface supports public
            access, presenting research documentation, awareness content, and system analytics.
          </p>
          <p className="mt-6 sm:mt-4">
            The next stage involved AI and ML model development and integration, where separate intelligent modules were
            trained and deployed to perform specialized functions. The AI veterinary assistant utilizes natural language
            understanding to interpret user input and generate real-time responses and vet recommendations, while the ML
            models focus on service matching, donation prioritization, and personalized meal planning. Each model was integrated
            into Flask APIs, enabling efficient communication between the backend and frontend. Rigorous testing and evaluation
            were carried out to verify accuracy, reliability, and usability, including both functional testing of interfaces and
            performance testing of AI responses. Finally, the complete system was deployed in a cloud-based environment to ensure
            scalability, real-time availability, and secure data management. The accompanying system architecture diagram illustrates
            the flow of data between components and the interaction between intelligent modules, ensuring a clear understanding of how
            PawPal delivers an integrated, AI-driven pet-care experience.
          </p>
        </article>
      </div>
    </section>
  );
}
