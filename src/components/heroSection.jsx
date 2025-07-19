export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b">
        <section>

        <div class="hero-container text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <div class="environment"></div>
          <h2 class="hero glitch layers" data-text="LETICIA VIANA">
            <span>LETICIA <br/> VIANA</span>
          </h2>
        </div>
      </section>
      
      <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl">
        criando o futuro em código com alma de revolução
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          VER PROJETOS
        </button>
        <button className="px-8 py-3 border-2 border-black rounded-full hover:bg-gray-100 transition">
          CONHECER LETICIA
        </button>
      </div>
    </section>
  )
}