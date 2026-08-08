"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Selected <span className="text-gradient">projects</span>
            </>
          }
          description="A mix of product design, design systems, and frontend builds — from research to production."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="gradient-border group relative overflow-hidden rounded-3xl"
            >
              <div className="glass relative flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 group-hover:-translate-y-2">
                <div
                  className={`relative flex h-52 items-end overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}
                >
                  <div className="grid-glow absolute inset-0 opacity-20" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                  <span className="relative rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{project.name}</h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {project.role} · {project.timeline}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-secondary" />
                  </div>

                  <p className="text-sm leading-relaxed text-text-secondary">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-4 text-sm">
                    <a
                      href="#"
                      className="font-medium text-accent-secondary transition-colors hover:text-accent-primary"
                    >
                      View Case Study
                    </a>
                    <a
                      href="#"
                      aria-label="Live website"
                      className="flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="GitHub repository"
                      className="flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <Code2 className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
