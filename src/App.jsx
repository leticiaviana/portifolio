import HeroSection from "./components/heroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/projectSection";
import ContactSection from "./components/contactSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 p-1 font-sans">
      <div className="relative z-10 min-h-screen text-gray-200">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
    

      </div>
    </div>
  );
}