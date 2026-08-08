"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail, FolderOpen, Braces, Palette, PenTool } from "lucide-react";
import AuroraBackground from "@/components/ui/aurora-background";
import Particles from "@/components/ui/particles";
import TiltCard from "@/components/ui/tilt-card";
import MagneticButton from "@/components/ui/magnetic-button";
import { heroStack, profile } from "@/data/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 2.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <AuroraBackground />
      <Particles count={18} />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-text-secondary"
          >
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-success" />
            {profile.availability}
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m Diya <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>
            <br />
            <span className="text-gradient">I Design Experiences</span>
            <br />
            That Users Love
            <br />
            <span className="text-gradient-accent">And Developers Enjoy Building.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-xl text-balance text-base text-text-secondary sm:text-lg"
          >
            UI/UX Designer & Frontend Developer creating intuitive digital products, scalable web
            experiences, and meaningful user interactions.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton
              as="a"
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-primary to-purple-glow px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(108,99,255,0.35)] transition-transform hover:scale-[1.03]"
            >
              <FolderOpen className="h-4 w-4" />
              View Projects
            </MagneticButton>

            <MagneticButton
              as="a"
              href="resume.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-accent-secondary/50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: floating profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* floating tokens */}
          <motion.div
            className="animate-float absolute -left-8 -top-6 z-10 hidden sm:block"
            style={{ animationDelay: "-1s" }}
          >
            <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 text-xs text-text-secondary shadow-lg">
              <Palette className="h-3.5 w-3.5 text-accent-secondary" />
              #6C63FF
            </div>
          </motion.div>

          <motion.div
            className="animate-float-slow absolute -right-6 top-10 z-10 hidden sm:block"
            style={{ animationDelay: "-3s" }}
          >
            <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 text-xs text-text-secondary shadow-lg">
              <PenTool className="h-3.5 w-3.5 text-accent-primary" />
              Figma
            </div>
          </motion.div>

          <motion.div
            className="animate-float absolute -bottom-8 -left-4 z-10 hidden sm:block"
            style={{ animationDelay: "-5s" }}
          >
            <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 text-xs text-text-secondary shadow-lg">
              <Braces className="h-3.5 w-3.5 text-success" />
              {"</>"}
            </div>
          </motion.div>

          <div className="animate-spin-slow absolute -inset-10 -z-10 rounded-full border border-dashed border-white/5" />
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-primary/30 via-transparent to-accent-secondary/20 blur-2xl" />

          <TiltCard className="glass-strong noise relative overflow-hidden rounded-[2rem] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-primary/30 blur-3xl" />

            <div className="relative flex flex-col gap-6" style={{ transform: "translateZ(40px)" }}>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-purple-glow font-heading text-xl font-bold text-white">
                  DC
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold">{profile.name}</p>
                  <p className="text-sm text-text-secondary">{profile.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y border-border py-5">
                <div>
                  <p className="font-nums font-heading text-2xl font-bold text-gradient-accent">
                    {profile.experienceYears}
                  </p>
                  <p className="text-xs text-text-secondary">Years Experience</p>
                </div>
                <div>
                  <p className="font-heading text-base font-semibold">{profile.company}</p>
                  <p className="text-xs text-text-secondary">Current Company</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {heroStack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-medium text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-success/10 px-3 py-2 text-xs font-medium text-success">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success" />
                {profile.availability}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-text-secondary sm:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
