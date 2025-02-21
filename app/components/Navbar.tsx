"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Code,
  Wrench,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  // Função para atualizar a seção ativa ao clicar em um link
  const handleLinkClick = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre",
        "resumo",
        "servicos",
        "habilidades",
        "projetos",
        "contato",
      ];

      let closestSection = null;
      let closestDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top); // Distância do topo da seção ao topo da viewport

          // Verifica se a seção está visível na viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            // Se a distância for menor que a mais próxima, atualiza a seção ativa
            if (distance < closestDistance) {
              closestSection = section;
              closestDistance = distance;
            }
          }
        }
      }

      // Atualiza a seção ativa apenas se uma seção válida for encontrada
      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#inicio", label: "Inicio", icon: Home },
    { href: "#sobre", label: "Sobre", icon: User },
    { href: "#resumo", label: "Resumo", icon: FileText },
    { href: "#servicos", label: "Serviços", icon: Wrench },
    { href: "#habilidades", label: "Habilidades", icon: Code },
    { href: "#projetos", label: "Projetos", icon: Briefcase },
    { href: "#contato", label: "Contato", icon: Mail },
  ];

  return (
    <div>
      {/* Desktop Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-white">ARTUR</div>
            <div className="flex space-x-8">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => handleLinkClick(href.replace("#", ""))}
                  className={`text-white/80 transition-colors duration-300 ${
                    activeSection === href.replace("#", "")
                      ? "text-yellow-500 font-semibold"
                      : "hover:text-yellow-600"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 w-full z-50 bg-black/90 backdrop-blur-sm md:hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center px-4 py-2 min-w-max">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleLinkClick(href.replace("#", ""))}
                className={`flex flex-col items-center px-4 py-1 ${
                  activeSection === href.replace("#", "")
                    ? "text-yellow-500"
                    : "text-white/80"
                }`}
              >
                <Icon className="w-5 h-5 mb-0.5" />
                <span className="text-[10px]">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
