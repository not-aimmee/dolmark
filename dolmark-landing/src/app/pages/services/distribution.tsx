import { Truck, ShieldCheck, Eye, Repeat } from "lucide-react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
  icon: Truck, // Represents logistics and cargo transport
  title: "Reliable Distribution Networks",
  description: "Efficient logistics and transportation solutions ensuring your goods are delivered on time and in perfect condition.",
},
{
  icon: ShieldCheck, // Emphasizes safety and compliance
  title: "Cargo Safety & Compliance",
  description: "Strict adherence to transport regulations and security protocols to protect your shipments throughout the supply chain.",
},
{
  icon: Eye, // Represents real-time visibility and monitoring
  title: "Real-Time Shipment Tracking",
  description: "Monitor your shipments 24/7 with live updates, route tracking, and seamless integration into your supply chain management.",
},
{
  icon: Repeat, // Represents scalability and flexibility
  title: "Scalable & Flexible Operations",
  description: "Our logistics and transportation systems adapt to seasonal demand, volume surges, and business growth without disruption.",
},

];

export function Distribution() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
  title: 'Dedicated Distribution Hubs',
  description: 'State-of-the-art distribution centers designed to handle your cargo efficiently. Secure storage, streamlined operations, and flexible infrastructure ensure timely deliveries across your supply chain.',
  image: 'https://images.pexels.com/photos/536019/pexels-photo-536019.jpeg', // warehouse with trucks
},
{
  title: 'Optimized Inventory & Flow Management',
  description: 'Advanced systems for inventory tracking, space optimization, and efficient movement of goods. Reduce delays, improve turnaround times, and keep your supply chain running smoothly.',
  image: 'https://images.pexels.com/photos/5417551/pexels-photo-5417551.jpeg', // organized warehouse racks
},
{
  title: 'Value-Added Logistics Services',
  description: 'Custom services including labeling, packaging, kitting, and order consolidation to enhance readiness and simplify distribution for your customers.',
  image: 'https://images.pexels.com/photos/5791645/pexels-photo-5791645.jpeg', // packaging operations
},
{
  title: 'Advanced Logistics Management Systems',
  description: 'Technology-driven solutions offering real-time tracking, route optimization, reporting, and seamless integration with your supply chain operations.',
  image: 'https://images.pexels.com/photos/5900229/pexels-photo-5900229.jpeg', // logistics dashboard
},
{
  title: 'Safety, Compliance & Cargo Security',
  description: 'Strict adherence to safety protocols, transport regulations, and security standards ensures that your goods remain protected throughout storage and transit.',
  image: 'https://images.pexels.com/photos/5128507/pexels-photo-5128507.jpeg', // worker with safety gear
},
{
  title: 'Flexible & Scalable Operations',
  description: 'Our distribution and transportation solutions scale with seasonal demand, promotions, and business growth, ensuring continuity without disruption.',
  image: 'https://images.pexels.com/photos/5700746/pexels-photo-5700746.jpeg', // flexible warehouse operations
},
{
  title: 'Integrated Transportation Support',
  description: 'Seamless coordination with transport networks for inbound and outbound shipments, ensuring timely delivery and efficient movement across your supply chain.',
  image: 'https://images.pexels.com/photos/536020/pexels-photo-536020.jpeg', // delivery trucks and cargo
}

  ];

  const faqs = [
   {
  question: 'How do your distribution and transportation services ensure product safety and integrity?',
  answer: 'Our operations follow strict handling protocols, secure transport methods, and real-time monitoring to ensure products are delivered safely, on time, and in optimal condition throughout the supply chain.',
},
{
  question: 'Can you handle high-volume shipments during peak demand?',
  answer: 'Absolutely. Our scalable logistics network and flexible workforce enable us to efficiently manage volume surges during seasonal peaks, promotional campaigns, or urgent deliveries, while maintaining accuracy and timely dispatch.',
},
{
  question: 'What types of products can you distribute and transport?',
  answer: 'We handle a wide range of goods including FMCG, beverages, packaged food products, consumer goods, and other fast-moving items. Our solutions support temperature-sensitive, fragile, and specialized cargo.',
},
{
  question: 'How do you maintain compliance and operational standards?',
  answer: 'We adhere to industry best practices, safety regulations, and transport compliance standards. Regular audits, trained personnel, and documented processes ensure consistent quality and reliability across all distribution and transportation activities.',
},
{
  question: 'What tracking and visibility solutions do you offer?',
  answer: 'We provide advanced shipment tracking systems that offer real-time visibility, status updates, route monitoring, and seamless integration with your supply chain to ensure transparency and control over every delivery.',
},
{
  question: 'Do you provide value-added services within your logistics operations?',
  answer: 'Yes. Our value-added services include order consolidation, packaging optimization, labeling, and customized delivery solutions to enhance operational efficiency and ensure products reach their destination market-ready.',
},

];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="distribution" className="bg-gradient-to-br from-[#0F2C59] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Distribution & Transportation Services
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                  Raising the benchmark for distribution and transportation services. Our flexible, scalable solutions support manufacturers, distributors, and retailers with timely deliveries, efficient logistics, and end-to-end supply chain management.
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
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4">
              Why Choose Our Service?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Comprehensive distribution and transportation solutions that optimize your supply chain, reduce transit times, and support business growth.
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
      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Distribution and Transportation Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE DISTRIBUTION & TRANSPORTATION SERVICES
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