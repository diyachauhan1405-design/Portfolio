"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAME = "DIYA CHAUHAN";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 2200;

    let raf: number;
    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    }
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-bg"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/15 blur-[140px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-secondary/10 blur-[100px]" />

          <div className="relative flex flex-col items-center gap-6 px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-x-[0.15em]">
              {NAME.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.045, ease: "easeOut" }}
                  className="font-heading text-4xl font-bold tracking-[0.08em] text-text-primary sm:text-6xl"
                  style={{
                    textShadow: "0 0 30px rgba(108,99,255,0.5)",
                  }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-text-secondary sm:text-sm"
            >
              <span>UI/UX Designer</span>
              <span className="h-1 w-1 rounded-full bg-accent-secondary" />
              <span>Frontend Developer</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 220 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="relative mt-4 h-[2px] overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-purple-glow"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="font-nums text-xs text-text-secondary"
            >
              {Math.floor(progress).toString().padStart(2, "0")}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
