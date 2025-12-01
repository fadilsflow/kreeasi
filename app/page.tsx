import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="pt-16 mx-auto max-w-5xl">
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
    <p className="flex w-full py-2  items-center justify-center font-bold text-sm">
      Jangan Lewatkan Promo{" "}
      <span className="text-blue-400 ml-1">Black Friday</span>
      <ArrowDown className="ml-2" size={16} />
    </p>
  );
}
