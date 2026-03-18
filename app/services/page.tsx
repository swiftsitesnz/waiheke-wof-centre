"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icons";
import { SERVICES, DISCLAIMERS, BUSINESS } from "@/lib/constants";

export default function ServicesPage() {
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
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-6">
              Full mechanical services,{" "}
              <em className="italic text-accent">one workshop</em>
            </h1>
            <p className="text-text-muted text-lg max-w-[600px] leading-relaxed">
              From a simple WOF check to a full engine diagnostic, we handle it
              all right here on Waiheke. No need to ferry your car to the
              mainland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-8">
            {SERVICES.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 0.05}>
                <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:border-accent/20 transition-colors">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon name={service.icon} size={32} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                        <Icon name="clock" size={14} />
                        {service.leadTime}
                      </span>
                      <Button
                        href="/booking"
                        variant="outline"
                        className="!px-5 !py-2 !text-sm !rounded-full"
                      >
                        Book this service
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <div className="bg-surface-2 border border-border rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-4">
                A few things to note
              </h3>
              <ul className="flex flex-col gap-3">
                {DISCLAIMERS.map((d, i) => (
                  <li
                    key={i}
                    className="text-text-muted text-sm leading-relaxed pl-4 border-l-2 border-accent/30"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl mb-6">
              Not sure what you need?
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              Give us a call and we&apos;ll point you in the right direction.
              No obligation, just honest advice.
            </p>
            <Button
              href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
              variant="primary"
            >
              Call {BUSINESS.phone}
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
