"use client";

import React from "react";
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
         Version Native Sticky : Pas besoin de hauteur artificielle monstrueuse, 
         mais il faut assez de contenu pour scroller.
         On enlève le min-h-[200vh] excessif et les props inutiles.
      */}
      <div className="w-full px-6 container mx-auto max-w-6xl">
        <ScrollStack itemDistance={40}>
          {projects.map((project, index) => (
            <ScrollStackItem
              key={index}
              itemClassName="bg-foreground/5 border border-[#E8A87C]/10 !rounded-sm overflow-hidden group !shadow-none"
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />

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
