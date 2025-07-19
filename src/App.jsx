import HeroSection from "./components/heroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/projectSection";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
