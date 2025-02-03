export default function Contact() {
  return (
    <section
      id="contato"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Entre em contato comigo</h2>
        <p className="text-white/80">
          Caso precise de um freelancer para seu projeto, sinta-se à vontade
          para entrar em contato. Terei o prazer em ajudar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src="/images/Mail-bro.png"
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
            />
            <textarea
              placeholder="Mensagem"
              rows={6}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white resize-none"
            />
            <button
              type="submit"
              className="w-full bg-amber-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
