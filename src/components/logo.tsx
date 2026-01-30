import { cn } from "@/lib/utils";
// import Image from "next/image";

const LogoMark = ({ className }: { className?: string }) => {
  return (
    // <Image src="/logo-black.svg" alt="Logo" width={24} height={24} className={cn(className)} />

   <img src="/logo-black.svg" alt="" width={24} height={24} className={cn(className)} />
  );
};

const LogoType = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center text-xl font-medium", className)}>
      {/* <Image src="/logo-color.svg" alt="Logo" width={24} height={24} /> */}
      <img src="/logo-color.svg" alt="" width={24} height={24} className={cn(className)} />
      <span className="ml-2">KREEASI.</span>
    </div>
  );
};

export { LogoMark, LogoType };
