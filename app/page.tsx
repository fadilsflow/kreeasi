import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="pt-13 mx-auto  max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <Banner />
        <HeroSection />
        <Separator />
        <ServicesSection />
      </div>
    </>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}

function Banner() {
  return (
    <div className="flex bg-accent w-full py-2.5  items-center justify-center text-sm">
      <div className="p-1 mr-2 bg-blue-500 rounded-full "></div>
      Jangan Lewatkan Promo{" "}
      <span className="text-blue-500 ml-1 ">Black Friday</span>
      <ArrowRight className="ml-2" size={16} />
    </div>
  );
}
