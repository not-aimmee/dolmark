import { motion } from 'motion/react';
import { Award, Heart, Lightbulb } from 'lucide-react';
import { TEXT } from '../../constants';

export function About() {

  const values = [
    {
      icon: Award,
      title: TEXT.about.values.excellence.title,
      description: TEXT.about.values.excellence.description
    },
    {
      icon: Heart,
      title: TEXT.about.values.integrity.title,
      description: TEXT.about.values.integrity.description
    },
    {
      icon: Lightbulb,
      title: TEXT.about.values.innovation.title,
      description: TEXT.about.values.innovation.description
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1683331817198-358e0a1be916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMHBvcnQlMjBmcmVpZ2h0fGVufDF8fHx8MTc2NzcwNTU2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Dolmark Exporters"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/50 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#14B8A6] rounded-lg -z-10 opacity-20"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-[#14B8A6] font-semibold tracking-wider mb-3 uppercase">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl text-[#0F2C59] mb-4">
              {TEXT.about.title}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {TEXT.about.subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {TEXT.about.content}
            </p>

            {/* Values */}
            <div className="mt-12">
              <h3 className="text-2xl text-[#0F2C59] mb-6">
                {TEXT.about.values.title}
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#14B8A6] rounded-lg flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#0F2C59] mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}