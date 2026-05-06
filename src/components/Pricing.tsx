import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { pricingIncludes } from "@/data/content";
import { Check, ArrowRight } from "lucide-react";

export function Pricing() {
  return (
    <section id="inversion" className="section-padding bg-cream">
      <div className="container-base">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="text-center">Inversión</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight text-balance">
              Valor de la propuesta
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed max-w-xl mx-auto">
              Un valor claro y acotado para una primera etapa concreta: ordenar
              la base estratégica de la marca y acompañar las decisiones
              iniciales del proceso.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-[520px] mx-auto">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-choco-200/20 to-transparent rounded-4xl blur-2xl scale-95 translate-y-3" />

              <div className="relative bg-white rounded-4xl border border-stone-200/80 shadow-warm-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-br from-choco-600 to-choco-700 px-8 py-8 text-white">
                  <p className="text-choco-200 text-xs font-semibold uppercase tracking-widest mb-4">
                    Acompañamiento estratégico de marca
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="font-display font-bold text-5xl tracking-tight">
                      USD 300
                    </span>
                  </div>
                  <p className="text-choco-200 text-sm mt-1">
                    Equivalentes en pesos al momento de pago
                  </p>

                  <div className="mt-5 pt-5 border-t border-choco-500/40 flex items-center gap-6 text-sm text-choco-100">
                    <div>
                      <span className="block text-choco-300 text-xs mb-0.5">
                        Forma de pago
                      </span>
                      50% al inicio · 50% al cierre
                    </div>
                    <div>
                      <span className="block text-choco-300 text-xs mb-0.5">
                        Duración
                      </span>
                      3 a 5 semanas
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
                    Qué incluye
                  </p>

                  <ul className="space-y-3.5">
                    {pricingIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-pista-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-pista-600" />
                        </div>
                        <span className="text-stone-700 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cierre"
                    className="mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 active:scale-[0.98] transition-all duration-200"
                  >
                    Coordinemos la primera reunión
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-xs text-stone-400 text-center mt-5 leading-relaxed">
                    Es un valor pensado especialmente para esta primera etapa del
                    proyecto, contemplando la relación personal y que el
                    desarrollo visual de la identidad lo va a trabajar Gero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
