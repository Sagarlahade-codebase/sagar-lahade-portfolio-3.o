import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Section } from "./components/section";
import { profile } from "./data/profile";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SystemDesignSection } from "./components/SystemDesignSection";
import { CloudContainersSection } from "./components/CloudContainersSection";
import { ThinkingSection } from "./components/ThinkingSection";
import { FlagshipProjectSection } from "./components/FlagshipProjectSection";
import { EducationCertsSection } from "./components/EducationCertsSection";
import { AboutSection } from "./components/AboutSection";
import { ResearchPapersSection } from "./components/ResearchPapersSection";
import { AwardsAchievementsSection } from "./components/AwardsAchievementsSection";

function App() {
  return (
    <div className="min-h-screen bg-bgDark text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <SystemDesignSection />
        <CloudContainersSection />
        <FlagshipProjectSection />
        <ProjectsSection />
        <ThinkingSection />
        <EducationCertsSection />
        <AwardsAchievementsSection/>
        <ResearchPapersSection />

        {/* ================= CONTACT ================= */}
        <Section id="contact" title="Contact">
          <div className="grid gap-6 text-sm md:grid-cols-2">
            {/* Contact info */}
            <div
              className="
                group rounded-2xl border border-slate-800 bg-slate-900/70 p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/70
                hover:bg-slate-900
                hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
              "
            >
              <p className="mb-2 text-slate-200">
                Interested in a Java/React engineer who can own the backend and work
                comfortably with cloud and frontend? Let’s talk.
              </p>

              <p className="text-slate-300">{profile.location}</p>

              <p className="mt-2">
                Email:{" "}
                <a
                  className="text-primary hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </p>

              <p className="mt-1">Phone: {profile.phone}</p>
            </div>

            {/* Contact form */}
            <div
              className="
                group rounded-2xl border border-slate-800 bg-slate-900/70 p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/70
                hover:bg-slate-900
                hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
              "
            >
              <form className="space-y-3">
                <input
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Name"
                  name="name"
                  required
                />

                <input
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Email"
                  name="email"
                  type="email"
                  required
                />

                <textarea
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Message"
                  name="message"
                  rows={4}
                  required
                />

                <button
                  type="submit"
                  className="
                    inline-flex items-center rounded-full bg-primary px-5 py-2
                    text-sm font-medium text-white transition
                    hover:bg-primary/90
                    hover:shadow-[0_0_0_1px_rgba(59,130,246,0.35)]
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
