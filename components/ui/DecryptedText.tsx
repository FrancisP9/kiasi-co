"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
  onDecryptComplete?: () => void;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=",
  className = "",
  parentClassName = "",
  animateOn = "hover",
  onDecryptComplete,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10px" });
  const [hasMounted, setHasMounted] = useState(false);

  // Eviter Hydration Mismatch: on n'anime rien avant que le composant soit monté côté client
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Gestion des états d'animation
  useEffect(() => {
    if (animateOn === "view" && isInView && !isScrambling && hasMounted) {
      setIsScrambling(true);
    }
  }, [animateOn, isInView, isScrambling, hasMounted]);

  // Algorithme de décryptage
  useEffect(() => {
    if (!hasMounted) return; // Ne rien faire tant qu'on est pas monté
    
    if (!isScrambling && animateOn === "view") return;
    if (!isHovering && animateOn === "hover") {
      setDisplayText(text);
      return;
    }

    let interval: NodeJS.Timeout;
    let iteration = 0;

    const simpleScramble = () => {
        interval = setInterval(() => {
            setDisplayText(prev => 
                prev.split("").map((char, i) => {
                    if (char === " ") return " ";
                    if (i < (iteration / maxIterations) * text.length) {
                        return text[i];
                    }
                    // On utilise Math.random() seulement ici, côté client
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join("")
            );
            iteration++;
            if (iteration > maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
                if (onDecryptComplete) onDecryptComplete();
            }
        }, speed);
    }

    simpleScramble();

    return () => clearInterval(interval);
  }, [isHovering, isScrambling, text, speed, maxIterations, characters, animateOn, onDecryptComplete, hasMounted]);

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={() => animateOn === "hover" && setIsHovering(true)}
      onMouseLeave={() => animateOn === "hover" && setIsHovering(false)}
    >
      <span className={className}>{displayText}</span>
    </motion.span>
  );
};

export default DecryptedText;
