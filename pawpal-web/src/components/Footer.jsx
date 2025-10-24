export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row">
        <div className="space-y-4 lg:w-1/3">
          <a href="#home" className="inline-flex items-center gap-2 text-xl font-semibold tracking-wide uppercase">
            PawPal
          </a>
          <p className="text-sm leading-relaxed text-white/70">
            The all-in-one platform for pet parents. Manage bookings, track wellness, and discover trusted care in just a few taps.
          </p>
        </div>

        <div className="grid flex-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Navigate</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#home" className="transition hover:text-white">Home</a></li>
              <li><a href="#project-scope" className="transition hover:text-white">Project Scope</a></li>
              <li><a href="#about" className="transition hover:text-white">About Us</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#documents" className="transition hover:text-white">Documents</a></li>
              <li><a href="#presentations" className="transition hover:text-white">Presentations</a></li>
              <li><a href="#technologies" className="transition hover:text-white">Technologies</a></li>
              <li><a href="#methodology" className="transition hover:text-white">Methodology</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Stay Connected</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="mailto:hello@pawpal.app" className="transition hover:text-white">hello@pawpal.app</a></li>
              <li><a href="tel:+1234567890" className="transition hover:text-white">+1 (234) 567-890</a></li>
              <li className="flex items-center gap-4">
                <a href="#" className="transition hover:text-white">Instagram</a>
                <a href="#" className="transition hover:text-white">LinkedIn</a>
                <a href="#" className="transition hover:text-white">X</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs uppercase tracking-[0.3em] text-white/60 sm:flex-row sm:px-10">
          <p>© 2025 Team PawPal. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="transition hover:text-white">Privacy</a>
            <a href="#terms" className="transition hover:text-white">Terms</a>
            <a href="#support" className="transition hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
