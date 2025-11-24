"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FuzzyText from "../ui/FuzzyText";
import { useIntro } from "../providers/IntroContext";

export function IntroOverlay() {
  const { isEntered, enterSite } = useIntro();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulation du chargement
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); 
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] flex pointer-events-none`}>
      
      {/* PORTE GAUCHE */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: isEntered ? "-100%" : "0%" }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-1/2 h-full bg-black border-r border-[#D96C06]/20 relative flex items-center justify-end pr-4 pointer-events-auto"
      >
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[#D96C06]/20 rounded-full" />
      </motion.div>

      {/* PORTE DROITE */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: isEntered ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-1/2 h-full bg-black border-l border-[#D96C06]/20 relative flex items-center justify-start pl-4 pointer-events-auto"
      >
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[#D96C06]/20 rounded-full" />
      </motion.div>

      {/* CONTENU CENTRAL */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isEntered ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 flex flex-col items-center justify-center text-white z-50 ${isEntered ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        <div className="flex flex-col items-center gap-8">
            <div className="h-24">
                <FuzzyText 
                    baseIntensity={0.1} 
                    hoverIntensity={0.1} 
                    enableHover={false}
                    fontSize="clamp(2rem, 4vw, 4rem)"
                    color="#D96C06"
                    fontFamily="var(--font-playfair)"
                >
                    KIASI & CO
                </FuzzyText>
            </div>

            {loading ? (
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                        className="h-full bg-[#D96C06]"
                        style={{ width: `${progress}%` }}
                    />
                    <div className="mt-4 text-xs font-mono text-[#D96C06] text-center">
                        LOADING {progress}%
                    </div>
                </div>
            ) : (
                <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
                    onClick={enterSite}
                    className="px-8 py-4 border border-[#D96C06] text-[#D96C06] font-mono text-sm tracking-[0.1em] uppercase hover:bg-[#D96C06] hover:text-black transition-all duration-300 cursor-pointer"
                >
                    Entrer
                </motion.button>
            )}
        </div>
      </motion.div>
    </div>
  );
}
