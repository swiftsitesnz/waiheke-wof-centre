"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icons";
import { FAQ_ITEMS, BUSINESS } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-text group-hover:text-accent transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-text-muted"
        >
          <Icon name="chevron-down" size={24} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="text-text-muted leading-relaxed pb-6 pr-12">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <SectionLabel>FAQ</SectionLabel>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-6">
              Common <em className="italic text-accent">questions</em>
            </h1>
            <p className="text-text-muted text-lg max-w-[600px] leading-relaxed">
              Everything you need to know about WOFs, servicing, and booking
              with us. Can&apos;t find what you&apos;re looking for? Just give
              us a call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[800px] mx-auto">
          <AnimateOnScroll>
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-10">
              {FAQ_ITEMS.map((item, i) => (
                <FAQItem
                  key={i}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === i}
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </AnimateOnScroll>

          {/* Still got questions */}
          <AnimateOnScroll className="mt-12 text-center">
            <h2 className="font-serif text-2xl mb-4">Still got questions?</h2>
            <p className="text-text-muted mb-8">
              We&apos;re happy to help — no question is too small.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                variant="primary"
              >
                Call {BUSINESS.phone}
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
