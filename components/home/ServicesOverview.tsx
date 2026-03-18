"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Icon from "@/components/ui/Icons";
import { SERVICES } from "@/lib/constants";

export default function ServicesOverview() {
  return (
    <section className="px-5 md:px-8 py-24" id="services">
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
            Everything your vehicle needs,{" "}
            <em className="italic text-accent">under one roof</em>
          </h2>
          <p className="text-text-muted max-w-[600px] mb-12 text-lg">
            From routine WOF inspections to complete mechanical repairs, we&apos;ve
            got Waiheke covered.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={i * 0.08}>
              <div className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 text-accent">
                  <Icon name={service.icon} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                  {service.leadTime}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10 text-center">
          <Link
            href="/services"
            className="text-accent font-semibold hover:underline no-underline inline-flex items-center gap-2"
          >
            View all services in detail
            <Icon name="arrow-right" size={18} />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
