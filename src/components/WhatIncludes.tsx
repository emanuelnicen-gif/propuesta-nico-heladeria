import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { services } from "@/data/content";
import {
  MessageSquare,
  FileText,
  PenLine,
  Users,
  Megaphone,
  CheckSquare,
} from "lucide-react";

const iconMap = {
  MessageSquare,
  FileText,
  PenLine,
  Users,
  Megaphone,
  CheckSquare,
};

const serviceColors = [
  { bg: "bg-choco-100", icon: "text-choco-600" },
  { bg: "bg-pista-100", icon: "text-pista-600" },
  { bg: "bg-choco-50", icon: "text-choco-500" },
  { bg: "bg-stone-100", icon: "text-stone-600" },
  { bg: "bg-pista-50", icon: "text-pista-500" },
  { bg: "bg-choco-100", icon: "text-choco-600" },
];

export function WhatIncludes() {
  return (
    <section
      id="que-incluye"
      className="section-padding bg-gradient-to-b from-cream to-cream-dark/50"
    >
      <div className="container-base">
        <FadeIn>
          <SectionLabel>Qué incluye</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight text-balance max-w-xl">
            Qué incluye este acompañamiento
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mb-14">
            Seis entregables concretos, pensados para que el proceso de
            construcción de marca tenga dirección desde el principio.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const colors = serviceColors[i % serviceColors.length];

            return (
              <FadeIn key={service.id} delay={i * 0.09}>
                <div className="group bg-white rounded-2xl border border-stone-200/70 shadow-warm p-7 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <span className="text-xs font-bold text-stone-300 font-display">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-stone-900 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
