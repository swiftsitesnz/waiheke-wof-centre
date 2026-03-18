"use client";

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-4">
      {children}
    </div>
  );
}
