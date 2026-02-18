import { motion } from 'motion/react';
import { UtensilsCrossed, ShoppingCart, Car, Stethoscope, Plane, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEXT } from '../../constants';
import type React from 'react';
import { ContactModal } from './Contact';
import { useState } from 'react'; 

interface IndustryItem{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
  path:string;
}

export default function Industries() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const industries: IndustryItem[] = [
    {
      icon: UtensilsCrossed,
      title: TEXT.industriesDropdown.foodnbeverages,
      description: TEXT.industries.foodnbeverages.description,
      image: '/images/i1.webp',
      path:'/industries/foodbeverage',
    },
    {
      icon: Plane,
      title: TEXT.industriesDropdown.fmcg,
      description: TEXT.industries.fmcg.description,
      image: '/images/i2.webp',
      path: '/industries/fmcg',
    },
     {
      icon: Factory,
      title: TEXT.industriesDropdown.coldchain,
      description: TEXT.industriesWeServe.coldchain.text,
      image: '/images/i3.webp',
      path: '/industries/coldchain',
    },
    {
      icon: ShoppingCart,
      title: TEXT.industriesDropdown.retail,
      description: TEXT.industries.retail.description,
      image: '/images/i4.webp',
      path: '/industries/retail',
    },
     {
      icon: Stethoscope,
      title: TEXT.industriesDropdown.horeca,
      description: TEXT.industries.Horeca.description,
      image: '/images/i5.webp',
      path: '/industries/horeca',
    },
    {
      icon: Car,
      title: TEXT.industriesDropdown.industrial,
      description: TEXT.industries.industrial.description,
      image: '/images/i6.webp',
      path: '/industries/industrial',
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
                  className="relative w-full h-full transform-gpu"
                >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                   src={industry.image}
                   alt={industry.title}
                   className="w-full h-full object-cover will-change-transform group-hover:scale-110 transition-transform duration-700"
                   loading="lazy"
                   fetchPriority="low"
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
                  <div className="absolute inset-0 bg-[#0A1E3A]/95 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <p className="text-sm text-[#00A86B] font-semibold tracking-wider mb-3 uppercase">
              {TEXT.industries.text}
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              {TEXT.industries.heading}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {TEXT.industries.subheading}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {TEXT.industries.subheading2}
            </p>
                 <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#0A1E3A] text-white px-8 py-3 rounded-md hover:bg-[#00A86B] transition-colors inline-flex items-center gap-2" >
                            {TEXT.industries.button}<span>→</span>
                          </button>
          </motion.div>
          </div>
          <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        </div>
    </section>
    
  );
}