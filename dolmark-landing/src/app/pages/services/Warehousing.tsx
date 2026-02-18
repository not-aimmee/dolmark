import {  CheckCircle2, Shield, Clock, TrendingUp } from "lucide-react";
import { useState } from 'react';
import { ContactModal } from "../../components/Contact";
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
    icon: CheckCircle2,
    title: "Flexible Space Solutions",
    description:
      "From short term overflow to long term dedicated warehousing, we adapt to your changing business needs.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "State of the art security systems and full regulatory compliance to protect your inventory.",
  },
  {
    icon: Clock,
    title: "Real-Time Visibility",
    description:
      "Advanced WMS technology provides complete transparency and control over your inventory 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Operations",
    description:
      "Grow with confidence knowing our infrastructure can scale seamlessly with your business.",
  },
];

export default function Warehousing() {
  const[ isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
      title: 'Dedicated Warehousing Facilities',
      description:'Secure, dedicated warehousing solutions tailored to your operational requirements. We manage infrastructure, labor, and processes while ensuring flexibility and cost efficiency.',
      image:'/images/s55.webp',
    },
    {
      title: 'Inventory Storage & Optimization',
      description:'Optimized storage solutions designed to maximize space utilization and improve inventory flow. Advanced systems help reduce holding costs and improve turnaround times.',
      image:'/images/s56.webp',
    },
    {
      title: 'Value Added Warehousing Services',
      description: 'Comprehensive value added services including kitting, labeling, packaging, and customization. Enhance product readiness and streamline downstream distribution.',
      image:'/images/s57.webp',
    },
    {
      title: 'Warehouse Management Systems (WMS)',
      description: 'Technology driven warehouse management solutions offering real-time visibility and control. Improve accuracy, traceability, and operational performance.',
      image: '/images/s58.webp',
    },
    {
      title: 'Compliance, Safety & Security',
      description: 'Robust safety protocols, compliance standards, and security measures across all warehousing operations. Protect inventory while meeting regulatory and industry requirements.',
      image: '/images/s59.webp',
    },
    {
      title: 'Scalable Operations & Flexibility',
      description:'Flexible warehousing models that scale with seasonal demand and business growth. Adapt quickly without long-term infrastructure constraints.',
      image: '/images/s60.webp',
    },
    {
      title: 'Integrated Distribution Support',
      description: 'Seamless integration with transportation and distribution networks to enable smooth inbound and outbound operations. Ensure efficient movement across your supply chain.',
      image: '/images/s61.webp',
    }
  ];

  const faqs = [
    {
  question: 'How do your warehousing facilities ensure product safety and integrity?',
  answer: 'Our warehouses are designed with controlled storage environments, real-time monitoring, and strict inventory handling protocols. We follow standardized storage practices and quality checks to ensure products remain secure, compliant, and in optimal condition throughout the storage cycle.',
},
{
  question: 'Can you manage high volume storage and distribution during peak demand?',
  answer: 'Yes. Our scalable warehousing infrastructure and flexible workforce allow us to efficiently manage volume surges during peak seasons, promotions, and high demand periods while maintaining accuracy and on time dispatch.',
},
{
  question: 'What types of goods can you store and distribute?',
  answer: 'We handle a wide range of goods including beverages, food products, FMCG, edible oils, and other consumer goods. Our facilities support ambient, temperature controlled, and specialized storage requirements.',
},
{
  question: 'How do you maintain compliance and operational standards in your warehouses?',
  answer: 'We adhere to industry best practices, safety regulations, and local compliance standards. Regular audits, trained personnel, and documented processes ensure consistent operational quality across all warehousing and distribution activities.',
},
{
  question: 'What inventory visibility and tracking systems do you offer?',
  answer: 'We use advanced Warehouse Management Systems (WMS) that provide real time inventory visibility, batch tracking, automated reporting, and seamless integration with your supply chain and distribution workflows.',
},
{
  question: 'Do you provide value added services within the warehouse?',
  answer: 'Yes. We offer value added services such as labeling, repacking, kitting, order consolidation, and dispatch preparation to support efficient distribution and market readiness.',
},
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="warehousing" className="bg-gradient-to-br from-[#0A1E3A] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#00C2A0] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Contract Warehousing
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                  Elevating the standard for contract warehousing. Our flexible, scalable solutions
                   support manufacturers, distributors, and retailers with secure storage,
                   efficient inventory management, and seamless distribution.
              </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#0A1E3A] mb-4">
              Why Choose Our Contract Warehousing?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Industry leading warehousing solutions designed to optimize your
              supply chain and drive business growth.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex gap-6 items-start p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#00B3A4] hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#00C2A0]/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#00B3A4] group-hover:to-[#00C2A0] transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-[#00B3A4] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-[#0A1E3A] mb-3 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*our solutions*/}
      
      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contract Warehousing Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE WAREHOUSING & DISTRIBUTION SERVICES
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <h3 
                    className="text-3xl"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {solution.title}
                  </h3>
                  <p 
                    className="text-lg leading-relaxed text-gray-700"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {solution.description}
                  </p>
                   <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0A1E3A] text-white px-8 py-3 rounded-md hover:bg-[#00A86B] transition-colors inline-flex items-center gap-2">
                {TEXT.industriesWeServe.button}<span>→</span>
              </button>
              <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>
                <div className="flex-1">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: '#0A1E3A' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 
            className=" text-white text-4xl md:text-5xl text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span 
                    className="text-lg pr-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {faq.question}
                  </span>
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#0F4C5C' }}
                  >
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div 
                    className="px-6 pb-5 text-gray-700"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
            </div>
            </div>
            </section>
    </div>
  );
}
