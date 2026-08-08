"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Palette, Sparkles, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedCounter from "@/components/ui/animated-counter";
import { aboutCards, careerTimeline, quickStats } from "@/data/content";

const timelineIcons = [GraduationCap, Briefcase, Code2, Palette, Sparkles, MapPin];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              The person behind <span className="text-gradient">the pixels & the code</span>
            </>
          }
          description="A quick look at how I think, what drives me, and the path that got me here."
        />

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass gradient-border group relative rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 text-accent-secondary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {quickStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl px-4 py-6 text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-nums font-heading text-3xl font-bold text-gradient-accent"
              />
              <p className="mt-2 text-xs text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Career timeline */}
        <div className="mt-28">
          <h3 className="mb-14 text-center font-heading text-2xl font-semibold">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent lg:hidden" />

            <div className="flex flex-col gap-10 lg:gap-0">
              {careerTimeline.map((item, i) => {
                const Icon = timelineIcons[i % timelineIcons.length];
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex items-center gap-5 pl-12 lg:gap-0 lg:pl-0 ${
                      isLeft ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start"
                    } lg:py-6`}
                  >
                    <div className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-purple-glow shadow-[0_0_20px_rgba(108,99,255,0.5)] lg:left-1/2 lg:-translate-x-1/2">
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    <div
                      className={`glass w-full rounded-2xl px-5 py-4 lg:w-[calc(50%-3rem)] ${
                        isLeft ? "lg:mr-auto lg:text-right" : "lg:ml-auto lg:text-left"
                      }`}
                    >
                      <p className="font-heading text-base font-semibold">{item.label}</p>
                      <p className="mt-1 text-sm text-text-secondary">{item.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
