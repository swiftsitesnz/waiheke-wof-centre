// ============================================================
// WAIHEKE WOF CENTRE — Site Content & Constants
// ============================================================

export const BUSINESS = {
  name: "Waiheke WOF Centre",
  legalName: "Waiheke WOF Centre 2004 Ltd",
  phone: "09 372 3270",
  email: "officeadmin@waihekewofcentre.co.nz",
  address: "Waiheke Island, Auckland, New Zealand",
  hours: {
    weekdays: "Mon–Fri: 8:00am – 5:00pm",
    saturday: "Sat: By appointment",
    sunday: "Sun: Closed",
  },
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Book Now", href: "/booking" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "20+", label: "Years on Waiheke" },
  { value: "1000s", label: "WOFs completed" },
  { value: "5★", label: "Customer reviews" },
];

export const SERVICES = [
  {
    id: "wof",
    title: "WOF Inspections",
    description:
      "Warrant of Fitness inspections for all light vehicles. Fast, thorough, and affordable — most WOFs completed same day.",
    icon: "shield-check",
    leadTime: "4–6 week wait currently",
  },
  {
    id: "servicing",
    title: "Full Servicing",
    description:
      "Comprehensive vehicle servicing to keep your car running smoothly. Oil changes, filter replacements, brake checks, and full mechanical assessments.",
    icon: "wrench",
    leadTime: "2–3 weeks for bookings",
  },
  {
    id: "repairs",
    title: "Repairs & Diagnostics",
    description:
      "From engine diagnostics to brake repairs, suspension work, and everything in between. Honest assessments and quality workmanship.",
    icon: "cog",
    leadTime: "2–3 weeks for bookings",
  },
  {
    id: "tyres",
    title: "Tyres",
    description:
      "Tyre fitting, balancing, rotation, and replacement. We stock a range of quality tyres to suit all budgets and driving needs.",
    icon: "circle",
    leadTime: "Contact for availability",
  },
  {
    id: "towing",
    title: "Towing Services",
    description:
      "AA and partner towing across Waiheke Island. Broken down? Give us a call and we'll come to you.",
    icon: "truck",
    leadTime: "Same day",
  },
  {
    id: "diagnostics",
    title: "Vehicle Diagnostics",
    description:
      "Modern diagnostic equipment to pinpoint issues quickly and accurately. Engine warning lights, electrical faults, and performance issues.",
    icon: "cpu",
    leadTime: "2–3 weeks for bookings",
  },
];

export const DISCLAIMERS = [
  "European vehicles: We work on most vehicles but have limited capacity for some Euro-specific specialist work. Please call to discuss.",
  "Head gasket repairs are not available at this time.",
  "Auto electrical work is limited — we can refer you to a specialist if needed.",
];

export const FAQ_ITEMS = [
  {
    question: "How often do I need a WOF?",
    answer:
      "Vehicles registered after 1 January 2000 require a WOF annually. Vehicles registered before that date need a WOF every six months. It's a good idea to book in advance as wait times can be 4–6 weeks.",
  },
  {
    question: "What's the current wait time for a WOF?",
    answer:
      "Our current lead time for WOF inspections is approximately 4–6 weeks. For repairs and servicing, it's around 2–3 weeks. We recommend booking as early as possible, especially during busy periods.",
  },
  {
    question: "Do you work on European cars?",
    answer:
      "We can handle most general mechanical work on European vehicles. However, some Euro-specific specialist work may be limited. Give us a call on 09 372 3270 and we'll let you know if we can help with your particular vehicle.",
  },
  {
    question: "Can you tow my vehicle?",
    answer:
      "Yes! We offer towing services across Waiheke Island through our AA and partner network. If you've broken down, call us and we'll arrange to get your vehicle to the workshop.",
  },
  {
    question: "Do I need to bring anything to my WOF appointment?",
    answer:
      "Just bring your vehicle and your current registration details. If you have any previous inspection reports or known issues, it's helpful to mention those when you arrive.",
  },
  {
    question: "What happens if my car fails its WOF?",
    answer:
      "We'll provide a detailed report of what needs to be fixed. You can choose to have us complete the repairs, or take it elsewhere. Once the issues are resolved, we'll re-inspect at no additional WOF fee (within 28 days).",
  },
  {
    question: "Do you offer courtesy cars or drop-off service?",
    answer:
      "We don't currently offer courtesy vehicles, but being on Waiheke, most of our customers are locals who can arrange a lift. We're happy to help coordinate timing that works for you.",
  },
  {
    question: "How do I book a service?",
    answer:
      "You can book through our website using the online booking form, or give us a call on 09 372 3270. We'll confirm your appointment time and let you know if there's anything to prepare.",
  },
];

export const TESTIMONIALS = [
  {
    text: "Been going here for years. Honest, reliable, and they really know their stuff. Wouldn't trust anyone else on the island with my car.",
    author: "Local Waiheke Resident",
    rating: 5,
  },
  {
    text: "Quick WOF turnaround and they explained everything clearly. No surprise charges — just good, honest service.",
    author: "Waiheke Island Customer",
    rating: 5,
  },
  {
    text: "Called about a breakdown and they had the tow truck out within the hour. Sorted the repair the same week. Legends.",
    author: "Waiheke Visitor",
    rating: 5,
  },
];
