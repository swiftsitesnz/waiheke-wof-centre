"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-5 md:px-8 pt-32 pb-16 relative overflow-hidden">
      {/* Red accent glow */}
      <div className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(211,47,47,0.1)_0%,transparent_70%)] pointer-events-none" />
      {/* Blue subtle glow */}
      <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(21,101,192,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-text-muted mb-8"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Waiheke Island&apos;s trusted local mechanic
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[1.05] tracking-[-0.03em] mb-6"
        >
          Keeping the island{" "}
          <em className="italic text-accent">moving</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(1.1rem,2vw,1.35rem)] text-text-muted max-w-[600px] leading-relaxed mb-10"
        >
          WOF inspections, full servicing, repairs, diagnostics, tyres, and
          towing. Honest, reliable service from a team that&apos;s been part of
          the Waiheke community for over 20 years.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 flex-wrap"
        >
          <Button href="/booking" variant="primary">
            Book Now &rarr;
          </Button>
          <Button href="/services" variant="secondary">
            Our Services
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-16 pt-10 border-t border-border"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <h3 className="font-serif text-[2.5rem] text-accent leading-none">
                {stat.value}
              </h3>
              <p className="text-sm text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
