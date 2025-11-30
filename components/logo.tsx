import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return <div className={cn("text-xl font-bold", className)}>Kreeasi</div>;
};
