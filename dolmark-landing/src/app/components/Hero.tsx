import { motion } from 'motion/react';
import shipVideo from '../../assets/ship-video.mp4';
import {  translations } from '../../translations';
import type { Language } from '../../translations';
interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = translations[language];
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={shipVideo} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-[5vw] md:text-[7vw] lg:text-[8vw] text-white font-semibold leading-none mb-6 text-center"
      
            >
            {t.hero.headline}
          </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-xl md:text-2xl text-white mb-10 font-light"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}