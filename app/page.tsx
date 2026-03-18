import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <CTA />
    </>
  );
}
