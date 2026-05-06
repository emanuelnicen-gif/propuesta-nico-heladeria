import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { problems } from "@/data/content";
import { AlertCircle } from "lucide-react";

export function Problems() {
  return (
    <section id="problemas" className="section-padding bg-cream">
      <div className="container-base">
        <FadeIn>
          <SectionLabel>Qué ayuda a evitar</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight text-balance max-w-2xl">
            Problemas concretos que este proceso ayuda a resolver
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mb-14">
            Construir una marca sin una dirección clara puede traer costos
            reales: tiempo perdido, decisiones que hay que revisar y un
            resultado que no termina de funcionar. Esto es lo que me propongo
            ayudar a evitar.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <FadeIn key={problem.title} delay={i * 0.08}>
              <div className="group flex gap-4 bg-white rounded-2xl border border-stone-200/70 shadow-warm p-6 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-choco-300 group-hover:text-choco-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stone-900 text-sm mb-1.5 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
