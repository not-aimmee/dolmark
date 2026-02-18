import {  MapPin, Shield, Truck, TrendingUp } from "lucide-react";
import { useState } from 'react';
import { ContactModal } from "../../components/Contact";
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
  icon: Truck, // represents freight/shipping
  title: "Global Freight Solutions",
  description: "Reliable transportation services for domestic and international shipments, ensuring your cargo reaches its destination safely and on time.",
},
{
  icon: Shield, // security still fits
  title: "Cargo Safety & Compliance",
  description: "Robust security measures and regulatory compliance for all freight, protecting goods during transit across borders.",
},
{
  icon: MapPin, // represents tracking
  title: "Real-Time Shipment Tracking",
  description: "Stay updated with live tracking and notifications for every shipment, giving you full visibility throughout the supply chain.",
},
{
  icon: TrendingUp, // growth and scalability
  title: "Flexible & Scalable Logistics",
  description: "Our freight forwarding solutions adapt to changing volumes and business growth, ensuring seamless operations at every stage.",
},

];

export default function Frieght() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
  title: 'Specialized Food & Beverage Warehousing',
  description: 'Temperature controlled and hygienic warehouses designed for perishable and packaged food products. Ensuring quality, safety, and compliance at every stage.',
  image: '/images/s28.webp',
},
{
  title: 'Smart Inventory Management',
  description: 'Advanced inventory solutions that maximize space utilization and streamline stock flow. Reduce waste, optimize turnover, and improve operational efficiency.',
  image: '/images/s29.webp',
},
{
  title: 'Value Added Handling Services',
  description: 'Labeling, packaging, and customized processing to enhance product readiness and speed up distribution for clients.',
  image: '/images/s30.webp',
},
{
  title: 'Warehouse Management Technology',
  description: 'Integrated WMS solutions offering real-time tracking, reporting, and control for smooth warehouse operations and accurate order fulfillment.',
  image: '/images/s31.webp',
},
{
  title: 'Safety, Compliance & Security',
  description: 'Strict adherence to safety standards and regulatory compliance with robust security systems to protect inventory and maintain quality.',
  image: '/images/s32.webp',
},
{
  title: 'Scalable & Flexible Operations',
  description: 'Flexible warehousing models that adapt to seasonal demand, e-commerce spikes, or business growth without compromising efficiency.',
  image: '/images/s33.webp',
},
{
  title: 'End to End Distribution Support',
  description: 'Seamless coordination with transport and logistics partners to ensure timely inbound and outbound movement across your supply chain.',
  image: '/images/s34.webp',
}
  ];

  const faqs = [
    {
  question: 'How do you ensure the safety and integrity of shipments?',
  answer: 'Our freight forwarding operations use secure transport, real time tracking, and standardized handling protocols. We ensure cargo remains protected, compliant, and in optimal condition throughout transit, from pickup to delivery.',
},
{
  question: 'Can you handle high volume shipments during peak periods?',
  answer: 'Absolutely. Our scalable logistics network and flexible resources allow us to efficiently manage surges in shipments during peak seasons, promotions, or high demand periods, ensuring timely and accurate delivery.',
},
{
  question: 'What types of goods can you transport?',
  answer: 'We handle a wide range of cargo including FMCG, food and beverages, industrial goods, and temperature sensitive products. Our services cover ambient, chilled, frozen, and specialized freight requirements.',
},
{
  question: 'How do you maintain compliance and operational standards in freight forwarding?',
  answer: 'We strictly follow international and local transport regulations, safety standards, and industry best practices. Regular audits, trained staff, and documented processes ensure consistent quality across all shipments.',
},
{
  question: 'What shipment visibility and tracking systems do you offer?',
  answer: 'We provide advanced tracking solutions that give real time shipment visibility, route monitoring, automated notifications, and seamless integration with your supply chain management systems.',
},
{
  question: 'Do you provide value-added services for shipments?',
  answer: 'Yes. Our value added services include customs documentation, consolidation, labeling, packaging, cargo insurance, and dispatch coordination to ensure smooth and efficient delivery.',
},
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="frieghtforwarding" className="bg-gradient-to-br from-[#0A1E3A] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#00C2A0] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Freight Forwarding Logistics
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                 Raising the bar in freight forwarding solutions. Our flexible, scalable services support manufacturers, distributors, and retailers with secure transport, efficient cargo management, and seamless delivery across supply chains.
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
              Why Choose Our Freight Forwarding Service?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Industry leading freight forwarding solutions designed to streamline your supply chain and accelerate business growth.
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
              Freight Forwarding Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE FREIGHT FORWARDING SERVICES
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
