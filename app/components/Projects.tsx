import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Projetos</h2>
        <p className="text-white/80">
          Confira meus projetos em desenvolvimento mobile e UI/UX.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: 1, imagem: "/images/AppCidadao.png", nome: "Projeto 1" },
          { id: 2, imagem: "/images/PortalCidadao.png", nome: "Projeto 2" },
          { id: 3, imagem: "/images/PortalServidor.png", nome: "Projeto 3" },
          { id: 4, imagem: "/images/Mockup-Cidadao.png", nome: "Projeto 4" },
          { id: 5, imagem: "/images/Savitar.png", nome: "Projeto 5" },
          { id: 6, imagem: "/images/CloudSense.png", nome: "Projeto 6" },
        ].map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={project.imagem}
              alt={project.nome}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link
                href="#"
                className="bg-amber-500 text-black px-6 py-2 rounded-full font-medium hover:bg-amber-400 transition-colors"
              >
                Ver Projeto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
