const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-amber-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Minhas Habilidades</h2>
        <p className="text-white/80">
          Minhas principais habilidades da prototipagem ao desenvolvimento.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { name: "Flutter", value: 90 },
          { name: "React", value: 85 },
          { name: "Nodejs", value: 95 },
          { name: "Next.JS", value: 90 },
          { name: "Python", value: 70 },
          { name: "Figma", value: 80 },
        ].map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-amber-500">{skill.value}%</span>
            </div>
            <ProgressBar value={skill.value} />
          </div>
        ))}
      </div>
    </section>
  );
}
