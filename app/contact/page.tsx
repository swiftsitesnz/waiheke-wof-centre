"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Icon from "@/components/ui/Icons";
import { BUSINESS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-32 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-6">
              Get in <em className="italic text-accent">touch</em>
            </h1>
            <p className="text-text-muted text-lg max-w-[600px] leading-relaxed">
              Have a question or want to book? Here&apos;s how to reach us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards + map */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Info cards */}
            <div className="flex flex-col gap-6">
              <AnimateOnScroll>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="bg-surface border border-border rounded-2xl p-8 flex items-start gap-5 hover:border-accent/30 transition-colors no-underline group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon name="phone" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text mb-1 group-hover:text-accent transition-colors">
                      Phone
                    </h3>
                    <p className="text-text-muted text-base">{BUSINESS.phone}</p>
                    <p className="text-text-muted text-sm mt-1">
                      Best way to reach us for urgent enquiries
                    </p>
                  </div>
                </a>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="bg-surface border border-border rounded-2xl p-8 flex items-start gap-5 hover:border-accent/30 transition-colors no-underline group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue/10 flex items-center justify-center text-blue shrink-0">
                    <Icon name="mail" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text mb-1 group-hover:text-blue transition-colors">
                      Email
                    </h3>
                    <p className="text-text-muted text-base break-all">
                      {BUSINESS.email}
                    </p>
                    <p className="text-text-muted text-sm mt-1">
                      For non-urgent enquiries and booking requests
                    </p>
                  </div>
                </a>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="bg-surface border border-border rounded-2xl p-8 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon name="map-pin" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Location</h3>
                    <p className="text-text-muted text-base">
                      {BUSINESS.address}
                    </p>
                    <p className="text-text-muted text-sm mt-1">
                      Easy to find — right on the main road
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="bg-surface border border-border rounded-2xl p-8 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon name="clock" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Opening Hours</h3>
                    <div className="text-text-muted text-base space-y-1">
                      <p>{BUSINESS.hours.weekdays}</p>
                      <p>{BUSINESS.hours.saturday}</p>
                      <p>{BUSINESS.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Map placeholder */}
            <AnimateOnScroll delay={0.15}>
              <div className="bg-surface border border-border rounded-2xl h-full min-h-[400px] flex items-center justify-center text-text-muted">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4">🗺️</div>
                  <p className="font-semibold mb-2">
                    Interactive map coming soon
                  </p>
                  <p className="text-sm text-text-muted max-w-xs mx-auto">
                    Google Maps embed will go here showing the workshop
                    location on Waiheke Island
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
