import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./ui/SectionLabel";
import { roles } from "@/data/content";
import { Palette, Compass, Lightbulb, Check } from "lucide-react";

const iconMap = {
  Palette,
  Compass,
  Lightbulb,
};

const colorMap = {
  pista: {
    bg: "bg-pista-100",
    icon: "text-pista-600",
    border: "border-pista-200/60",
    badge: "bg-pista-50 text-pista-700 border-pista-200",
    check: "text-pista-500",
  },
  choco: {
    bg: "bg-choco-100",
    icon: "text-choco-600",
    border: "border-choco-300/40",
    badge: "bg-choco-50 text-choco-700 border-choco-200",
    check: "text-choco-500",
  },
  stone: {
    bg: "bg-stone-100",
    icon: "text-stone-600",
    border: "border-stone-200",
    badge: "bg-stone-50 text-stone-700 border-stone-200",
    check: "text-stone-400",
  },
};

export function Context() {
  return (
    <section id="contexto" className="section-padding bg-cream">
      <div className="container-base">
        <FadeIn>
          <SectionLabel>El contexto</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight text-balance max-w-xl">
            Tres personas, un proyecto, un objetivo claro
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mb-14">
            Nico está comenzando el proceso para construir la marca de su
            heladería en Ricardone. Gero va a trabajar el desarrollo visual de
            la identidad. Mi propuesta es sumarme desde un rol complementario:
            estrategia, orden y criterio para que las decisiones de marca
            tengan sentido desde el negocio.
          </p>
        </FadeIn>

        {/* Roles grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {roles.map((role, i) => {
            const Icon = iconMap[role.icon as keyof typeof iconMap];
            const colors = colorMap[role.color];

            return (
              <FadeIn key={role.name} delay={i * 0.12}>
                <div
                  className={`relative bg-white rounded-3xl border ${colors.border} ${
                    role.highlight
                      ? "shadow-warm-md ring-1 ring-choco-200/50"
                      : "shadow-warm"
                  } p-7 h-full flex flex-col`}
                >
                  {role.highlight && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 rounded-full bg-choco-600 text-white text-[11px] font-semibold uppercase tracking-wider shadow-sm">
                        Mi rol
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  <div className="mb-1">
                    <p className="font-display font-bold text-xl text-stone-900">
                      {role.name}
                    </p>
                    <p className={`text-xs font-semibold mt-0.5 ${colors.icon}`}>
                      {role.label}
                    </p>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed mt-3 mb-5 flex-1">
                    {role.description}
                  </p>

                  <ul className="space-y-2">
                    {role.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-stone-600"
                      >
                        <Check className={`w-3.5 h-3.5 shrink-0 ${colors.check}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Flow indicator */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-pista-50 border border-pista-200 text-pista-700 font-medium">
              Gero diseña
            </span>

            <span className="md:hidden text-stone-300 text-xs" aria-hidden="true">↓</span>
            <span className="hidden md:block text-stone-300 font-light">·</span>

            <span className="px-4 py-2 rounded-full bg-choco-50 border border-choco-200 text-choco-700 font-medium">
              Ema acompaña
            </span>

            <span className="md:hidden text-stone-300 text-xs" aria-hidden="true">↓</span>
            <span className="hidden md:block text-stone-300 font-light">·</span>

            <span className="px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-stone-700 font-medium">
              Nico decide
            </span>

            <span className="md:hidden text-stone-300 text-xs" aria-hidden="true">↓</span>
            <span className="hidden md:inline text-stone-300 font-light">→</span>

            <span className="px-4 py-2 rounded-full bg-stone-900 text-white font-medium">
              Marca que funciona
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
