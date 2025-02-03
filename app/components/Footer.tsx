import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sobre</h3>
            <p className="text-white/80">
              Estudante de Sistemas de Informação pela UFMT-Cuiabá/MT,
              desenvolvedor de sistemas e viciado em aprender novas linguagens e
              frameworks.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-white/80 hover:text-amber-500 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-white/80 hover:text-amber-500 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-white/80 hover:text-amber-500 transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="text-white/80 hover:text-amber-500 transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-white/80 hover:text-amber-500 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Web Design</li>
              <li className="text-white/80">Web Development</li>
              <li className="text-white/80">Business Strategy</li>
              <li className="text-white/80">Data Analysis</li>
              <li className="text-white/80">Graphic Design</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tem alguma dúvida?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="text-amber-500" />
                1409 Princesa do Sol, Várzea Grande, Cuiabá, Mato grosso, BR
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="text-amber-500" />
                +55 65 984227220
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="text-amber-500" />
                arturmaidana2712@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
