import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "thinking", label: "How I Think" },
  { id: "certs", label: "Certs" },
  {id:"researchpapers",label:"Research"},
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-bgDark/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-heading text-lg font-semibold tracking-tight"
          aria-label="Scroll to top"
        >
          {profile.name}
        </button>

        <nav
          className="hidden md:flex gap-5 text-sm text-slate-300"
          aria-label="Main navigation"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative pb-1 transition-colors ${
                active === s.id ? "text-primary" : "hover:text-primary"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-primary/90"
          >
            Resume
          </a>
          <button
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-slate-800 bg-bgDark/95 px-4 pb-4"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 pt-2 text-sm">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left rounded px-2 py-1 ${
                  active === s.id ? "bg-slate-800 text-primary" : "hover:bg-slate-900"
                }`}
              >
                {s.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
