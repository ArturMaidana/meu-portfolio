import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <Image
            src="/images/aboutmee.png"
            alt="About illustration"
            className="w-full h-auto"
            width={500} // Defina a largura real da imagem
            height={300} // Defina a altura real da imagem
            layout="responsive"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">Sobre mim</h2>
          <p className="text-white/80 text-lg">
            Meu objetivo é contribuir para projetos que façam a diferença, com
            foco em qualidade e usabilidade.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="font-bold min-w-[100px]">Nome:</span>
              <span className="text-white/80">Artur Maidana</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold min-w-[100px]">Idade:</span>
              <span className="text-white/80">20 anos</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold min-w-[100px]">Endereço:</span>
              <span className="text-white/80">Cuiabá, MT - Brazil</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold min-w-[100px]">Email:</span>
              <span className="text-white/80">arturmaidana2712@gmail.com</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold min-w-[100px]">Telefone:</span>
              <span className="text-white/80">+55 65 984227220</span>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-4">
              <span className="text-amber-500 text-4xl font-bold ">25</span>
              <span className="text-white/80">Projetos realizados</span>
            </div>
          </div>

          <Link
            href="/Curriculo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-black px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors mt-6"
          >
            Donwload Currículo
          </Link>
        </div>
      </div>
    </section>
  );
}
