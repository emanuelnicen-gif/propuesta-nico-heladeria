import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { notIncludeItems } from "@/data/content";
import { X } from "lucide-react";

export function WhatNotIncludes() {
  return (
    <section
      id="alcance"
      className="section-padding bg-gradient-to-b from-cream-dark/40 to-cream"
    >
      <div className="container-base">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionLabel>Para que quede claro</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight text-balance">
              Qué no incluye esta propuesta
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              El alcance importa. Definirlo desde el principio evita
              malentendidos y deja claro en qué se enfoca este servicio. Todo
              lo que no está incluido acá puede evaluarse como una segunda
              etapa si tiene sentido.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl border border-stone-200/70 shadow-warm overflow-hidden">
              <div className="px-8 py-5 border-b border-stone-100 bg-stone-50/50">
                <p className="text-sm font-semibold text-stone-600">
                  No incluido en esta propuesta
                </p>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
                <ul className="divide-y divide-stone-100">
                  {notIncludeItems
                    .slice(0, Math.ceil(notIncludeItems.length / 2))
                    .map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 px-7 py-4 hover:bg-stone-50/70 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                        <span className="text-sm text-stone-600">{item}</span>
                      </li>
                    ))}
                </ul>
                <ul className="divide-y divide-stone-100">
                  {notIncludeItems
                    .slice(Math.ceil(notIncludeItems.length / 2))
                    .map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 px-7 py-4 hover:bg-stone-50/70 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                        <span className="text-sm text-stone-600">{item}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-sm text-stone-400 text-center mt-6 leading-relaxed">
              Todo eso puede evaluarse en una segunda etapa si hiciera falta,
              pero no forma parte de esta propuesta inicial.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
