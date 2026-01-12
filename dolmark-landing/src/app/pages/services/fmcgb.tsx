import {  Truck, ShieldCheck, MapPin, Maximize } from "lucide-react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
  icon: Truck, // represents fast-moving goods transport
  title: "Efficient Distribution Networks",
  description: "Seamless logistics solutions ensuring your FMCG and beverage products reach retailers and distributors on time and in perfect condition.",
},
{
  icon: ShieldCheck, // emphasizes safety and compliance
  title: "Safety & Compliance Assurance",
  description: "Strict adherence to hygiene, regulatory standards, and quality protocols to keep FMCG and beverages safe during storage and transit.",
},
{
  icon: MapPin, // represents tracking and visibility
  title: "Real-Time Shipment Tracking",
  description: "Monitor your inventory and shipments 24/7 with live updates, batch tracking, and integrated reporting for complete transparency.",
},
{
  icon: Maximize, // represents scalability and flexibility
  title: "Scalable & Flexible Operations",
  description: "Our warehousing and distribution systems adapt to seasonal demand, promotions, and business growth without disruption or delays.",
},

];

export function Fmcgb() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
  title: 'Specialized FMCG & Beverage Warehousing',
  description: 'State of the art warehouses designed for perishable and packaged FMCG products. Maintain product quality and compliance with temperature control, hygiene standards, and real time monitoring.',
  image: 'https://images.pexels.com/photos/4481552/pexels-photo-4481552.jpeg', // modern warehouse with FMCG crates
},
{
  title: 'Optimized Inventory & Storage Solutions',
  description: 'Maximize space utilization and improve product flow with smart storage systems. Reduce holding costs while ensuring fast turnover and efficient distribution.',
  image: 'https://images.pexels.com/photos/5417551/pexels-photo-5417551.jpeg', // organized warehouse racks
},
{
  title: 'Value Added Processing & Packaging',
  description: 'Enhance product readiness with services like labeling, repackaging, kitting, and customized packaging to meet FMCG and beverage market requirements.',
  image: 'https://images.pexels.com/photos/5791645/pexels-photo-5791645.jpeg', // packaging operations
},
{
  title: 'Advanced Warehouse Management Systems',
  description: 'Technology driven solutions providing real time inventory tracking, batch control, automated reporting, and seamless integration with your supply chain.',
  image: 'https://images.pexels.com/photos/5900229/pexels-photo-5900229.jpeg', // tech/WMS dashboard
},
{
  title: 'Compliance, Safety & Product Security',
  description: 'Strict adherence to regulatory standards, hygiene protocols, and security measures ensures FMCG and beverages remain safe, compliant, and quality assured.',
  image: 'https://images.pexels.com/photos/5128507/pexels-photo-5128507.jpeg', // worker with safety gear
},
{
  title: 'Scalable & Flexible Operations',
  description: 'Adaptable warehousing models that handle seasonal demand spikes, promotional campaigns, and business growth without disruption or delays.',
  image: 'https://images.pexels.com/photos/5700746/pexels-photo-5700746.jpeg', // flexible warehouse
},
{
  title: 'End-to-End Distribution Support',
  description: 'Integrated with transport and logistics networks for smooth inbound and outbound operations, ensuring timely delivery of FMCG and beverages across markets.',
  image: 'https://images.pexels.com/photos/536019/pexels-photo-536019.jpeg', // delivery trucks / logistics
}

  ];

  const faqs = [
    {
  question: 'How do your warehousing facilities ensure product safety and quality?',
  answer: 'Our warehouses are equipped with temperature-controlled zones, humidity regulation, and real time monitoring systems. Strict handling protocols and quality checks ensure beverages and FMCG products remain fresh, intact, and compliant throughout storage.',
},
{
  question: 'Can you handle high-volume storage and distribution during peak seasons?',
  answer: 'Absolutely. Our scalable warehousing capacity and agile workforce allow us to efficiently manage surges during festive seasons, promotions, or new product launches while maintaining order accuracy and timely dispatch.',
},
{
  question: 'What types of FMCG and beverage products can you store and distribute?',
  answer: 'We store and distribute a wide range of FMCG and beverage products including packaged drinks, snacks, edible oils, personal care items, and other fast moving consumer goods. Our facilities support ambient, chilled, and specialized storage requirements.',
},
{
  question: 'How do you maintain compliance and operational standards?',
  answer: 'We follow industry best practices, HACCP guidelines, and regulatory standards for FMCG and beverage handling. Regular audits, certified staff, and documented SOPs ensure consistent safety, hygiene, and operational quality.',
},
{
  question: 'What inventory tracking and visibility solutions do you offer?',
  answer: 'Our advanced Warehouse Management System (WMS) provides real-time inventory tracking, batch and expiry monitoring, automated reporting, and seamless integration with your supply chain for efficient distribution management.',
},
{
  question: 'Do you offer value-added services for FMCG and beverages?',
  answer: 'Yes. We provide services such as labeling, repackaging, kitting, order consolidation, and customized dispatch preparation to ensure products are market ready and distributed efficiently.',
},

  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="fmcgb" className="bg-gradient-to-br from-[#0F2C59] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-2xl animate-fade-in">
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