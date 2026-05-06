"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#contexto", label: "Contexto" },
  { href: "#que-incluye", label: "Qué incluye" },
  { href: "#proceso", label: "Proceso" },
  { href: "#inversion", label: "Inversión" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-warm border-b border-stone-200/60"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-semibold text-stone-900 text-base tracking-tight">
          Ema Nicenboim
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cierre"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-choco-600 text-white text-sm font-medium hover:bg-choco-700 active:scale-95 transition-all duration-200"
        >
          Avancemos
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-stone-700" />
          ) : (
            <Menu className="w-5 h-5 text-stone-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-cream/98 backdrop-blur-md border-t border-stone-200/60 px-6 py-5 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cierre"
            className="mt-2 flex items-center justify-center py-3 rounded-xl bg-choco-600 text-white text-sm font-medium hover:bg-choco-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Avancemos
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
