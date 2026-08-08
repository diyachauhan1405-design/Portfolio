"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Target, LayoutTemplate, Wand2, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { designProcess } from "@/data/content";

const icons = [Compass, Target, LayoutTemplate, Wand2, Rocket];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Design Process"
          title={
            <>
              From a blank canvas to a <span className="text-gradient">shipped product</span>
            </>
          }
          description="A research-driven process that keeps design and engineering moving in lockstep."
        />

        <div ref={ref} className="relative mt-24">
          <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-border sm:left-1/2 sm:top-6 sm:h-px sm:w-[calc(100%-2.5rem)] sm:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale, scaleX: lineScale }}
            className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px origin-top bg-gradient-to-b from-accent-primary via-accent-secondary to-purple-glow sm:left-6 sm:top-6 sm:h-px sm:w-[calc(100%-3rem)] sm:origin-left sm:bg-gradient-to-r"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
            {designProcess.map((step, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative flex gap-4 pl-14 sm:flex-col sm:gap-0 sm:pl-0 sm:text-center"
                >
                  <div className="absolute left-0 top-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-purple-glow shadow-[0_0_24px_rgba(108,99,255,0.45)] sm:static sm:mx-auto sm:mb-5">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="glass w-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1.5 sm:h-full">
                    <span className="font-nums text-xs font-semibold text-accent-secondary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-base font-semibold">{step.phase}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-text-secondary">{step.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
