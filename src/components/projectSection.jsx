const projects = [
  {
    title: "APOHE",
    description: "Contexto e procura de patologias em projetos",
    tags: ["Web App", "Saúde"]
  },
  {
    title: "PROJETOT",
    description: "Aprix assuntos relacionados a futuros digitais",
    tags: ["Mobile", "UX"]
  },
  {
    title: "GENICIDADE",
    description: "Tecnologia genética projetada para assentamentos",
    tags: ["IA", "Biotecnologia"]
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          PROJETOS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                VER PROJETO →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}