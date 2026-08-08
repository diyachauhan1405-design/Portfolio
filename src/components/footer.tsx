import { Code2, Link2, Mail } from "lucide-react";
import { profile } from "@/data/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Link2 },
  { label: "GitHub", href: profile.socials.github, icon: Code2 },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <a href="#top" className="font-heading text-lg font-semibold tracking-tight">
          DC<span className="text-accent-secondary">.</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent-secondary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-text-secondary">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="mt-1">Made with ❤️ using Next.js, Tailwind CSS, Framer Motion, GSAP.</p>
      </div>
    </footer>
  );
}
