"use client";

import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import Icon from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 md:px-8 py-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-serif text-xl text-text no-underline inline-block mb-4"
            >
              <span className="text-accent font-bold">WOF</span> Centre
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-6">
              Waiheke Island&apos;s trusted local mechanic. WOF inspections,
              servicing, repairs, diagnostics, tyres, and towing — keeping the
              island moving since 2004.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-text font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-text transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-text font-semibold mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 list-none">
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Icon name="phone" size={18} className="text-accent mt-0.5 shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="text-text-muted hover:text-text transition-colors no-underline"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Icon name="mail" size={18} className="text-accent mt-0.5 shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-text-muted hover:text-text transition-colors no-underline break-all"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Icon name="map-pin" size={18} className="text-accent mt-0.5 shrink-0" />
                {BUSINESS.address}
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Icon name="clock" size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <div>{BUSINESS.hours.weekdays}</div>
                  <div>{BUSINESS.hours.saturday}</div>
                  <div>{BUSINESS.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <span>
            &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights
            reserved.
          </span>
          <span>
            Website by{" "}
            <a
              href="https://swiftsites.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text transition-colors no-underline"
            >
              Swift Sites
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
