import { motion } from 'motion/react';
import { UtensilsCrossed, ShoppingCart, Car, Stethoscope, Plane, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import {  translations } from '../../translations';
import type { Language } from '../../translations';
import type React from 'react';

interface IndustryItem{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
  path:string;
}

interface IndustriesProps {
  language: Language;
}

export function Industries({ language }: IndustriesProps) {
  const t = translations[language];

  const industries: IndustryItem[] = [
    {
      icon: ShoppingCart,
      title: t.industriesDropdown.retail,
      description: t.industries.retail.description,
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHNoZWx2ZXN8ZW58MXx8fHwxNzY3NzA1NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/industries/retail',
    },
    {
      icon: Car,
      title: t.industriesDropdown.industrial,
      description: t.industries.industrial.description,
      image: 'https://images.unsplash.com/photo-1638184984605-af1f05249a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYXJraW5nJTIwbG90fGVufDF8fHx8MTczNjE4MzI4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/industries/industrial',
    },
    {
      icon: Stethoscope,
      title: t.industriesDropdown.pharmaceuticals,
      description: t.industries.Pharmaceuticals.description,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzM2MTgzMjg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/industries/pharmaceuticals',
    },
    {
      icon: Plane,
      title: t.industriesDropdown.fmcg,
      description: t.industries.fmcg.description,
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGhhbmdhcnxlbnwxfHx8fDE3MzYxODMyODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/industries/fmcg',
    },
    {
      icon: Factory,
      title: t.industriesDropdown.importnexport,
      description: t.industries.importnexport.description,
      image: 'https://images.unsplash.com/photo-1763325088554-529181f76960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBjb250YWluZXJzfGVufDF8fHx8MTc2NzU4NTgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/industries/importnexport',
    },
    {
      icon: UtensilsCrossed,
      title: t.industriesDropdown.foodnbeverages,
      description: t.industries.foodnbeverages.description,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYW5kJTIwYmV2ZXJhZ2V8ZW58MXx8fHwxNzM2MTgzMjg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      path:'/industries/FoodBeverage',
    }
  ];

  return (
    <section id="industries" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Industry Grid */}
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, index) => (

              <Link
                key={index}
                to ={industry.path}
                className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative w-full h-full"
                >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-semibold border-b-2 border-white pb-2 inline-block">
                    {industry.title}
                  </h3>
                </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-[#0F2C59]/95 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <industry.icon className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                    <h3 className="text-white text-xl font-semibold mb-3 text-center">
                      {industry.title}
                    </h3>
                    <p className="text-white text-sm text-center">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 text-white"
          >
            <p className="text-sm text-[#14B8A6] font-semibold tracking-wider mb-3 uppercase">
              {t.industries.text}
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              {t.industries.heading}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t.industries.subheading}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t.industries.subheading2}
            </p>
            <Link to="/#contact" className="bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
              {t.industries.button}
              <span>→</span>
            </Link>
          </motion.div>
          </div>
        </div>
    </section>
  );
}