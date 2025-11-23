'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CinematicContact() {
  return (
    <section className="bg-black text-white py-32 px-6 relative z-10 border-t border-white/5 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-12">
            Démarrer un projet
          </h2>
          
          <a 
            href="mailto:hello@kiasi.co" 
            className="group inline-flex items-center gap-4 md:gap-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter hover:text-white/80 transition-colors duration-300"
          >
            <span>hello@kiasi.co</span>
            <ArrowRight className="w-12 h-12 md:w-20 md:h-20 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </a>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-white/40 font-mono">
            <div>
              <h3 className="text-white mb-4 uppercase tracking-widest text-xs">Socials</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4 uppercase tracking-widest text-xs">Location</h3>
              <p>Bruxelles, Belgique</p>
              <p>Disponible worldwide</p>
            </div>
            <div>
              <h3 className="text-white mb-4 uppercase tracking-widest text-xs">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-32 text-xs text-white/20">
            © {new Date().getFullYear()} Kiasi & Co. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
