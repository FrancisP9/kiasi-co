"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  rotationStrength?: number;
  scaleStrength?: number;
  offset?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 3,
  blurStrength = 10,
  rotationStrength = 5,
  scaleStrength = 1.05,
  offset = 0.3, // À quel point du scroll l'élément est "révélé" (0 à 1)
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // On utilise useInView pour déclencher l'animation quand l'élément entre dans l'écran
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -10% 0px" // Déclenche un peu avant le bas de l'écran
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: baseOpacity,
        rotate: baseRotation,
        scale: scaleStrength,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
        y: 50
      }}
      animate={isInView ? {
        opacity: 1,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
        y: 0
      } : {}}
      transition={{
        duration: 2.5, // Beaucoup plus lent (était 1.2)
        ease: [0.22, 1, 0.36, 1], // Courbe "ease-out-quint" très fluide et lente à la fin
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

