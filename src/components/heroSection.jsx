export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b">
      <section>
        <div class="hero-container text-5xl md:text-7xl font-bold tracking-tight">
          <div class="environment"></div>
          <h2 class="hero glitch layers" data-text="LETICIA VIANA">
            <span>LETICIA VIANA</span>
          </h2>
        </div>
      </section>

      <p className="text-xl md:text-2xl mb-12 text-yellow-100 max-w-2xl drop-shadow-lg drop-shadow-cyan-500/100">
        Turning ideas into real life projects.
      </p>

      <div className="flex flex-wrap justify-center gap-6 buttons mb-20">
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          PROJECTS
        </button>
        <button className="px-8 py-3 border-2 border-black rounded-full hover:bg-gray-100 transition">
          ABOUT ME
        </button>
        <button className="px-8 py-3 border-2 border-black rounded-full hover:bg-gray-100 transition">
          CONTACT
        </button>
      </div>
      <button class="btn">
        <div class="scroll"> </div>
      </button>
    </section>
  );
}
