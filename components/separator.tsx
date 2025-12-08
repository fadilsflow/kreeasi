
import { cn } from "@/lib/utils";

function Separator({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-4 lg:h-8 w-full border-x border-edge",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
                className
            )}
        />
    );
}
function VerticalSeparator({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative h-full w-4 lg:w-8 border border-edge",
                "before:absolute before:inset-y-0 before:-z-1 before:w-full",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]",
                "before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
                className
            )}
        />
    );
}


export { Separator, VerticalSeparator };