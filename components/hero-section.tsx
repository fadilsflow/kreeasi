import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section>
      <div className="relative pt-40 pb-20 border-x border-edge screen-line-before screen-line-after before:-top-px after:-bottom-px">
        <div className="mx-2 pl-2 pb-1">
          <h1 className="max-w-2xl text-balance text-6xl font-medium md:text-7xl ">
            Plan. Build. Ship.
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground text-lg">
            Kreeasi providing Web, iOS, Android Application Design & Development
            services proand quality according to your idea.
          </p>

          <div className="mt-8 flex items-center gap-2">
            <div
              key={1}
              className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
            >
              <Button asChild size="lg" className="rounded-full px-5 text-base">
                <Link href="#link">
                  <span className="text-nowrap">Konsultasi Sekarang</span>
                </Link>
              </Button>
            </div>
            <Button
              key={2}
              asChild
              size="lg"
              variant="outline"
              className="h-10.5 rounded-full px-5 text-base"
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
