'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Jonathan Mwamba',
    role: 'Director / Photographer',
    bio: 'Capturing the soul of brands through light and motion.',
    image: '/images/Jonathan.jpg'
  },
  {
    name: 'Francis Paul Inonga',
    role: 'Tech Lead / Shopify Expert',
    bio: 'Building robust digital infrastructures for scale.',
    image: '/images/Francis.jpg'
  },
  {
    name: 'Sharon',
    role: 'Art Director / SEO',
    bio: 'Crafting visual identities that rank and resonate.',
    image: null
  }
];

export function CinematicStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // On crée 5 bandes. Les paires montent, les impaires descendent (ou l'inverse) pour s'ouvrir.
  const slices = [0, 1, 2, 3, 4];
  
  return (
    <div ref={containerRef} className="relative z-20 py-20 overflow-hidden bg-background">
      
      {/* Conteneur du contenu principal (fixe) */}
      <div className="relative w-full bg-background text-foreground py-32 px-6 border-t border-foreground/5">
        
        {/* SLICE OVERLAY - Le rideau à lamelles qui glisse */}
        <div className="absolute inset-0 z-50 flex pointer-events-none overflow-hidden">
            {slices.map((i) => {
                // Les bandes glissent vers le haut (-100%) ou le bas (100%)
                const direction = i % 2 === 0 ? "-100%" : "100%";
                const y = useTransform(scrollYProgress, [0, 0.7], ["0%", direction]);
                
                return (
                    <motion.div
                        key={i}
                        style={{ y }}
                        className="flex-1 bg-[#D96C06] border-r border-black/10 last:border-0"
                    />
                );
            })}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
                <h2 className="text-xs font-light tracking-[0.3em] uppercase text-[#8B4513] dark:text-[#E8A87C] mb-8">
                Le Studio
                </h2>
                <h3 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                Trois experts, <br />
                <span className="text-foreground/50">une vision commune.</span>
                </h3>
            </div>
            <div className="flex items-end">
                <p className="text-lg text-foreground/60 leading-relaxed max-w-md border-l-2 border-[#D96C06] pl-6">
                <span className="text-[#D96C06] font-medium">Kiasi</span> signifie &quot;juste mesure, valeur&quot; en Swahili. Nous croyons en un design qui ne crie pas, mais qui parle juste. Notre mission : valoriser les entreprises africaines et afro-descendantes par une alliance entre esthétique afro-moderne et performance technique.
                </p>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }} // Délai ajouté pour attendre l'ouverture des slices
                className="group"
                >
                <div className="aspect-[3/4] bg-foreground/5 mb-6 relative overflow-hidden rounded-sm group-hover:shadow-2xl transition-all duration-500">
                    {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    ) : (
                    /* Placeholder si pas d'image */
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/10 text-xl font-serif italic group-hover:text-white/80 transition-colors duration-500 bg-foreground/5">
                        {member.name}
                    </div>
                    )}
                    
                    {/* Gradient Overlay au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <h4 className="text-xl font-light mb-1 group-hover:text-[#D96C06] transition-colors duration-300">{member.name}</h4>
                <p className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-sm text-foreground/60 leading-relaxed border-t border-foreground/10 pt-4 group-hover:border-[#D96C06]/30 transition-colors duration-300">
                    {member.bio}
                </p>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
