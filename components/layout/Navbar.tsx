"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-5 md:px-8 py-5 flex justify-between items-center backdrop-blur-xl bg-bg/80 border-b border-border">
      <Link
        href="/"
        className="font-serif text-2xl text-text tracking-[-0.02em] no-underline"
      >
        {/* Placeholder until client logo arrives */}
        <span className="text-accent font-bold">WOF</span>{" "}
        <span className="text-text">Centre</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 items-center list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-text-muted text-sm font-medium tracking-wide hover:text-text transition-colors no-underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
            className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(211,47,47,0.2)] transition-all no-underline inline-block"
          >
            Call {BUSINESS.phone}
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
            mobileOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
            mobileOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-border p-6 md:hidden"
          >
            <ul className="flex flex-col gap-4 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-text-muted text-lg font-medium hover:text-text transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  onClick={() => setMobileOpen(false)}
                  className="bg-accent text-white px-6 py-3 rounded-full font-semibold text-sm no-underline inline-block mt-2"
                >
                  Call {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
