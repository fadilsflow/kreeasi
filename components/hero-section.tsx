import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section>
      <div className="relative pt-40 pb-20 border-x border-edge screen-line-before screen-line-after before:-top-px after:-bottom-px">
        <div className="mx-2 pl-2 pb-1">
          <h1 className="max-w-2xl text-balance text-4xl sm:text-5xl font-medium lg:text-6xl ">
            Plan. Build. Ship.
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground text-sm sm:text-base lg:text-lg">
            Kreeasi providing Web, iOS, Android Application Design & Development
            services proand quality according to your idea.
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
      </div>
    </section>
  );
}
