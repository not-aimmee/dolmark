import {  ShieldCheck, TrendingUp, BarChart3, Package2 } from "lucide-react";
import { useState } from 'react';
import { ContactModal } from "../../components/Contact";
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
 {
  icon: Package2, // FMCG & beverage distribution
  title: "Fast & Reliable FMCG Distribution",
  description:
    "Efficient distribution networks designed for high volume FMCG and beverage movement, ensuring timely delivery to distributors, retailers, and modern trade channels.",
},
{
  icon: ShieldCheck, // safety, hygiene & compliance
  title: "Hygiene, Safety & Compliance",
  description:
    "Food grade handling, regulatory compliance, and quality control processes that protect FMCG and beverage products throughout storage and transportation.",
},
{
  icon: BarChart3, // tracking & visibility
  title: "Real Time Inventory & Shipment Visibility",
  description:
    "End-to-end visibility with live shipment tracking, batch and expiry monitoring, and integrated reporting for complete supply chain transparency.",
},
{
  icon: TrendingUp, // scalability & growth
  title: "Scalable Solutions supporting Long-term Growth",
  description:
    "Flexible warehousing and distribution capacity built to manage festive surges, promotions, and rapid business expansion without operational bottlenecks.",
},

];

export default  function Fmcgb() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
  title: 'FMCG & Beverage Ready Warehousing',
  description:
    'Purpose built warehouses designed for high velocity FMCG and beverage storage, supporting ambient and temperature sensitive products with strict hygiene, quality control, and real time monitoring.',
  image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?_gl=1*1d2fwuj*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4Mjk0NTY2JGo5JGwwJGgw', // food & beverage warehouse pallets
},
{
  title: 'Smart Storage & Inventory Optimization',
  description:
    'Efficient racking layouts and FIFO based storage systems that improve space utilization, reduce dwell time, and enable faster product movement across the supply chain.',
  image: 'https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?_gl=1*ndetpa*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4Mjk0NjE2JGozNiRsMCRoMA..', // organized warehouse racks with cartons
},
{
  title: 'Value Added Packaging & Processing',
  description:'Comprehensive packaging solutions including labeling, repackaging, kitting, shrink wrapping, and customized packaging tailored for FMCG and beverage markets.',
  image: 'https://images.pexels.com/photos/4820737/pexels-photo-4820737.jpeg?_gl=1*pfjri3*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4Mjk0NDc0JGo5JGwwJGgw', // packaging & labeling line
},
{
  title: 'Technology Driven Warehouse Management',
  description:
    'Advanced WMS enabled operations offering inventory visibility, batch and expiry tracking, automated reports, and seamless integration with your ERP and distribution systems.',
  image: 'https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?_gl=1*1dijq1c*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4Mjk0Mzc5JGo0JGwwJGgw', // warehouse tech & tablet scanning
},
{
  title: 'Safety, Hygiene & Regulatory Compliance',
  description:
    'Operations aligned with FMCG and beverage compliance standards, including HACCP led processes, sanitation controls, access security, and continuous quality audits.',
  image: 'https://images.pexels.com/photos/5953552/pexels-photo-5953552.jpeg?_gl=1*e1b6xd*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4Mjk0MzI0JGo1OSRsMCRoMA..', // worker in food-grade PPE
},
{
  title: 'Growth Ready Scalable Operations',
  description:'Flexible warehousing capacity and skilled manpower to handle festive demand spikes, promotional volumes, and new product launches without service disruption.',
  image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?_gl=1*kg1rzx*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4Mjk0MjUxJGo1OSRsMCRoMA..', // large-scale warehouse operations
},
{
  title: 'Integrated FMCG Distribution Support',
  description:
    'Seamless coordination with transportation networks for efficient inbound and outbound movement, ensuring timely delivery to distributors, retailers, and modern trade.',
  image: 'https://images.pexels.com/photos/16274035/pexels-photo-16274035.jpeg?_gl=1*14h136r*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4Mjk0MjA0JGo0NSRsMCRoMA..', // beverage delivery trucks
}

    ];

  const faqs = [
    {
  question: 'How do your warehousing facilities ensure product safety and quality?',
  answer: 'Our FMCG and beverage warehouses feature temperature controlled zones, humidity management, and real time monitoring. Standardized handling procedures and quality inspections ensure products remain fresh, intact, and compliant throughout storage and handling.',
},
{
  question: 'Can you manage high volume storage and distribution during peak seasons?',
  answer: 'Yes. Our scalable infrastructure and trained operations teams are built to handle volume spikes during festive seasons, promotions, and product launches while maintaining order accuracy and on time dispatch.',
},
{
  question: 'What types of FMCG and beverage products do you handle?',
  answer: 'We manage a wide range of FMCG and beverage products, including packaged beverages, snacks, edible oils, personal care items, and other fast-moving consumer goods. Our facilities support ambient, chilled, and specialized storage requirements.',
},
{
  question: 'How do you ensure regulatory compliance and operational standards?',
  answer: 'We operate in line with FMCG and beverage industry regulations, including HACCP guidelines and documented SOPs. Regular audits, trained personnel, and hygiene protocols ensure consistent safety and operational excellence.',
},
{
  question: 'What inventory visibility and tracking solutions do you provide?',
  answer: 'Our Warehouse Management System (WMS) offers real time inventory visibility, batch and expiry tracking, automated reporting, and seamless integration with your distribution network for better supply chain control.',
},
{
  question: 'Do you offer value added services for FMCG and beverage brands?',
  answer: 'Yes. Our value added services include labeling, repackaging, kitting, order consolidation, and customized dispatch preparation to ensure products are market ready and delivered efficiently.',
},

   ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="fmcgb" className="bg-gradient-to-br from-[#0A1E3A] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#00C2A0] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                FMCG & Beverage Solutions
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                  Raising the benchmark for FMCG and beverage. Our flexible, scalable solutions support manufacturers, distributors, and retailers with safe storage, efficient inventory control, and smooth nationwide distribution.
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
              Why Choose Our Service?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
             Specialized warehousing solutions for FMCG and beverage brands, built to ensure safety, compliance, and seamless supply chain performance.
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
              FMCG & Beverages Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE FMCG & BEVERAGES SERVICES
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
