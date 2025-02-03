"use client";

import { Briefcase, Code2 } from "lucide-react";
import Link from "next/link";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-amber-500 text-xl font-medium">OLÁ!</h2>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Meu nome é
            <br />
            <span className="text-amber-500">Artur Maidana</span>
          </h1>
          <p className="text-3xl text-white/80">Um Web Designer Freelancer</p>
          <div className="flex gap-4 pt-4">
            <Link
              href="#contato"
              className="bg-amber-500 text-black px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
            >
              Contrate-me
            </Link>
            <Link
              href="#trabalhos"
              className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Meus Trabalhos
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative">
            <img
              src="/images/Development-cuate.png"
              alt="Web Development Illustration"
              className="w-full h-auto rounded-lg opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-lg"></div>

            <div className="absolute -top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-lg">
              <Code2 className="w-6 h-6 text-amber-500" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-3 rounded-lg">
              <Briefcase className="w-6 h-6 text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
