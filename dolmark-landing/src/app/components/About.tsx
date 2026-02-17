import { motion } from 'motion/react';
import { Award, Heart, Lightbulb } from 'lucide-react';
import { TEXT } from '../../constants';

export default function About() {
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
    <section id="about" className="relative w-full">
  <div className="flex flex-col lg:flex-row lg:items-stretch">
    
    {/* Left Column - Image */}
    <div className="lg:w-1/2 relative">
      <img
        src="../../images/ab.webp"
        alt="About Saudex Global Background"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Right Column - Content */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        lg:w-1/2
        p-10 md:p-16
        bg-gradient-to-br from-[#0A1E3A]/5 to-white/99
        backdrop-blur-xl
        shadow-2xl
        border border-white/10
        flex flex-col justify-center
      "
    >
      <p className="text-2xl text-[#00A86B] font-poppins font-semibold tracking-wider mb-3 uppercase">
        About Us
      </p>
      <h2 className="text-4xl md:text-5xl font-poppins text-black mb-6">
        {TEXT.about.title}
      </h2>
      <p className="text-2xl font-poppins text-black/90 mb-8">
        {TEXT.about.subtitle}
      </p>
      <p className="text-black/80 font-poppins leading-relaxed text-lg mb-10">
        {TEXT.about.content}
      </p>

      {/* Values */}
      <div className="mt-12">
        <h3 className="text-2xl text-[#0A1E3A] mb-6">
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
                <div className="w-12 h-12 bg-[#00A86B] rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg text-[#0A1E3A] mb-2">
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
</section>

  );
}
