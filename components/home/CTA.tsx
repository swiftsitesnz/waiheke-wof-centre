"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="px-5 md:px-8 py-24">
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll>
          <div className="bg-[radial-gradient(ellipse_at_top,rgba(211,47,47,0.15)_0%,transparent_50%)] border border-border rounded-3xl p-12 md:p-20 text-center">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              Ready to book your{" "}
              <em className="italic text-accent">WOF?</em>
            </h2>
            <p className="text-text-muted max-w-[500px] mx-auto mb-10 text-lg">
              Don&apos;t wait until it&apos;s due. Book in early to secure your
              spot — current wait times are 4–6 weeks for WOF inspections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/booking" variant="primary">
                Book Online &rarr;
              </Button>
              <Button
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                variant="secondary"
              >
                Call {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
