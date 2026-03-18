import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Waiheke WOF Centre — WOFs, Servicing & Repairs on Waiheke Island",
  description:
    "Your trusted local mechanic on Waiheke Island. WOF inspections, full servicing, repairs, diagnostics, tyres, and AA towing. Book online or call 09 372 3270.",
  keywords: [
    "WOF Waiheke",
    "mechanic Waiheke Island",
    "car service Waiheke",
    "vehicle inspection",
    "towing Waiheke",
    "auto repair Auckland",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
