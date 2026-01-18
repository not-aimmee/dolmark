import {  SearchCheck,GitBranch, BarChart3,Lightbulb } from "lucide-react";
import { useState } from 'react';
import { ContactModal } from "../../components/Contact";
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
  icon: SearchCheck,
  title: "Supply Chain Assessment",
  description:
    "In depth analysis of your current supply chain to identify gaps, risks, and improvement opportunities.",
},
{
  icon: GitBranch,
  title: "Process & Network Optimization",
  description:
    "Redesign workflows and distribution networks to improve efficiency, cost control, and service levels.",
},
{
  icon: BarChart3,
  title: "Data-Driven Insights",
  description:
    "Actionable recommendations powered by analytics, KPIs, and performance benchmarking.",
},
{
  icon: Lightbulb,
  title: "Scalable Growth Strategy",
  description:
    "Future ready supply chain strategies aligned with business growth and market expansion.",
},

];

export function Scc() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
  title: 'End to End Supply Chain Assessment',
  description:
    'Comprehensive evaluation of your supply chain to identify inefficiencies, risks, and cost saving opportunities.',
  image:'https://images.pexels.com/photos/12464231/pexels-photo-12464231.jpeg?_gl=1*1wu4nxx*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1NjAzNDIkbzIwJGcxJHQxNzY4NTYwMzY2JGozNiRsMCRoMA..',
},
{
  title: 'Inventory Strategy & Optimization',
  description:
    'Data driven inventory planning to improve stock positioning, reduce carrying costs, and enhance service levels.',
  image:'https://images.pexels.com/photos/7019311/pexels-photo-7019311.jpeg?_gl=1*b0qjxw*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1NjAzNDIkbzIwJGcxJHQxNzY4NTYwNDEyJGo1OSRsMCRoMA..',
},
{
  title: 'Process Design & Value Enhancement',
  description:
    'Optimized workflows, SOPs, and value added strategies to streamline operations and improve supply chain performance.',
  image:'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?_gl=1*oxxsjv*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1NjAzNDIkbzIwJGcxJHQxNzY4NTYwNjQ4JGozMCRsMCRoMA..',
},
{
  title: 'Technology & Systems Advisory',
  description:
    'Expert guidance on WMS, TMS, and digital tools to enable visibility, control, and data driven decisions.',
  image:'https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?_gl=1*1lfe7ag*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1NjAzNDIkbzIwJGcxJHQxNzY4NTYwNzIyJGoyMSRsMCRoMA..',
},
{
  title: 'Compliance, Risk & Governance',
  description:
    'Advisory on regulatory compliance, risk mitigation, and governance frameworks across the supply chain.',
  image:'https://images.pexels.com/photos/6407537/pexels-photo-6407537.jpeg?_gl=1*1jyxwpv*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1NjAzNDIkbzIwJGcxJHQxNzY4NTYxMDQ1JGoyMCRsMCRoMA..',
},
{
  title: 'Scalability & Growth Planning',
  description:
    'Future ready supply chain strategies designed to support expansion, seasonal demand, and market changes.',
  image:'https://images.pexels.com/photos/9822733/pexels-photo-9822733.jpeg?_gl=1*n62xmg*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTY3OTA2JGo0OCRsMCRoMA..',
},
{
  title: 'Integrated Distribution Strategy',
  description:
    'Consultative planning for transportation and distribution networks to ensure seamless end to end flow.',
  image:'https://images.pexels.com/photos/11678431/pexels-photo-11678431.jpeg?_gl=1*kbiql6*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTY3OTg4JGozMiRsMCRoMA..',
},

  ];

  const faqs = [
   {
  question: 'How do your supply chain consulting services improve operational performance?',
  answer:
    'We analyze your end to end supply chain to identify inefficiencies, optimize processes, and recommend data-driven improvements.',
},
{
  question: 'Can you support businesses during high demand and peak periods?',
  answer:
    'Yes. We design scalable supply chain strategies that help businesses plan for seasonal peaks and demand fluctuations.',
},
{
  question: 'Which industries do you support through supply chain consultation?',
  answer:
    'We work with food and beverage, FMCG, retail, and manufacturing businesses with complex supply chain requirements.',
},
{
  question: 'How do you ensure compliance and risk management in supply chain operations?',
  answer:
    'We provide advisory support on regulatory compliance, risk mitigation, and governance frameworks aligned with industry standards.',
},
{
  question: 'What visibility and analytics do you offer through consulting engagements?',
  answer:
    'Our consulting leverages KPIs, dashboards, and analytics to deliver clear visibility and actionable supply chain insights.',
},
{
  question: 'Do you advise on value added and process improvement initiatives?',
  answer:
    'Yes. We recommend process enhancements, value-added opportunities, and operational improvements to drive efficiency.',
},
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="scc" className="bg-gradient-to-br from-[#0A1E3A] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#00C2A0] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Supply Chain Consultation
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                  Expert supply chain consulting delivering optimized networks, improved visibility, and sustainable growth.
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
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Expert supply chain guidance that strengthens your operations and helps your business grow faster.
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
              Supply Chain Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE SUPPLY CHAIN SERVICES
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
