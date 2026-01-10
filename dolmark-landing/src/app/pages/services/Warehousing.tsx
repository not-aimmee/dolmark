import {  CheckCircle2, Shield, Clock, TrendingUp } from "lucide-react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
    icon: CheckCircle2,
    title: "Flexible Space Solutions",
    description:
      "From short-term overflow to long-term dedicated warehousing, we adapt to your changing business needs.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "State-of-the-art security systems and full regulatory compliance to protect your inventory.",
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

export function Warehousing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
      title: 'Dedicated Warehousing Facilities',
      description:'Secure, dedicated warehousing solutions tailored to your operational requirements. We manage infrastructure, labor, and processes while ensuring flexibility and cost efficiency.',
      image: 'https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY3OTY5MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Inventory Storage & Optimization',
      description:'Optimized storage solutions designed to maximize space utilization and improve inventory flow. Advanced systems help reduce holding costs and improve turnaround times.',
      image:'https://images.unsplash.com/photo-1645736315000-6f788915923b?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Value-Added Warehousing Services',
      description: 'Comprehensive value-added services including kitting, labeling, packaging, and customization. Enhance product readiness and streamline downstream distribution.',
      image: 'https://images.pexels.com/photos/34991547/pexels-photo-34991547.jpeg?_gl=1*1gan2vs*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njc5NzUyODgkbzUkZzEkdDE3Njc5NzYzMTckajUyJGwwJGgw',
    },
    {
      title: 'Warehouse Management Systems (WMS)',
      description: 'Technology-driven warehouse management solutions offering real-time visibility and control. Improve accuracy, traceability, and operational performance.',
      image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2Nzk2OTIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Compliance, Safety & Security',
      description: 'Robust safety protocols, compliance standards, and security measures across all warehousing operations. Protect inventory while meeting regulatory and industry requirements.',
      image: 'https://images.pexels.com/photos/5532842/pexels-photo-5532842.jpeg?_gl=1*1d97980*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njc5NzUyODgkbzUkZzEkdDE3Njc5NzY1MjIkajEkbDAkaDA.',
    },
    {
      title: 'Scalable Operations & Flexibility',
      description:'Flexible warehousing models that scale with seasonal demand and business growth. Adapt quickly without long-term infrastructure constraints.',
      image: 'https://images.pexels.com/photos/16015233/pexels-photo-16015233.jpeg?_gl=1*f6dnfr*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njc5NzUyODgkbzUkZzEkdDE3Njc5NzY2NzAkajM1JGwwJGgw',
    },
    {
      title: 'Integrated Distribution Support',
      description: 'Seamless integration with transportation and distribution networks to enable smooth inbound and outbound operations. Ensure efficient movement across your supply chain.',
      image: 'https://images.pexels.com/photos/30115463/pexels-photo-30115463.jpeg?_gl=1*11hke7l*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njc5NzUyODgkbzUkZzEkdDE3Njc5NzY3MjIkajU5JGwwJGgw',
    }
  ];

  const faqs = [
    {
      question: 'How does your warehousing solution maintain product freshness for FMCG items?',
      answer: 'Our state-of-the-art facilities feature advanced temperature and humidity controls, real-time monitoring systems, and strict FIFO (First-In-First-Out) inventory management. We maintain multiple climate zones to accommodate different product requirements and ensure optimal conditions throughout storage and handling.',
    },
    {
      question: 'Can you handle high-volume FMCG fulfillment during peak seasons?',
      answer: 'Absolutely. Our scalable infrastructure and flexible workforce management allow us to handle significant volume fluctuations. We proactively plan for peak seasons, holidays, and promotional events to ensure consistent service levels and on-time delivery for your customers.',
    },
    {
      question: 'What types of FMCG products can you handle?',
      answer: 'We specialize in handling a wide range of FMCG products including packaged foods, beverages, personal care items, household products, and consumables. Our facilities are equipped to manage both ambient and temperature-controlled storage requirements.',
    },
    {
      question: 'How do you ensure compliance with food safety and quality regulations?',
      answer: 'We maintain strict compliance with all relevant food safety standards including FDA, HACCP, and local regulations. Our team undergoes regular training, facilities are audited frequently, and we implement comprehensive quality control processes at every stage of the supply chain.',
    },
    {
      question: 'What technology platforms do you use for inventory management?',
      answer: 'We utilize advanced WMS (Warehouse Management System) and TMS (Transportation Management System) solutions with real-time integration capabilities. Our systems provide complete visibility, automated reporting, and seamless integration with your existing ERP and e-commerce platforms.',
    },
    {
      question: 'Do you offer customized packaging and labeling services for FMCG products?',
      answer: 'Yes, we provide comprehensive value-added services including custom packaging, kitting, labeling, and promotional assembly. Our flexible solutions can be tailored to meet your specific branding, regulatory, and market requirements.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F2C59] to-[#061526] pt-30 py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6EE7DB] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00B3A4] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-xl animate-fade-in">
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

            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1767294274634-613a3545e36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc5MDExNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern warehouse facility"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6EE7DB] rounded-full blur-2xl opacity-50 animate-bounce" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00B3A4] rounded-full blur-2xl opacity-50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4">
              Why Choose Our Contract Warehousing?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Industry-leading warehousing solutions designed to optimize your
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
                  <div className="w-14 h-14 rounded-full bg-[#6EE7DB]/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#00B3A4] group-hover:to-[#6EE7DB] transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-[#00B3A4] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-[#0F2C59] mb-3 text-lg">
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
                  <Link to="/#contact" className="bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
                    {TEXT.services.button}
                   <span>→</span>
                  </Link>
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
      <section className="py-20" style={{ backgroundColor: '#0F2C59' }}>
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