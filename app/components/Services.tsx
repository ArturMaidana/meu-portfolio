import {
  Gift,
  LayoutTemplate,
  Lightbulb,
  Palette,
  Search,
  FlaskRound as Flask,
} from "lucide-react";

export default function Services() {
  return (
    <section
      id="servicos"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Serviços</h2>
        <p className="text-white/80">
          A ponte entre suas ideias e o futuro em desenvolvimento e inovação.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Search className="w-8 h-8" />, title: "WEB DEVELOPER" },
          { icon: <Flask className="w-8 h-8" />, title: "UI/UX DESIGN" },
          { icon: <Gift className="w-8 h-8" />, title: "MOBILE DEVELOPER" },
          {
            icon: <LayoutTemplate className="w-8 h-8" />,
            title: "SOFTWARE ARCHITECTURE",
          },
          { icon: <Palette className="w-8 h-8" />, title: "BRANDING" },
          {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "PRODUCT STRATEGY",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-8 rounded-lg text-center group hover:bg-zinc-800 transition-colors"
          >
            <div className="w-16 h-16 mx-auto bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
              <div className="text-amber-500">{service.icon}</div>
            </div>
            <h3 className="font-bold text-lg">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
