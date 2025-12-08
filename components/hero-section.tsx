import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { LogoMark } from "./logo"
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative ">
      <div className=" pt-25 pb-5 lg:pb-40 min-h-screen ">
        <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-7xl px-4 lg:px-8 py-4">
          <div className="pb-20 lg:pb-1 z-10 ">
            <h1 className=" text-4xl sm:text-5xl font-medium lg:text-4xl">
              Jasa Pembuatan Website<br /> Profesional Murah Terlaris No. 1
            </h1>

            <div className="mt-8 grid grid-cols-2 md:flex items-center gap-2 ">
              <Button
                size={"lg"}
                className=" text-sm  rounded-full lg:text-base  sm:w-auto hover:shadow-lg"
              >
                <span className="text-nowrap">Konsultasi Sekarang</span> <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-sm rounded-full lg:text-base lg:min-w-46  w-full sm:w-auto"
              >
                <Link href="#services">
                  <span className="text-nowrap">Layanan Kami</span>
                </Link>
              </Button>
              <div
                aria-hidden="true"
                className="mask-y-from-90% pointer-events-none absolute -inset-y-32 inset-x-[5px] border-x border-dashed lg:inset-x-[9px]"
              />

            </div>
            {/* <div className="flex overflow-x-auto whitespace-nowrap items-center gap-2 mt-6 no-scrollbar">
              <TechLogo />
            </div> */}
          </div>
          <DemoPorto />
        </div>
      </div>
    </section>
  );
}

// const TechLogo = () => {
//   const logo = [
//     { name: "Node.js", logoUrl: "/tech-logo/nodedotjs.svg" },
//     { name: "Laravel", logoUrl: "/tech-logo/laravel.svg" },
//     { name: "Next.js", logoUrl: "/tech-logo/nextdotjs.svg" },
//     { name: "React", logoUrl: "/tech-logo/react.svg" },
//     { name: "Tailwind CSS", logoUrl: "/tech-logo/tailwindcss.svg" },
//   ];

//   return (
//     <div className="flex items-center gap-4 ">
//       {logo.map((item) => (
//         <div
//           key={item.name}
//           className="flex items-center gap-2 opacity-70 shrink-0"
//         >
//           <Image
//             src={item.logoUrl}
//             alt={item.name}
//             height={18}
//             width={18}
//             className="invert-0 dark:invert"
//           />
//           <p className="text-xs">{item.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };





const reviews = [
  {
    name: "Jack",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    img: "https://avatar.vercel.sh/jill",
    url: "jill.com",
  },
  {
    name: "John",
    img: "https://avatar.vercel.sh/john",
    url: "jill.com",
  },
  {
    name: "Jane",
    img: "https://avatar.vercel.sh/jane",
    url: "jill.com",
  },
  {
    name: "Jenny",
    img: "https://avatar.vercel.sh/jenny",
    url: "jill.com",
  },
  {
    name: "James",
    img: "https://avatar.vercel.sh/james",
    url: "jill.com",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  url,
}: {
  img: string
  name: string
  url?: string
}) => {
  return (
    <figure
      className={cn(
        "h-full relative  w-[450px] cursor-pointer overflow-hidden rounded border border-edge",
      )}
    >
      <div className="p-2 relative w-full aspect-video overflow-hidden">
        <Image
          src={img || ""}
          alt="Portofolio Example"
          fill
          className="object-cover "
        />
      </div>
      <div className="flex justify-between">

        <h3 className="pl-2 ">
          {name}
        </h3>
        <span className="flex">{url} <ArrowUpRight /></span>
      </div>
    </figure>
  )
}

export function DemoPorto() {
  return (
    <div className="py-2  pt-15">
      <div className=" relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} img={review.img} url={review.url} name={review.name} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  )
}
