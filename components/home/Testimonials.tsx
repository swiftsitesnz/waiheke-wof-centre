"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Icon from "@/components/ui/Icons";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="px-5 md:px-8 py-24 bg-surface border-y border-border">
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll>
          <SectionLabel>What People Say</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-12">
            Trusted by the{" "}
            <em className="italic text-accent">community</em>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="bg-bg border border-border rounded-2xl p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-[#f59e0b]">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Icon key={j} name="star" size={18} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-muted text-base leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="text-sm font-bold text-text">{t.author}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
