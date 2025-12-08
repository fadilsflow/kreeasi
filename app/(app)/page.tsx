import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import PortofolioSection from "@/components/portofolio-section";
import ServicesSection from "@/components/services-section";
// import { TestimoniSection } from "@/components/testimoni-section";

export default function Home() {
  return (
    <>
      <div className="relative pt-13 mx-auto max-w-2xl md:max-w-3xl lg:max-w-7xl px-4 lg:px-8">
        <HeroSection />
        <ServicesSection />
        <PortofolioSection />
        {/* <TestimoniSection /> */}
        <CTASection />
      </div>
    </>
  );
}
