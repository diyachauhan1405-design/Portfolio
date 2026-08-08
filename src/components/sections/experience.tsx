"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve been <span className="text-gradient">designing & building</span>
            </>
          }
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-primary via-border to-transparent" />

          <div className="flex flex-col gap-14">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-purple-glow shadow-[0_0_28px_rgba(108,99,255,0.5)]">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>

                <div className="glass rounded-2xl p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{job.company}</h3>
                      <p className="text-sm text-accent-secondary">{job.role}</p>
                    </div>
                    <span className="font-nums text-sm text-text-secondary">{job.period}</span>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Responsibilities
                      </p>
                      <ul className="flex flex-col gap-2">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="text-sm leading-relaxed text-text-secondary">
                            <span className="mr-2 text-accent-primary">—</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                        <Trophy className="h-3.5 w-3.5" /> Achievements
                      </p>
                      <ul className="flex flex-col gap-2">
                        {job.achievements.map((a) => (
                          <li key={a} className="text-sm leading-relaxed text-text-secondary">
                            <span className="mr-2 text-accent-secondary">—</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
