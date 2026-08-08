import { cn } from "@/lib/utils";

export default function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="grid-glow absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="animate-blob absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent-primary/25 blur-[120px]" />
      <div
        className="animate-blob absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-purple-glow/25 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-[-15%] left-[20%] h-[28rem] w-[28rem] rounded-full bg-accent-secondary/15 blur-[120px]"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
