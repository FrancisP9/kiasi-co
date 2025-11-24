"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";

const projects = [
  {
    title: "Robusca Coffee",
    category: "Event Coverage",
    image: "/images/robusca.jpg",
    year: "2024",
  },
  {
    title: "CMJ Beauty",
    category: "E-commerce",
    image: "/images/ellyon.jpg",
    year: "2023",
  },
  {
    title: "Ellyon & Co",
    category: "Digital Product",
    image: "/images/cmj.jpg",
    year: "2023",
  },
];

export function CinematicProjects() {
  // On ne gère plus le scroll ici, c'est ScrollStack qui le fait

  return (
    <section className="bg-background text-foreground relative z-10 py-20">
      <div className="container mx-auto max-w-6xl mb-12 px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xs font-light tracking-[0.3em] uppercase text-[#8B4513] dark:text-[#E8A87C]">
            Sélection de travaux
          </h2>
          <span className="text-xs font-mono text-foreground/40">01 — 03</span>
        </div>
      </div>

      {/* 
         Le ScrollStack gère son propre container de scroll. 
         On lui donne une hauteur définie pour qu'il soit contenu dans la section, 
         ou on laisse le body scroller (useWindowScroll={true}).
         Ici, pour s'intégrer dans la page, on utilise useWindowScroll={true}.
      */}
      <div className="min-h-[200vh]">
        {" "}
        {/* On donne de la place pour scroller l'effet */}
        <ScrollStack
          itemDistance={80}
          itemScale={0.05}
          stackPosition="20%" // Où la pile s'arrête (20% du haut de l'écran)
          useWindowScroll={true} // Important pour s'intégrer au scroll de la page
        >
          {projects.map((project, index) => (
            <ScrollStackItem
              key={index}
              // On surcharge le style par défaut pour mettre notre style "Cinematic"
              itemClassName="bg-foreground/5 border border-[#E8A87C]/10 !rounded-sm !p-0 overflow-hidden group !shadow-none !h-[60vh]"
            >
              <div className="relative w-full h-full">
                {/* Image Réelle du Projet */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay sombre pour lisibilité texte */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />

                {/* Contenu texte par-dessus l'image */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 border-t border-white/10 bg-black/20 backdrop-blur-sm">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-light mb-2 text-white group-hover:text-[#E8A87C] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/60 font-mono text-sm uppercase tracking-wider">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-white/40 font-mono text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
