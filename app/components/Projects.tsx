"use client";

import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string[];
  gallery: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Defensoria Pública MT Cidadão - Mobile",
    description:
      "Acesse serviços e informações da Defensoria Pública de MT de forma rápida e fácil!\nSimplificamos o seu acesso à justiça com o app da Defensoria Pública de Mato Grosso. Consulte processos, agende atendimentos e obtenha orientações jurídicas diretamente pelo seu celular. Fácil de usar, mesmo para quem não é familiarizado com aplicativos.",
    image: "/images/BannerCid.png",
    details: [
      "Solicitação e acompanhamento de agendamento.",
      "Acompanhe seus processos.",
      "Emissão de Hipossuficiência.",
      "Canal de Ouvidoria",
      "Encontre a Defensoria mais próxima de você",
      "Fique por dentro das principais notícias",
    ],
    gallery: ["/images/BannerCid.png"],
  },
  {
    id: 2,
    title: "Assistente de Gabinete",
    description:
      "Desenvolvido para auxiliar os gabinetes da Defensoria Pública de Mato Grosso, o assistente de gabinete reúne ferramentas essenciais para otimizar o trabalho dos defensores e suas equipes. Com transcrição automatizada, inteligência artificial e consulta rápida de processos, o serviço facilita o acesso a informações e melhora a produtividade no dia a dia.",
    image: "/images/gabinete.png",
    details: ["Transcrições", "IA para defensores", "Consulta de Processos"],
    gallery: ["/images/01.png", "/images/02.png", "/images/03.png"],
  },
  {
    id: 3,
    title: "Portal Servidor Versão Mobile",
    description:
      "O Portal do Servidor ainda está em fase de protótipo, com novas funcionalidades sendo desenvolvidas para melhorar a experiência dos defensores e servidores da Defensoria Pública de Mato Grosso. Mesmo em andamento, já dispõe de serviços essenciais para o dia a dia.",
    image: "/images/PortServidor.png",
    details: [
      "Visualização de peticionamentos",
      "Audiências agendadas",
      "Vade Mecum",
      "Avisos pendentes",
      "Dúvidas do Jurídico ",
      "Ementário",
    ],
    gallery: ["images/BannerMobile.png"],
  },
  {
    id: 4,
    title: "CloudSense",
    description:
      "Sistema interno para gestão de recursos humanos e processos administrativos",
    image: "/images/CloudSense02.png",
    details: [
      "Gestão de documentos",
      "Workflow automatizado",
      "Relatórios em tempo real",
      "Integração com sistemas legados",
    ],
    gallery: ["/images/cloudsense.png"],
  },
  {
    id: 5,
    title: "Portal Servidor Versão Web",
    description:
      "A versão web do Portal do Servidor oferece ainda mais ferramentas para os defensores e servidores da Defensoria Pública de Mato Grosso. Além dos serviços já disponíveis na versão mobile, a plataforma para desktop conta com inteligência artificial para consultas jurídicas e um painel com as principais notícias internas.",
    image: "/images/LaptopServidor.png",
    details: [
      "Visualização de peticionamentos",
      "Audiências agendadas",
      "Vade Mecum",
      "Avisos pendentes",
      "Dúvidas do Jurídico ",
      "Ementário",
      "Inteligência Artificial",
      "Notícias Internas",
    ],
    gallery: ["images/HomeServidor.png"],
  },
  {
    id: 6,
    title: "Portal Servidor",
    description:
      "Sistema interno para gestão de recursos humanos e processos administrativos",
    image: "/images/Savitar.png",
    details: [
      "Gestão de documentos",
      "Workflow automatizado",
      "Relatórios em tempo real",
      "Integração com sistemas legados",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

function Drawer() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null); // Referência para o "drawer"
  const [isOpening, setIsOpening] = useState(false); // Estado para controlar a animação de abertura

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setSelectedProject(null); // Fecha o "drawer" se clicar fora
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedProject) {
      setIsOpening(true); // Quando o drawer é aberto, inicia a animação
    } else {
      setIsOpening(false); // Quando o drawer é fechado, termina a animação
    }
  }, [selectedProject]);

  return (
    <div id="projetos" className="min-h-screen text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projetos</h2>
          <p className="text-white/80">
            Confira meus projetos em desenvolvimento mobile e UI/UX.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-amber-500 text-black px-6 py-2 rounded-full font-medium hover:bg-amber-400 transition-colors"
                >
                  Ver Projeto
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div
            ref={drawerRef}
            className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-zinc-900 shadow-lg transform transition-all duration-300 ease-in-out ${
              isOpening ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300">{selectedProject.description}</p>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Detalhes</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Galeria</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${selectedProject.title} - Imagem ${index + 1}`}
                          className="w-full rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drawer;
