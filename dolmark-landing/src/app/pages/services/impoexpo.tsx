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
    title: "Real Time Visibility",
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

export function Impoexpo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
     {
  title: 'End to End Import & Export Handling',
  description:
    'Complete management of import and export movements, covering documentation, coordination, and smooth cargo flow across borders.',
  image:
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
},
{
  title: 'Customs Clearance & Trade Documentation',
  description:
    'Accurate handling of customs paperwork, duties, and regulations to ensure fast clearance and reduced delays.',
  image:
    'https://images.pexels.com/photos/7843974/pexels-photo-7843974.jpeg',
},
{
  title: 'Cargo Preparation & Export Readiness',
  description:
    'Packing, labeling, and inspection support to prepare shipments for safe and compliant international transport.',
  image:
    'https://images.pexels.com/photos/5775099/pexels-photo-5775099.jpeg',
},
{
  title: 'Shipment Tracking & Trade Visibility',
  description:
    'Clear visibility across every shipment with status updates, document tracking, and milestone monitoring.',
  image:
    'https://images.pexels.com/photos/6595779/pexels-photo-6595779.jpeg',
},
{
  title: 'Regulatory Compliance & Risk Control',
  description:
    'Guidance on trade laws, safety standards, and country-specific regulations to protect your shipments and business.',
  image:
    'https://images.pexels.com/photos/4481528/pexels-photo-4481528.jpeg',
},
{
  title: 'Scalable Trade Operations',
  description:
    'Flexible import and export support that grows with volume changes, seasonal demand, and market expansion.',
  image:
    'https://images.pexels.com/photos/15340003/pexels-photo-15340003.jpeg',
},
{
  title: 'Integrated Global Distribution',
  description:
    'Coordinated import and export movement connected with freight, ports, and last mile delivery networks.',
  image:
    'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
}
  ];

  const faqs = [
   {
  question: 'How do you ensure safe and compliant import and export shipments?',
  answer:
    'We follow strict trade procedures, accurate documentation, and careful cargo handling to ensure shipments move safely and meet all regulations.',
},
{
  question: 'Can you handle high shipment volumes during peak trade periods?',
  answer:
    'Yes. Our import and export operations are built to manage high volumes during peak seasons without delays or disruptions.',
},
{
  question: 'What types of goods do you support for import and export?',
  answer:
    'We handle a wide range of goods including food products, beverages, FMCG items, and other commercial cargo.',
},
{
  question: 'How do you manage customs and regulatory compliance?',
  answer:
    'We stay updated with trade laws and customs rules, ensuring correct filings, duty handling, and smooth clearance.',
},
{
  question: 'What shipment visibility and tracking do you provide?',
  answer:
    'We offer clear shipment tracking with status updates, document visibility, and milestone monitoring throughout transit.',
},
{
  question: 'Do you provide additional support beyond import and export handling?',
  answer:
    'Yes. We assist with documentation, packing guidance, coordination with freight partners, and delivery planning.',
},
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="ie" className="bg-gradient-to-br from-[#0F2C59] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Import & Export Services
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                 Reliable import and export services that simplify global trade, manage cross border movement, and help your business grow with confidence.
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
              Why Choose Our Import & Export Services?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Expert import and export services that simplify global trade, manage cross border movement, and help your business grow with confidence.
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
              Import-Export Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE IMPORT & EXPORT SERVICES
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
                className="bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
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