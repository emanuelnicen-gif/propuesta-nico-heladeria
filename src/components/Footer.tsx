export function Footer() {
  return (
    <footer className="bg-cream border-t border-stone-200/60 py-8">
      <div className="container-base flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-400">
        <p>
          © 2025{" "}
          <span className="font-medium text-stone-600">Emanuel Nicenboim</span>
        </p>
        <p className="text-center text-xs">
          Propuesta pensada para Nico · Heladería en Ricardone, Santa Fe
        </p>
        <a
          href="https://emanuel-nicenboim-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-stone-700 transition-colors text-xs"
        >
          Ver portfolio →
        </a>
      </div>
    </footer>
  );
}
