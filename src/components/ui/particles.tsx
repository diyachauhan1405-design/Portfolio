import { cn } from "@/lib/utils";

type Particle = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function buildParticles(count: number): Particle[] {
  const colors = ["#6C63FF", "#00E5FF", "#7C3AED"];
  return Array.from({ length: count }, (_, i) => ({
    left: `${seeded(i * 1.7 + 1) * 100}%`,
    top: `${seeded(i * 2.3 + 7) * 100}%`,
    size: 1.5 + seeded(i * 3.1 + 3) * 2.5,
    duration: 5 + seeded(i * 4.4 + 5) * 7,
    delay: -(i * 0.4) - seeded(i * 5.2 + 9) * 4,
    color: colors[i % colors.length],
  }));
}

export default function Particles({ count = 24, className }: { count?: number; className?: string }) {
  const particles = buildParticles(count);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-float absolute rounded-full opacity-60"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
