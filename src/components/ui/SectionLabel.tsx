interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest text-choco-500 mb-3 ${className}`}
    >
      {children}
    </p>
  );
}
