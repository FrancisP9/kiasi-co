"use client";

import React from "react";
import { motion } from "framer-motion";

export function CinematicHero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background Effect - Subtle animated gradient */}
      <div className="absolute inset-0 z-0">
        {/* Mode Nuit: Blobs froids/mystérieux (existants) */}
        <div className="dark:block hidden">
          <div
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "10s" }}
          />
        </div>

        {/* Mode Jour: Blobs chauds/organiques (nouveau) */}
        <div className="dark:hidden block">
          <div
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-200/40 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-teal-100/40 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "10s" }}
          />
        </div>
      </div>

      {/* Noise Texture Overlay for Film Grain effect */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-base font-light tracking-[0.3em] text-foreground/60 uppercase mb-6">
            Agence Créative
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] font-bold tracking-tight mb-8"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#E8773D] via-[#2D5F3F] via-[#4A90A4] to-[#C2A878]">
            K
          </span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#2D5F3F] via-[#D4622C] via-[#E8773D] to-[#4A90A4]">
            I
          </span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#D4622C] via-[#4A90A4] via-[#C2A878] to-[#E8773D]">
            A
          </span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#4A90A4] via-[#E8773D] via-[#2D5F3F] to-[#D4622C]">
            S
          </span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#C2A878] via-[#2D5F3F] via-[#D4622C] to-[#4A90A4]">
            I
          </span>
          <span className="text-foreground"> & </span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#E8773D] via-[#4A90A4] via-[#C2A878] to-[#2D5F3F]">
            C
          </span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#2D5F3F] via-[#E8773D] via-[#4A90A4] to-[#C2A878]">
            O
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-foreground/50 max-w-xl mx-auto font-light leading-relaxed"
        >
          Nous accompagnons les entreprises africaines de la diaspora et en
          Afrique dans leur transformation digitale et leur rayonnement visuel.
        </motion.p>
      </div>
    </section>
  );
}
