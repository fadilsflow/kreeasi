import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="relative pt-20 pb-20 border-x border-edge screen-line-before screen-line-after before:-top-px after:-bottom-px">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center pr-2 pb-10">
            <Image
              src="/hero.svg"
              alt="Hero"
              width={300}
              height={300}
              className="invert-0 dark:invert transform scale-x-[-1] lg:hidden"
            />
          </div>
          <div className=" pl-2 pb-20 lg:pb-1">
            <h1 className="max-w-2xl text-balance text-4xl sm:text-5xl font-medium lg:text-6xl ">
              Plan. Build. Ship.
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground text-sm sm:text-base lg:text-lg">
              Kreeasi providing Web, iOS, Android Application Design &
              Development services proand quality according to your idea.
            </p>

            <div className="mt-8 grid grid-cols-2 md:flex items-center gap-2 ">
              <Button
                asChild
                size="lg"
                className="rounded-2xl px-5 text-base w-full sm:w-auto"
              >
                <Link href="#link">
                  <span className="text-nowrap">Konsultasi Sekarang</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-10.5 rounded-2xl px-5 text-base w-full sm:w-auto"
              >
                <Link href="#link">
                  <span className="text-nowrap">Our Portfolio</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center pr-2">
            <Image
              src="/hero.svg"
              alt="Hero"
              width={400}
              height={400}
              className="invert-0 dark:invert transform scale-x-[-1] hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
