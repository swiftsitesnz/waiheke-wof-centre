"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icons";

const VALUES = [
  {
    title: "Honest Advice",
    description:
      "We'll tell you what needs fixing and what can wait. No upselling, no unnecessary work — just straight-up honest assessments.",
    icon: "shield-check",
  },
  {
    title: "Local Knowledge",
    description:
      "We know Waiheke roads, Waiheke conditions, and Waiheke vehicles. That local insight means better service for you.",
    icon: "map-pin",
  },
  {
    title: "Quality Workmanship",
    description:
      "Every job gets done right the first time. We take pride in our work and stand behind every repair, service, and inspection.",
    icon: "wrench",
  },
  {
    title: "Community First",
    description:
      "We're not a franchise or a chain — we're your neighbours. This community is our home, and we treat every customer like whānau.",
    icon: "star",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>About Us</SectionLabel>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-6">
              Part of Waiheke since{" "}
              <em className="italic text-accent">2004</em>
            </h1>
            <p className="text-text-muted text-lg max-w-[700px] leading-relaxed">
              Waiheke WOF Centre has been the island&apos;s go-to workshop for
              over two decades. What started as a small local operation has grown
              into the trusted name for WOFs, servicing, and repairs across the
              island — built entirely on word of mouth and repeat customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo placeholder */}
      <section className="px-5 md:px-8 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <div className="bg-surface border border-border rounded-2xl h-[300px] md:h-[450px] flex items-center justify-center text-text-muted">
              <div className="text-center">
                <p className="text-4xl mb-3">📸</p>
                <p className="text-sm font-medium">
                  Aerial drone photo of the workshop — coming soon
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[800px] mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl mb-6">Our Story</h2>
            <div className="text-text-muted leading-relaxed space-y-4 text-base">
              <p>
                When you live on an island, you need a mechanic you can trust.
                Someone who&apos;ll give you an honest assessment, do quality
                work, and not charge the earth for it. That&apos;s what Waiheke
                WOF Centre has been providing since 2004.
              </p>
              <p>
                We handle everything from routine WOF inspections to full
                mechanical repairs, diagnostics, tyre work, and even towing
                through our AA and partner network. Our workshop is equipped
                with modern diagnostic tools, but we haven&apos;t lost the
                personal touch — you&apos;ll always speak to a real person, get
                a real answer, and know exactly what&apos;s happening with your
                vehicle.
              </p>
              <p>
                Most of our customers come through word of mouth, and many have
                been with us for years. That says more than any ad ever could.
                We&apos;re not the flashiest shop on the block, but we are the
                one that gets it right.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight mb-12">
              No gimmicks, just{" "}
              <em className="italic text-accent">good service</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.08}>
                <div className="bg-surface border border-border rounded-2xl p-8 flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon name={v.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-8 pb-24 text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-3xl mb-6">Come say g&apos;day</h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            Whether it&apos;s a WOF, a full service, or just a question about
            your car — we&apos;re here to help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/booking" variant="primary">
              Book a Service &rarr;
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
