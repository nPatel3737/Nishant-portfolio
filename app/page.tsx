import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import HeroVisual from "./components/HeroVisual";
import SimulatorGallery from "./components/SimulatorGallery";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="max-w-[1120px] mx-auto px-6">
        <HeroSection />
        <HeroVisual />

        <div className="divider" />
        <SimulatorGallery />

        <div className="divider" />
        <ProjectsSection />

        <div className="divider" />
        <ArticlesSection />

        <div className="divider" />
        <ExperienceSection />

        <div className="divider" />
        <SkillsSection />

        <div className="divider" />
        <EducationSection />

        <div className="divider" />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
