
import { Button } from "./ui/button";
;
import { Link } from "@tanstack/react-router";

export default function HeroSection() {
  return (
    <section className="relative ">
      <div className=" pt-25 pb-5  ">
        <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-7xl px-4 lg:px-8 py-4">
          <div className="pb-20 lg:pb-1 z-10 ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              Useful software. [Built with cares]
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-xl text-muted-foreground ">
                We make calm, dependable tools that we actually use. Each product is a small box of purpose, crafted for everyday life and work. 
            </p>

            <div className="mt-8 grid grid-cols-2 md:flex items-center gap-2 ">
              <Button
                size={"lg"}
                className=" text-sm  rounded-full lg:text-base  sm:w-auto hover:shadow-lg"
                render={<Link to="/" />}
              >
                <span className="text-nowrap">Contact us</span>{" "}
                <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
              </Button>

              {/* <div
                aria-hidden="true"
                className="mask-y-from-90% pointer-events-none absolute -inset-y-32 inset-x-[5px] border-x border-dashed lg:inset-x-[9px]"
              /> */}
            </div>
            {/* <div className="flex overflow-x-auto whitespace-nowrap items-center gap-2 mt-6 no-scrollbar">
              <TechLogo />
            </div> */}
          </div>
          {/* <DemoPorto /> */}
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
