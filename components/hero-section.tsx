import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="relative pt-5 lg:pt-40 pb-40 border-x border-edge screen-line-before screen-line-after ">
        <div className="px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-center relative">
          {/* Image – hanya satu */}
          <Image
            src="/hero.svg"
            alt="Hero"
            width={400}
            height={400}
            className="
              invert-0 dark:invert transform scale-x-[-1]
              mb-10
              lg:mb-0
              lg:absolute 
              lg:right-15 
              lg:top-1/2 
              lg:-translate-y-1/2
              w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]
            "
          />

          {/* Text */}
          <div className=" pb-20 lg:pb-1 z-10">
            <h1 className="text-primary max-w-2xl text-balance text-4xl sm:text-5xl font-medium lg:text-6xl">
              Plan. Build. Ship.
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground text-sm sm:text-base lg:text-lg">
              Kreeasi providing Web, iOS, Android Application Design &
              Development services proand quality according to your idea.
            </p>

            <div className="mt-8 grid grid-cols-2 md:flex items-center gap-2">
              <Button
                asChild
                size="lg"
                className=" px-5 text-base w-full sm:w-auto"
              >
                <Link href="#link">
                  <span className="text-nowrap">Konsultasi Sekarang</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="lg:min-w-46 px-5 text-base w-full sm:w-auto"
              >
                <Link href="#link">
                  <span className="text-nowrap">Our Portfolio</span>
                </Link>
              </Button>
            </div>
            <div className="flex overflow-x-auto whitespace-nowrap items-center gap-2 mt-4">
              <TechLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TechLogo = () => {
  const logo = [
    { name: "Node.js", logoUrl: "/tech-logo/nodedotjs.svg" },
    { name: "Laravel", logoUrl: "/tech-logo/laravel.svg" },
    { name: "Next.js", logoUrl: "/tech-logo/nextdotjs.svg" },
    { name: "React", logoUrl: "/tech-logo/react.svg" },
    { name: "Tailwind CSS", logoUrl: "/tech-logo/tailwindcss.svg" },
  ];

  return (
    <div className="flex items-center gap-4">
      {logo.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2 opacity-70 shrink-0"
        >
          <Image
            src={item.logoUrl}
            alt={item.name}
            height={18}
            width={18}
            className="invert-0 dark:invert"
          />
          <p className="text-xs">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
