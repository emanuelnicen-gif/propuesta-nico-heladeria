import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { emaContributions } from "@/data/content";

export function MyRole() {
  return (
    <section
      id="mi-rol"
      className="section-padding bg-gradient-to-b from-cream-dark/60 to-cream"
    >
      <div className="container-base">
        <FadeIn>
          <SectionLabel>Mi aporte</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight text-balance max-w-2xl">
            Conectar la idea del negocio con la marca que se va a diseñar
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mb-14">
            Mi trabajo no es diseñar. Es asegurarme de que cuando Gero diseñe,
            lo haga con una dirección clara, y de que cuando Nico tenga que
            decidir, pueda hacerlo con criterio.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {emaContributions.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl border border-stone-200/70 shadow-warm p-6 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-choco-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-choco-200 transition-colors">
                    <span className="text-choco-700 text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-stone-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed pl-10">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
