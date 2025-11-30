import { cn } from "@/lib/utils";
import Image from "next/image";

const LogoMark = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={24}
        height={24}
        className="invert-0 dark:invert"
      />
    </div>
  );
};

const LogoType = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center text-xl font-medium", className)}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={24}
        height={24}
        className="invert-0 dark:invert"
      />
      <span className="ml-2">KREEASI.</span>
    </div>
  );
};

export { LogoMark, LogoType };
