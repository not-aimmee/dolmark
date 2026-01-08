
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Warehouse, Forklift, GitMerge, Users, ShoppingCart, Package } from 'lucide-react';
import {  translations } from '../../translations';
import type { Language } from '../../translations';
import type React from 'react';

interface ServiceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
  path: string;
}
interface ServicesProps {
  language: Language;
}

export function Services({ language }: ServicesProps) {
  const t = translations[language];

  const services: ServiceItem[] = [
    {
      icon: Warehouse,
      title: t.servicesDropdown.contractWarehousing,
      image: 'https://images.unsplash.com/photo-1767522247768-fb18caca37f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBkaXN0cmlidXRpb24lMjBjZW50ZXJ8ZW58MXx8fHwxNzY3NjEzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.services.warehousing.description,
      path: '/services/warehousing'
    },
    {
      icon: Forklift,
      title: t.servicesDropdown.valueAdded,
      description: t.services.valueAdded.description,
      image: 'https://images.unsplash.com/photo-1763325088554-529181f76960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBjb250YWluZXJzfGVufDF8fHx8MTc2NzU4NTgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/services/value-added'
    },
    {
      icon: GitMerge,
      title: t.servicesDropdown.sequencing,
      description: t.services.sequencing.description,
      image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodHxlbnwxfHx8fDE3Njc3MDU1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/services/sequencing'
    },
    {
      icon: Users,
      title: t.servicesDropdown.supplyChainConsulting,
      description: t.services.scm.description,
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3NjkwMjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/services/supply-chain-consulting'
    },
    {
      icon: ShoppingCart,
      title: t.servicesDropdown.retailLogistics,
      description: t.services.freight.description,
      image: 'https://images.unsplash.com/photo-1761666519980-e29488141562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGxvZ2lzdGljcyUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3Njc3MDIwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/services/retail-logistics'
    },
    {
      icon: Package,
          title: t.servicesDropdown.ecommerce,
          description: t.services.valueAdded.description,
      image: 'https://images.unsplash.com/photo-1763325088554-529181f76960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBjb250YWluZXJzfGVufDF8fHx8MTc2NzU4NTgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      path: '/services/ecommerce'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left side content + Right side grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-sm text-[#14B8A6] font-semibold tracking-wider mb-3 uppercase">
              {t.services.heading}
            </p>
            <h2 className="text-4xl md:text-5xl text-[#0F2C59] mb-6 leading-tight">
              {t.services.subheading}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.services.subheading2}
            </p>
            <Link to="/#contact" className="bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
              Learn More
            <button className="bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2"></button>
              {t.services.button}
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const wrapperClass = 'relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer';

              const cardInner = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <service.icon className="w-10 h-10 text-white mb-3" strokeWidth={1.5} />
                    <h3 className="text-white text-xl font-semibold">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover Effect - Show Description */}
                  <div className="absolute inset-0 bg-black flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <service.icon className="w-10 h-10 text-[#14B8A6] mb-4" strokeWidth={1.5} />
                    <h3 className="text-white text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );

              return (
                <Link key={index} to={service.path} className={wrapperClass}>
                  {cardInner}
                </Link>
              );
            })}

            
          </div>
        </div>
      </div>
    </section>
  );
}