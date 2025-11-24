"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number; // Distance en pixels entre chaque carte sticky
}

export function ScrollStack({ children, className = "", itemDistance = 40 }: ScrollStackProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {React.Children.map(children, (child, index) => {
        return (
          <CardWrapper index={index} total={React.Children.count(children)} itemDistance={itemDistance}>
            {child}
          </CardWrapper>
        );
      })}
    </div>
  );
}

const CardWrapper = ({
  children,
  index,
  total,
  itemDistance
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  itemDistance: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // On track le scroll de cette carte spécifique
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"] // Commence quand le haut de la carte entre, finit quand elle est en haut
  });

  // Effet d'échelle : plus on scrolle, plus la carte rétrécit légèrement pour laisser place à la suivante
  // Mais comme c'est sticky, c'est la carte SUIVANTE qui va venir la couvrir.
  // L'effet "Stack" classique est : la carte reste fixe, et la suivante glisse dessus.
  // On peut ajouter un petit scale-down pour faire joli.
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  // const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]); // Optionnel: disparait à la fin

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex items-center justify-center"
      style={{
        // La propriété magique : sticky !
        // top: calculé pour qu'elles s'empilent avec un décalage
        top: 100 + index * itemDistance, 
        // Marge en bas pour donner de l'espace de scroll
        marginBottom: itemDistance,
        zIndex: index,
        height: "calc(100vh - 200px)" // Hauteur max de la zone sticky
      }}
    >
      <motion.div
        style={{ 
            scale,
            // On décale un peu vers le haut chaque carte précédente pour l'effet "pile"
            y: index * -10 
        }}
        className="w-full h-full origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
};

// Composant Item simple pour garder la compatibilité avec l'ancien code
export const ScrollStackItem = ({ children, itemClassName = "" }: { children: React.ReactNode; itemClassName?: string }) => {
  return (
    <div className={`w-full h-full ${itemClassName}`}>
      {children}
    </div>
  );
};

export default ScrollStack;
