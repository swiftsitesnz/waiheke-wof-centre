"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icons";
import { BUSINESS } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "WOF Inspection",
  "Full Service",
  "Repairs / Diagnostics",
  "Tyres",
  "Towing",
  "Other — I'll explain below",
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to form handler / email service
    setSubmitted(true);
  }

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
            <SectionLabel>Book a Service</SectionLabel>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-6">
              Let&apos;s get you{" "}
              <em className="italic text-accent">booked in</em>
            </h1>
            <p className="text-text-muted text-lg max-w-[600px] leading-relaxed">
              Fill in the form below and we&apos;ll confirm your booking. Or
              call us directly on{" "}
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="text-accent no-underline hover:underline"
              >
                {BUSINESS.phone}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-[800px] mx-auto">
          {submitted ? (
            <AnimateOnScroll>
              <div className="bg-surface border border-accent/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  <Icon name="shield-check" size={32} />
                </div>
                <h2 className="font-serif text-3xl mb-4">
                  Booking request sent!
                </h2>
                <p className="text-text-muted max-w-md mx-auto mb-8">
                  We&apos;ll be in touch shortly to confirm your appointment.
                  If it&apos;s urgent, give us a ring on{" "}
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                    className="text-accent no-underline"
                  >
                    {BUSINESS.phone}
                  </a>
                  .
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      vehicle: "",
                      service: "",
                      message: "",
                    });
                  }}
                >
                  Submit another booking
                </Button>
              </div>
            </AnimateOnScroll>
          ) : (
            <AnimateOnScroll>
              <form
                onSubmit={handleSubmit}
                className="bg-surface border border-border rounded-2xl p-8 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      className="w-full bg-bg border-2 border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent transition-colors outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 021 123 4567"
                      className="w-full bg-bg border-2 border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent transition-colors outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@email.com"
                      className="w-full bg-bg border-2 border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent transition-colors outline-none"
                    />
                  </div>

                  {/* Vehicle */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Vehicle (make, model, year) *
                    </label>
                    <input
                      type="text"
                      name="vehicle"
                      required
                      value={formData.vehicle}
                      onChange={handleChange}
                      placeholder="e.g. Toyota Corolla 2018"
                      className="w-full bg-bg border-2 border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Service select */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    What do you need? *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-bg border-2 border-border rounded-xl px-4 py-3 text-text focus:border-accent transition-colors outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-2">
                    Anything else we should know?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any details about the issue, preferred dates, etc."
                    className="w-full bg-bg border-2 border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent transition-colors outline-none resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button type="submit" variant="primary">
                    Send Booking Request &rarr;
                  </Button>
                  <p className="text-text-muted text-xs mt-2 sm:mt-3">
                    We&apos;ll call or email to confirm your appointment within
                    1 business day.
                  </p>
                </div>
              </form>
            </AnimateOnScroll>
          )}

          {/* Info bar */}
          <AnimateOnScroll className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-3">
                <Icon name="clock" size={20} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">WOF Wait Time</p>
                  <p className="text-text-muted text-xs">4–6 weeks currently</p>
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-3">
                <Icon name="wrench" size={20} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Repairs / Servicing</p>
                  <p className="text-text-muted text-xs">2–3 weeks for bookings</p>
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-3">
                <Icon name="truck" size={20} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Towing</p>
                  <p className="text-text-muted text-xs">Same day — call us</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
