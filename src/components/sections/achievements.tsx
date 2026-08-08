"use client";

import { motion } from "framer-motion";
import { Layers, PenTool, BookOpen, Cpu, CalendarClock, Smile } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";
import { achievementStats } from "@/data/content";

const icons = [Layers, PenTool, BookOpen, Cpu, CalendarClock, Smile];

export default function Achievements() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-3 lg:grid-cols-6">
          {achievementStats.map((stat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative flex flex-col items-center gap-2 bg-bg-secondary/60 px-4 py-10 text-center transition-colors hover:bg-white/[0.03]"
              >
                <Icon className="mb-1 h-5 w-5 text-accent-secondary opacity-70 transition-opacity group-hover:opacity-100" />
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-nums font-heading text-3xl font-bold text-gradient-accent sm:text-4xl"
                />
                <p className="text-xs text-text-secondary">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
