export default function () {
  return (
    <section
      id="resumo"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Resumo</h2>
        <p className="text-white/80">
          Minhas principais certificações e carreira acadêmica.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white bg-opacity-5 p-8 rounded-lg">
          <div className="text-amber-500 font-bold">2023-2023</div>
          <h3 className="text-xl font-bold mt-2">
            Qualificação Profissional FullStack
          </h3>
          <div className="text-white/60 text-sm mt-1">
            ESCOLA TÉCNICA ESTADUAL DE CUIABÁ
          </div>
          <p className="text-white/80 mt-4 font-light">
            Conclui um curso de Desenvolvimento Full Stack com React, Node.js e
            PostgreSQL, focado na criação de interfaces dinâmicas, APIs RESTful
            e integração de bancos de dados.
          </p>
        </div>

        <div className="bg-white bg-opacity-5 p-8 rounded-lg">
          <div className="text-amber-500 font-bold">2023-2026</div>
          <h3 className="text-xl font-bold mt-2">Sistemas de Informação</h3>
          <div className="text-white/60 text-sm mt-1">
            UNIVERSIDADE FEDERAL DE MATO GROSSO
          </div>
          <p className="text-white/80 mt-4 font-light">
            Atualmente cursando Bacharelado em Sistemas de Informação, com foco
            no desenvolvimento de sistemas, tecnologias emergentes e soluções
            inovadoras para o mercado.
          </p>
        </div>

        <div className="bg-white bg-opacity-5 p-8 rounded-lg">
          <div className="text-amber-500 font-bold">2025-2025</div>
          <h3 className="text-xl font-bold mt-2">
            Oracle Certified Foundations Associate
          </h3>
          <div className="text-white/60 text-sm mt-1">ORACLE</div>
          <p className="text-white/80 mt-4 font-light">
            Certificação obtida após concluir um curso focado nos fundamentos de
            inteligência artificial e no uso dos serviços Oracle Cloud
            Infrastructure.
          </p>
        </div>

        <div className="bg-white bg-opacity-5 p-8 rounded-lg">
          <div className="text-amber-500 font-bold">2024-2024</div>
          <h3 className="text-xl font-bold mt-2">Curso Completo de Flutter</h3>
          <div className="text-white/60 text-sm mt-1">UDEMY</div>
          <p className="text-white/80 mt-4 font-light">
            Certificação obtida após concluir um curso completo de Flutter,
            abordando design responsivo, integração de APIs e funcionalidades
            avançadas para aplicativos móveis.
          </p>
        </div>
      </div>
    </section>
  );
}
