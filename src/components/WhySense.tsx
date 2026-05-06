import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { whySensePoints } from "@/data/content";

export function WhySense() {
  return (
    <section
      id="por-que"
      className="section-padding bg-gradient-to-b from-cream-dark/40 to-cream"
    >
      <div className="container-base">
        <FadeIn>
          <SectionLabel>Por qué tiene sentido</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-14 tracking-tight text-balance max-w-2xl">
            Por qué sumarme puede hacer la diferencia
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {whySensePoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.12}>
              <div className="group relative bg-white rounded-3xl border border-stone-200/70 shadow-warm p-7 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                {/* Decorative number */}
                <span className="font-display font-bold text-7xl text-stone-50 absolute top-4 right-6 leading-none select-none pointer-events-none group-hover:text-choco-50/70 transition-colors">
                  {i + 1}
                </span>

                <div className="relative">
                  <h3 className="font-display font-semibold text-stone-900 text-lg mb-3 leading-snug text-balance">
                    {point.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quote block */}
        <FadeIn delay={0.3}>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="inline-block px-8 py-6 rounded-3xl bg-choco-50 border border-choco-100">
              <p className="text-stone-700 text-base leading-relaxed">
                <span className="font-semibold text-stone-900">
                  Una marca no se construye solo cuando se diseña un logo.
                </span>{" "}
                También se construye en cómo se presenta, cómo se comunica,
                cómo se aplica y cómo se vive en el local.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
