import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function Closing() {
  return (
    <section id="cierre" className="section-padding bg-cream">
      <div className="container-base">
        <FadeIn>
          <div className="relative max-w-3xl mx-auto">
            {/* Background card */}
            <div className="relative bg-gradient-to-br from-stone-900 to-stone-800 rounded-4xl overflow-hidden px-10 py-14 md:px-16 md:py-16 text-center">
              {/* Subtle texture */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-choco-600/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-pista-600/10 rounded-full blur-3xl" />

              <div className="relative">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-medium mb-7">
                  Próximo paso
                </span>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight text-balance leading-[1.15]">
                  El próximo paso sería arrancar con una reunión de diagnóstico
                </h2>

                <p className="text-stone-400 text-base leading-relaxed max-w-lg mx-auto mb-10">
                  En esa primera instancia ordenamos la idea del negocio, las
                  referencias, el estilo buscado y los criterios que después van
                  a orientar el trabajo con Gero.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-choco-500 text-white font-semibold text-sm hover:bg-choco-400 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-choco-900/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coordinemos la primera reunión
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#que-incluye"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-all duration-200"
                  >
                    Revisar la propuesta
                  </a>
                </div>

                <p className="text-stone-500 text-xs mt-8">
                  Emanuel Nicenboim · Estrategia y acompañamiento de marca
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
