'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CinematicContact() {
  return (
    <section className="bg-background text-foreground py-32 px-6 relative z-10 border-t border-foreground/5 min-h-[80vh] flex flex-col justify-center overflow-hidden">
        {/* Geometric Pattern Background (Rappel Footer) */}
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] z-0 opacity-[0.06] dark:opacity-[0.05] pointer-events-none"
            style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage: 'linear-gradient(to top left, black, transparent)'
            }}
        />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-light tracking-[0.3em] uppercase text-[#8B4513] dark:text-[#E8A87C] mb-12">
            Démarrer un projet
          </h2>
          
          <a 
            href="mailto:hello@kiasi.co" 
            className="group inline-flex items-center gap-4 md:gap-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter hover:text-[#D96C06] transition-colors duration-300"
          >
            <span>hello@kiasi.co</span>
            <ArrowRight className="w-12 h-12 md:w-20 md:h-20 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#8A2BE2]" />
          </a>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-foreground/40 font-mono">
            <div>
              <h3 className="text-foreground mb-4 uppercase tracking-widest text-xs">Socials</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#D96C06] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#D96C06] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-4 uppercase tracking-widest text-xs">Location</h3>
              <p>Bruxelles, Belgique</p>
              <p>Disponible worldwide</p>
            </div>
            <div>
              <h3 className="text-foreground mb-4 uppercase tracking-widest text-xs">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#D96C06] transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-[#D96C06] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-32 text-xs text-foreground/20">
            © {new Date().getFullYear()} Kiasi & Co. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
