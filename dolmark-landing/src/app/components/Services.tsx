
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Warehouse, Forklift, GitMerge, Users, ShoppingCart, Package } from 'lucide-react';
import { TEXT } from '../../constants';
import type React from 'react';
import { ContactModal } from './Contact';
import { useState } from 'react';

interface ServiceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
  path: string;
}

export default function Services() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const services: ServiceItem[] = [
    {
      icon: Users,
      title: TEXT.servicesDropdown.impoexpo,
      description: TEXT.services.scm.description,
      image:'../../images/s1.webp',
      path: '/services/impoexpo'
    },
     {
      icon: Package,
          title: TEXT.servicesDropdown.fmcgb,
          description: TEXT.services.valueAdded.description,
      image:'../../images/s2.webp',
      path: '/services/fmcgb'
    },
    {
      icon: ShoppingCart,
      title: TEXT.servicesDropdown.frieghtforwarding,
      description: TEXT.services.freight.description,
      image:'../../images/s3.webp',
      path: '/services/frieghtforwarding'
    },
    {
      icon: Forklift,
      title: TEXT.servicesDropdown.distribution,
      description: TEXT.services.valueAdded.description,
      image:'../../images/s4.webp',
      path: '/services/distribution'
    },
    {
      icon: Warehouse,
      title: TEXT.servicesDropdown.contractWarehousing,
      image: '../../images/s5.webp',
      description: TEXT.services.warehousing.description,
      path: '/services/warehousing'
    },
    {
      icon: GitMerge,
      title: TEXT.servicesDropdown.scc,
      description: TEXT.services.sequencing.description,
      image: '../../images/s6.webp',
      path: '/services/scc'
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
            <p className="text-sm text-[#00A86B] font-semibold tracking-wider mb-3 uppercase">
              {TEXT.services.heading}
            </p>
            <h2 className="text-4xl md:text-5xl text-[#0A1E3A] mb-6 leading-tight">
              {TEXT.services.subheading}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {TEXT.services.subheading2}
            </p>
            <button
               onClick={() => setIsModalOpen(true)}
               className="bg-[#0A1E3A] text-white px-8 py-3 rounded-md hover:bg-[#00A86B] transition-colors inline-flex items-center gap-2" >
                 {TEXT.industries.button}<span>→</span>
            </button>
          </motion.div>
          <ContactModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => {
              const wrapperClass = 'relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer block';

              const cardInner = (
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
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      fetchPriority="low"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-semibold border-b-2 border-white pb-2 inline-block">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover Effect - Show Description */}
                  <div className="absolute inset-0 bg-[#0A1E3A]/95 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <service.icon className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                    <h3 className="text-white text-xl font-semibold mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm text-center">
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
