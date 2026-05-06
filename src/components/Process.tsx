"use client";

import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-cream">
      <div className="container-base">
        <FadeIn>
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight text-balance max-w-xl">
            Proceso de trabajo en 4 pasos
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mb-16">
            Un proceso simple y ordenado, diseñado para que cada etapa tenga
            un resultado concreto.
          </p>
        </FadeIn>

        {/* Single DOM render — layout cambia con CSS según breakpoint */}
        <div className="relative flex flex-col lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Línea horizontal desktop */}
          <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-choco-200 via-pista-200 to-stone-200" />

          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.11}>
              <div className="flex lg:flex-col items-stretch lg:items-center lg:text-center">
                {/* Círculo + línea vertical mobile */}
                <div className="flex flex-col items-center mr-5 lg:mr-0 lg:mb-6 shrink-0">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border-2 border-choco-300 flex items-center justify-center shadow-warm z-10 relative">
                    <span className="font-display font-bold text-choco-700 text-sm">
                      {step.step}
                    </span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="lg:hidden w-px flex-1 bg-choco-100 mt-3 min-h-[40px]" />
                  )}
                </div>

                {/* Contenido */}
                <div
                  className={`flex-1 lg:flex-none ${
                    i < processSteps.length - 1 ? "pb-8 lg:pb-0" : ""
                  }`}
                >
                  <span className="inline-block px-2.5 py-1 rounded-full bg-choco-50 border border-choco-200 text-choco-600 text-[11px] font-semibold mb-2 lg:mb-3">
                    {step.detail}
                  </span>
                  <h3 className="font-display font-semibold text-stone-900 mb-1.5 lg:mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Duration note */}
        <FadeIn delay={0.4}>
          <div className="mt-14 flex items-center justify-center">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-stone-200/70 shadow-warm">
              <div className="w-2 h-2 rounded-full bg-pista-400 shrink-0" />
              <p className="text-sm text-stone-600">
                <span className="font-semibold text-stone-900">
                  Duración estimada: 3 a 5 semanas,
                </span>{" "}
                dependiendo del ritmo del proceso de diseño y de los tiempos
                de Nico y Gero.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
