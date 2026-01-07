import { motion } from 'motion/react';
import { Network, Smartphone, Shield, Users, TrendingUp } from 'lucide-react';
import {  translations } from '../../translations';
import type { Language } from '../../translations';
interface WhyChooseUsProps {
  language: Language;
}

export function WhyChooseUs({ language }: WhyChooseUsProps) {
  const t = translations[language];

  const reasons = [
    {
      icon: Network,
      title: t.whyUs.network.title,
      description: t.whyUs.network.description
    },
    {
      icon: Smartphone,
      title: t.whyUs.technology.title,
      description: t.whyUs.technology.description
    },
    {
      icon: Shield,
      title: t.whyUs.compliance.title,
      description: t.whyUs.compliance.description
    },
    {
      icon: Users,
      title: t.whyUs.customerCentric.title,
      description: t.whyUs.customerCentric.description
    },
    {
      icon: TrendingUp,
      title: t.whyUs.scalable.title,
      description: t.whyUs.scalable.description
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-[#0F2C59] to-[#1a3d6f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-[#14B8A6] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}