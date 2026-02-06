import { motion } from 'motion/react';
import { Network, Smartphone, Shield, Users, TrendingUp, BaggageClaimIcon } from 'lucide-react';
import { TEXT } from '../../constants';

export default function WhyChooseUs() {

  const reasons = [
    {
      icon: Network,
      title: TEXT.whyUs.network.title,
      description: TEXT.whyUs.network.description
    },
    {
      icon: Smartphone,
      title: TEXT.whyUs.technology.title,
      description: TEXT.whyUs.technology.description
    },
    {
      icon: Shield,
      title: TEXT.whyUs.compliance.title,
      description: TEXT.whyUs.compliance.description
    },
    {
      icon: Users,
      title: TEXT.whyUs.customerCentric.title,
      description: TEXT.whyUs.customerCentric.description
    },
    {
      icon: TrendingUp,
      title: TEXT.whyUs.scalable.title,
      description: TEXT.whyUs.scalable.description
    },
    {
      icon: BaggageClaimIcon,
      title: TEXT.whyUs.industryexpertise.title,
      description: TEXT.whyUs.industryexpertise.description
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-[#0A1E3A] to-[#00A86B] relative overflow-hidden">

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
            {TEXT.whyUs.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {TEXT.whyUs.subtitle}
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
                <div className="w-14 h-14 bg-[#0A1E3A] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
