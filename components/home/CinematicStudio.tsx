'use client';

import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Jonathan Mwamba',
    role: 'Director / Photographer',
    bio: 'Capturing the soul of brands through light and motion.'
  },
  {
    name: 'Francis Paul Inonga',
    role: 'Tech Lead / Shopify Expert',
    bio: 'Building robust digital infrastructures for scale.'
  },
  {
    name: 'Sharon',
    role: 'Art Director / SEO',
    bio: 'Crafting visual identities that rank and resonate.'
  }
];

export function CinematicStudio() {
  return (
    <section className="bg-black text-white py-32 px-6 relative z-10 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-8">
              Le Studio
            </h2>
            <h3 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              Trois experts, <br />
              <span className="text-white/50">une vision commune.</span>
            </h3>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              Kiasi signifie "juste mesure, valeur" en Swahili. Nous croyons en un design qui ne crie pas, mais qui parle juste. Notre mission : valoriser les entreprises africaines et afro-descendantes par une alliance entre esthétique afro-moderne et performance technique.
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
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-white/5 mb-6 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Placeholder for team photo */}
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl font-serif italic">
                  {member.name}
                </div>
              </div>
              
              <h4 className="text-xl font-light mb-1">{member.name}</h4>
              <p className="text-xs font-mono text-white/40 uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
