import { motion } from 'motion/react';
import { MapPin, ChartBar, Link2, Eye } from 'lucide-react';
import {  translations } from '../../translations';
import type { Language } from '../../translations';
interface TechnologyProps {
  language: Language;
}

export function Technology({ language }: TechnologyProps) {
  const t = translations[language];

  const technologies = [
    {
      icon: MapPin,
      title: t.technology.tracking.title,
      description: t.technology.tracking.description
    },
    {
      icon: ChartBar,
      title: t.technology.dataDriven.title,
      description: t.technology.dataDriven.description
    },
    {
      icon: Link2,
      title: t.technology.integrated.title,
      description: t.technology.integrated.description
    },
    {
      icon: Eye,
      title: t.technology.visibility.title,
      description: t.technology.visibility.description
    }
  ];

  return (
    <section id="technology" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NzU5MzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F2C59] mb-4">
            {t.technology.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.technology.subtitle}
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-100 hover:border-[#14B8A6] transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0F2C59] to-[#14B8A6] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-[#0F2C59] mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-[#14B8A6] mb-2">99.8%</div>
            <div className="text-gray-600">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-[#14B8A6] mb-2">24/7</div>
            <div className="text-gray-600">Real-Time Tracking</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-[#14B8A6] mb-2">15+</div>
            <div className="text-gray-600">Countries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-[#14B8A6] mb-2">500+</div>
            <div className="text-gray-600">Enterprise Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}