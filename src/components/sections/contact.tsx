"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Code2, Link2, Palette, Layers, Download, Loader2, CheckCircle2, Phone } from "lucide-react";
import AuroraBackground from "@/components/ui/aurora-background";
import Particles from "@/components/ui/particles";
import MagneticButton from "@/components/ui/magnetic-button";
import { profile } from "@/data/content";

type Status = "idle" | "sending" | "sent";

const socialLinks = [
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Link2 },
  { label: "GitHub", href: profile.socials.github, icon: Code2 },
  { label: "Behance", href: profile.socials.behance, icon: Palette },
  { label: "Dribbble", href: profile.socials.dribbble, icon: Layers },
].filter((link) => link.href);

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 700);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <AuroraBackground />
      <Particles count={16} />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-secondary">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s Build Something <span className="text-gradient">Amazing Together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Have a project in mind, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass-strong mt-12 rounded-3xl p-6 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-medium text-text-secondary">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent-primary/60"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-medium text-text-secondary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent-primary/60"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-medium text-text-secondary">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Tell me about your project..."
              className="resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent-primary/60"
            />
          </div>

          <MagneticButton
            type="submit"
            disabled={status !== "idle"}
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-primary to-purple-glow px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(108,99,255,0.35)] transition-transform hover:scale-[1.01] disabled:opacity-80 sm:w-auto"
          >
            {status === "idle" && (
              <>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                Send Message
              </>
            )}
            {status === "sending" && (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            )}
            {status === "sent" && (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Opening your email client
              </>
            )}
          </MagneticButton>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <MagneticButton
              key={link.label}
              as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </MagneticButton>
          ))}
          <MagneticButton
            as="a"
            href="resume.pdf"
            download
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <Download className="h-4 w-4" />
            Resume
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
