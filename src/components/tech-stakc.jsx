// src/data/techStack.js
import { useRef, useEffect } from 'react';



const techs = [
  { name: "ANGULAR", icon: "🅰️", glow: "text-red-400" },
  { name: "REACT", icon: "⚛", glow: "text-cyan-300" },
  { name: "TYPESCRIPT", icon: "⌲", glow: "text-blue-400" },
  { name: "JAVA", icon: "♨", glow: "text-orange-500" },
  { name: "SPRING BOOT", icon: "🌱", glow: "text-green-300" },
  { name: "NODE.JS", icon: "⬢", glow: "text-green-400" },
  { name: "POSTGRESQL", icon: "🗄", glow: "text-indigo-300" },
  { name: "DOCKER", icon: "🐳", glow: "text-blue-200" },
  { name: "TAILWIND CSS", icon: "🌀", glow: "text-teal-300" },
  { name: "CYPRESS", icon: "🧪", glow: "text-emerald-300" },
  { name: "GIT", icon: "🔧", glow: "text-orange-300" },
  { name: "CI/CD", icon: "🔁", glow: "text-pink-300" }
];

// src/components/TechStack.jsx

export function TechCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;
    
    const animate = () => {
      if (carousel) {
        carousel.scrollLeft += 0.5; // Velocidade ajustável
        if (carousel.scrollLeft >= (carousel.scrollWidth / 2)) {
          carousel.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative overflow-hidden py-8 my-12 border-y border-cyan-400/30">
      {/* Efeito de reflexo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      {/* Carrossel duplicado para loop contínuo */}
      <div 
        ref={carouselRef}
        className="flex w-full overflow-x-scroll no-scrollbar"
      >
        {[...techs, ...techs].map((tech, i) => (
          <div 
            key={i} 
            className={`flex-shrink-0 mx-4 px-6 py-3 border-2 border-cyan-400/50 rounded-lg backdrop-blur-sm flex items-center ${tech.glow} glow-effect`}
            style={{
              minWidth: '180px',
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)'
            }}
          >
            <span className="text-xl mr-3">{tech.icon}</span>
            <span className="font-mono font-bold tracking-wider">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Efeito de brilho nos extremos */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
    </div>
  );
}