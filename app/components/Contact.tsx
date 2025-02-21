"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Nova mensagem do portfólio!");
    formData.append("_captcha", "false");

    const res = await fetch(
      "https://formsubmit.co/arturmaidana2712@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    if (res.ok) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      form.reset();
    }

    setTimeout(() => setIsSubmitting(false), 5000);
  };

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
          <Image
            src="/images/Mail-bro.png"
            alt="Contact Illustration"
            className="w-full h-auto"
            width={500} // Defina a largura real da imagem
            height={300} // Defina a altura real da imagem
          />
        </div>

        <div className="space-y-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
            />
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              rows={6}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-amber-500 text-black hover:bg-amber-400"
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity animate-fadeIn">
          Mensagem enviada com sucesso!
        </div>
      )}
    </section>
  );
}
