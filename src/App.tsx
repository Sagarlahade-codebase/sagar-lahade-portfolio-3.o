import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

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
  const [loading, setLoading] = useState(false);

  /* ================= FORCE HOME ON PAGE RELOAD ================= */
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  /* ================= CONTACT FORM HANDLER ================= */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return; // prevent double submit
    setLoading(true);

    const form = e.currentTarget; // store before await
    let toastId: string | undefined;

    try {
      toastId = toast.loading("Sending message...");

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!", { id: toastId });
        form.reset();
      } else {
        throw new Error("EmailJS returned non-200 status");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgDark text-slate-100">
      {/* ================= TOAST CONTAINER ================= */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#020617",
            color: "#e5e7eb",
            border: "1px solid #1e293b",
          },
        }}
      />

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
        <AwardsAchievementsSection />
        <ResearchPapersSection />

        {/* ================= CONTACT ================= */}
        <Section id="contact" title="Contact">
          <div className="grid gap-6 text-sm md:grid-cols-2">
            {/* Contact info */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="mb-2 text-slate-200">
                Interested in a Java/React engineer who can own the backend and
                work comfortably with cloud and frontend? Let’s talk.
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
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
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
                  disabled={loading}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition
                    ${
                      loading
                        ? "cursor-not-allowed bg-primary/60"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                >
                  {loading && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
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
