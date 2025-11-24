"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FuzzyText from "../ui/FuzzyText";
import DecryptedText from "../ui/DecryptedText";

export function CinematicHero() {
  // Plus de condition d'entrée : le site s'affiche direct
  // On garde juste l'état interne pour synchroniser Fuzzy et Decrypted
  const [isTextRevealed, setIsTextRevealed] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Geometric Pattern Background - Bogolan inspired style */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Abstract Background Effect - Warm & Earthy */}
      <div className="absolute inset-0 z-0">
        {/* Mode Nuit: Indigo profond & Ocre sombre */}
        <div className="dark:block hidden">
          <div
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#4B0082]/20 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8B4513]/20 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "10s" }}
          />
        </div>

        {/* Mode Jour: Terre de Sienne & Safran */}
        <div className="dark:hidden block">
          <div
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E27D60]/20 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#E8A87C]/30 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "10s" }}
          />
        </div>
      </div>

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* CONTENU PRINCIPAL - Toujours affiché */}
      <div className="relative z-10 text-center px-6 w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[#8B4513] dark:text-[#E8A87C] uppercase mb-6 font-mono">
            Agence Créative Afro-Digitale
          </h2>
        </motion.div>

        {/* TITRE PRINCIPAL AVEC DOUBLE ETAT (FUZZY / NET) */}
        <div className="mb-8 flex justify-center relative h-[clamp(4rem,12vw,10rem)] items-center">
          {/* 1. Version Fuzzy (Canvas) - Visible au début */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isTextRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={0.3} 
              enableHover={false} // On désactive le hover sur le fuzzy quand il disparaît
              fontSize="clamp(4rem, 12vw, 10rem)"
              fontWeight={900}
              fontFamily="var(--font-playfair)"
            >
              KIASI & CO
            </FuzzyText>
          </div>

          {/* 2. Version Nette (HTML) - Apparaît à la fin */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: isTextRevealed ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] font-bold tracking-tight relative z-10"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#D96C06] via-[#8A2BE2] to-[#C84B31]">K</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#C84B31] via-[#D96C06] to-[#8A2BE2]">I</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#8A2BE2] via-[#C84B31] to-[#D96C06]">A</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#D96C06] via-[#8A2BE2] to-[#C84B31]">S</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#C84B31] via-[#D96C06] to-[#8A2BE2]">I</span>
            <span className="text-foreground"> & </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#8A2BE2] via-[#C84B31] to-[#D96C06]">C</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#D96C06] via-[#8A2BE2] to-[#C84B31]">O</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto font-light leading-relaxed"
        >
          <DecryptedText
            text="Nous accompagnons les entreprises de la diaspora et du continent dans leur transformation digitale, "
            animateOn="view"
            speed={50}
            maxIterations={40}
            revealDirection="start"
            parentClassName="inline"
          />
          <span className="font-medium text-[#D96C06]">
            <DecryptedText
              text="avec l'authenticité comme boussole."
              animateOn="view"
              speed={50}
              maxIterations={50} 
              revealDirection="start"
              parentClassName="inline"
              onDecryptComplete={() => setIsTextRevealed(true)}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
