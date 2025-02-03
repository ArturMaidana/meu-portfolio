"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      let currentSection = null;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre", label: "Sobre" },
    { href: "#resumo", label: "Resumo" },
    { href: "#servicos", label: "Serviços" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold">ARTUR</div>
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-white/80 transition-colors duration-300 ${
                  activeSection === href.replace("#", "")
                    ? "text-yellow-500 font-semibold"
                    : "hover:text-yellow-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
