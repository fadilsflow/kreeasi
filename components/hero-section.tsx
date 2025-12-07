import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
export default function HeroSection() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="absolute inset-0 isolate contain-strict opacity-50"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-30 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-30 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-30 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div className="z-10 hidden lg:block lg:absolute top-10  w-full">
        <Banner />
      </div>

      <div className="relative pt-5 lg:pt-60 pb-5 lg:pb-40 border-x border-edge screen-line-before screen-line-after ">
        <div className="px-4 md:px-2 lg:px-10 flex flex-col lg:flex-row justify-between items-center relative">
          <div className=" lg:hidden  w-full">
            <Banner />
          </div>
          {/* Image – hanya satu */}
          <Image
            src="/hero.svg"
            alt="Hero"
            width={400}
            height={400}
            className="
              mb-10
              lg:mb-0
              lg:absolute
              lg:right-10
              lg:top-8/12
              lg:-translate-y-1/2
              w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]
            "
          />

          {/* Text */}
          <div className="pb-20 lg:pb-1 z-10">
            <h1 className="max-w-2xl  text-balance text-4xl sm:text-5xl font-medium lg:text-7xl">
              Wujudkan <span className="text-primary-brand">Website</span> Impian anda!
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground text-sm sm:text-base lg:text-lg">
              Kreeasi menyediakan solusi web yang profesional dan kualitas
              terbaik sesuai dengan ide Anda.
            </p>

            <div className="mt-8 grid grid-cols-2 md:flex items-center gap-2">
              <Button
                asChild
                size={"lg"}
                className="text-sm lg:py-6 lg:text-base px-5  w-full sm:w-auto"
              >
                <Link href="#link">
                  <span className="text-nowrap">Konsultasi Sekarang</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-sm lg:py-6 lg:text-base lg:min-w-46 px-5 w-full sm:w-auto"
              >
                <Link href="#link">
                  <span className="text-nowrap">Our Portfolio</span>
                </Link>
              </Button>
            </div>
            <div className="flex overflow-x-auto whitespace-nowrap items-center gap-2 mt-6 no-scrollbar">
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
    <div className="flex items-center gap-4 ">
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



function Banner() {
  return (
    <Badge
      variant="outline"
      className="mx-auto flex justify-center w-fit text-sm"
      asChild>
      <Link
        href="#"
      >
        <div className="p-1 mr-1 bg-primary-brand rounded-full "></div>
        Jangan Lewatkan Promo
        <span className="text-primary-brand ml-1 ">Black Friday</span>
        <ArrowRight className="ml-2" size={16} />
      </Link>
    </Badge>
  );
}
