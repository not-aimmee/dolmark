import { useState } from 'react';
import { ContactModal } from '../../components/Contact';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

export default function Fmcg() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const solutions = [
    {
      title: 'Temperature Controlled Warehousing',
      description: 'Our state of the art temperature controlled facilities ensure your perishable goods maintain optimal freshness from warehouse to delivery. We handle labor, equipment, and logistics challenges so you can focus on your core business.',
      image: '../../images/in7.webp',
    },
    {
      title: 'FMCG Distribution & Fulfillment',
      description: 'Rapid order fulfillment and distribution services designed specifically for FMCG companies. Our advanced WMS and TMS solutions optimize operations for maximum efficiency across your supply chain network.',
      image:'../../images/in8.webp',
    },
    {
      title: 'Retail & E-Commerce Solutions',
      description: 'Seamless integration with retail and e-commerce platforms to streamline your B2B and B2C fulfillment. Pick, pack, and ship services tailored for high volume FMCG operations.',
      image: '../../images/in9.webp',
    },
    {
      title: 'Inventory Management Systems',
      description: 'Real time inventory tracking and management solutions that provide complete visibility across your FMCG supply chain. Minimize waste, reduce stockouts, and optimize inventory levels.',
      image: '../../images/in10.webp',
    },
    {
      title: 'Quality Control & Compliance',
      description: 'Comprehensive quality assurance processes and regulatory compliance support for FMCG products. We ensure your products meet all safety and quality standards throughout the logistics chain.',
      image: '../../images/in11.webp',
    },
    {
      title: 'Supply Chain Visibility',
      description: 'Advanced tracking and analytics platforms providing end to end visibility of your FMCG products. Make data driven decisions with real time insights into your supply chain performance.',
      image: '../../images/in12.webp',
    },
    {
      title: 'Last-Mile Delivery',
      description: 'Optimized last mile delivery solutions ensuring your FMCG products reach consumers quickly and efficiently. Flexible delivery options to meet diverse customer needs and expectations.',
      image: '../../images/in13.webp',
    }
  ];

  const faqs = [
    {
      question: 'How does your warehousing solution maintain product freshness for FMCG items?',
      answer: 'Our state-of-the-art facilities feature advanced temperature and humidity controls, real time monitoring systems, and strict FIFO (First-In-First-Out) inventory management. We maintain multiple climate zones to accommodate different product requirements and ensure optimal conditions throughout storage and handling.',
    },
    {
      question: 'Can you handle high volume FMCG fulfillment during peak seasons?',
      answer: 'Absolutely. Our scalable infrastructure and flexible workforce management allow us to handle significant volume fluctuations. We proactively plan for peak seasons, holidays, and promotional events to ensure consistent service levels and on-time delivery for your customers.',
    },
    {
      question: 'What types of FMCG products can you handle?',
      answer: 'We specialize in handling a wide range of FMCG products including packaged foods, beverages, personal care items, household products, and consumables. Our facilities are equipped to manage both ambient and temperature controlled storage requirements.',
    },
    {
      question: 'How do you ensure compliance with food safety and quality regulations?',
      answer: 'We maintain strict compliance with all relevant food safety standards including FDA, HACCP, and local regulations. Our team undergoes regular training, facilities are audited frequently, and we implement comprehensive quality control processes at every stage of the supply chain.',
    },
    {
      question: 'What technology platforms do you use for inventory management?',
      answer: 'We utilize advanced WMS (Warehouse Management System) and TMS (Transportation Management System) solutions with real time integration capabilities. Our systems provide complete visibility, automated reporting, and seamless integration with your existing ERP and e-commerce platforms.',
    },
    {
      question: 'Do you offer customized packaging and labeling services for FMCG products?',
      answer: 'Yes, we provide comprehensive value added services including custom packaging, kitting, labeling, and promotional assembly. Our flexible solutions can be tailored to meet your specific branding, regulatory, and market requirements.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="fmcghome" className="relative h-[600px] flex items-center justify-center overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 z-0">
          <img
            src="../../images/fmcg.webp"
            alt="FMCG Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
          <p className="text-xl tracking-[0.2em] mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h1 className="text-5xl md:text-6xl mb-6 font-semibold">
            FMCG Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Elevating the standard for FMCG logistics. Our comprehensive solutions serve manufacturers, distributors, and retailers in the fast moving consumer goods industry.
          </p>
           <button
                onClick={() => setIsModalOpen(true)}
                className=" text-white px-8 py-3 rounded-md hover:bg-[#00A86B] transition-colors inline-flex items-center gap-2">
                {TEXT.industriesWeServe.button}<span>→</span>
              </button>
              <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              FMCG Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              COMPREHENSIVE LOGISTICS & SUPPLY CHAIN SOLUTIONS
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
