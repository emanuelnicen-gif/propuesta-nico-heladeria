"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, CreditCard, ArrowDown, DollarSign } from "lucide-react";

const stagger = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] } },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-cream" />
      <div className="absolute inset-0 bg-gradient-to-br from-choco-50/50 via-transparent to-pista-50/25" />

      {/* Decorative blobs */}
      <div className="absolute top-32 right-[-80px] w-[480px] h-[480px] bg-choco-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-60px] w-80 h-80 bg-pista-100/25 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle texture dots */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7c4d18 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-center">
          {/* Left: Main content */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={stagger.item}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-choco-100 border border-choco-200/70 text-choco-700 text-xs font-medium mb-7">
                <MapPin className="w-3 h-3 shrink-0" />
                Propuesta para Nico · Heladería en Ricardone
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={stagger.item}
              className="font-display text-4xl md:text-5xl xl:text-[3.35rem] font-bold text-stone-900 leading-[1.1] tracking-tight mb-6 text-balance"
            >
              Acompañamiento estratégico para construir y lanzar la marca de tu
              heladería
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={stagger.item}
              className="text-stone-500 text-lg leading-relaxed mb-9 max-w-[530px]"
            >
              Una propuesta para que la marca no quede solo en un logo lindo,
              sino en una identidad pensada para funcionar en el local, en
              redes, en el packaging y en la experiencia real del negocio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={stagger.item}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#que-incluye"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 active:scale-[0.98] transition-all duration-200 shadow-md"
              >
                Ver propuesta
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#alcance"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-700 font-medium text-sm hover:bg-stone-50 hover:border-stone-300 active:scale-[0.98] transition-all duration-200"
              >
                Ver alcance
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={stagger.item}
              className="mt-8 text-xs text-stone-400"
            >
              Diseñado por Ema para Nico · Proceso de 3 a 5 semanas · USD 300
            </motion.p>
          </motion.div>

          {/* Right: Summary card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-choco-200/20 rounded-3xl blur-2xl scale-95 translate-y-2" />

              <div className="relative bg-white rounded-3xl border border-stone-200/80 shadow-warm-lg p-8 animate-float">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-7">
                  Resumen de la propuesta
                </p>

                <div className="space-y-6">
                  {/* Price */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-choco-100 flex items-center justify-center shrink-0">
                      <DollarSign className="w-5 h-5 text-choco-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-0.5">Inversión</p>
                      <p className="font-display font-bold text-2xl text-stone-900 leading-none">
                        USD 300
                      </p>
                      <p className="text-xs text-stone-400 mt-1">
                        En pesos al momento de pago
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-stone-100" />

                  {/* Duration */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-pista-100 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-pista-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-0.5">
                        Duración estimada
                      </p>
                      <p className="font-semibold text-stone-900">
                        3 a 5 semanas
                      </p>
                      <p className="text-xs text-stone-400 mt-0.5">
                        Según el ritmo del proceso
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-stone-100" />

                  {/* Payment */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0">
                      <CreditCard className="w-5 h-5 text-stone-500" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-0.5">
                        Forma de pago
                      </p>
                      <p className="font-semibold text-stone-900">
                        50% al inicio
                      </p>
                      <p className="text-sm text-stone-400">
                        50% al cierre del proceso
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100">
                  <a
                    href="#cierre"
                    className="w-full flex items-center justify-center py-3.5 rounded-xl bg-choco-600 text-white text-sm font-medium hover:bg-choco-700 active:scale-[0.98] transition-all duration-200"
                  >
                    Avancemos con el diagnóstico
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-16 text-stone-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-stone-300" />
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
