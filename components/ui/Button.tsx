"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-white px-8 py-4 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(211,47,47,0.25)] hover:bg-accent-dark",
    secondary:
      "bg-transparent text-text px-8 py-4 border border-border hover:border-text-muted hover:bg-surface",
    outline:
      "bg-transparent text-accent px-8 py-4 border-2 border-accent hover:bg-accent hover:text-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
