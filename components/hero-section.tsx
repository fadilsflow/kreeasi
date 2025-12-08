import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative pt-35 pb-5 lg:pb-40 min-h-screen ">
        <div className="px-4 md:px-2 lg:px-10 flex flex-col lg:flex-row justify-between items-center relative">
          {/* Text */}
          <div className="pb-20 lg:pb-1 z-10 ">

            <h1 className=" text-4xl sm:text-5xl font-medium lg:text-7xl ">
              {/* Smart & Reliable Digital Solutions for Everyone */}
              Solusi Digital Cerdas & <br />Andal untuk Semua Orang
            </h1>
            <p className="mt-4  text-sm sm:text-base lg:text-xl max-w-4xl ">
              Kreeasi menyediakan solusi web yang profesional dan kualitas terbaik sesuai dengan ide Anda.
              {/* Kreeasi Menyediakan layanan Desain & Pengembangan Aplikasi Web, Android yang <span className="text-foreground">profesional</span>dan berkualitas sesuai ide Anda. */}
            </p>

            <div className="mt-8 grid grid-cols-2 md:flex items-center gap-2 ">
              <Button
                size={"lg"}
                className=" text-sm  rounded-full lg:text-base px-5 sm:w-auto hover:shadow-lg"
              >
                <span className="text-nowrap">Konsultasi Sekarang</span> <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-sm rounded-full lg:text-base lg:min-w-46 px-5 w-full sm:w-auto"
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

