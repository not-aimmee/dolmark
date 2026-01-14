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
    'We provide comprehensive management of your entire import and export journey. From initial order processing through final delivery, we handle every detail—documentation preparation, carrier coordination, customs pre-clearance, and real-time status updates. Our experienced team ensures smooth cargo flow across borders, minimizing delays and optimizing costs while maintaining complete transparency throughout the process.',
  image:
    'https://images.pexels.com/photos/8845444/pexels-photo-8845444.jpeg',
},
{
  title: 'Customs Clearance & Trade Documentation',
  description:
    'Navigate complex customs regulations with confidence. Our trade specialists manage all documentation requirements, including commercial invoices, packing lists, certificates of origin, and harmonized tariff codes. We handle duty calculations, tariff classifications, and communicate directly with customs authorities to expedite clearance. With deep expertise in trade laws across multiple countries, we ensure accurate filings and reduce the risk of delays or penalties.',
  image:
    'https://images.pexels.com/photos/5088027/pexels-photo-5088027.jpeg',
},
{
  title: 'Cargo Preparation & Export Readiness',
  description:
    'Ensure your shipments meet international standards from the moment they leave your facility. We provide expert guidance on proper packaging, secure labeling, compliance with country-specific requirements, and quality inspections. Our team verifies hazmat compliance, weight distribution, and documentation accuracy. This proactive approach prevents costly rejections at borders and ensures your goods arrive in perfect condition, ready for market.',
  image:
    'https://images.pexels.com/photos/7974354/pexels-photo-7974354.jpeg',
},
{
  title: 'Shipment Tracking & Trade Visibility',
  description:
    'Gain complete end-to-end visibility into every shipment moving through our network. Our advanced tracking system provides real-time status updates, milestone notifications, and document visibility throughout the entire transit journey. Monitor customs clearance progress, port movements, and last-mile delivery with precision. Access detailed shipment reports anytime, anywhere—keeping you and your customers informed every step of the way.',
  image:
    'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg',
},
{
  title: 'Regulatory Compliance & Risk Control',
  description:
    'Stay ahead of evolving trade regulations and minimize business risk. Our compliance team monitors changes in trade laws, sanctions lists, anti-dumping rules, and country-specific regulations. We conduct risk assessments for every shipment, provide guidance on restricted items, and ensure adherence to import/export restrictions. Our proactive approach protects your business from regulatory penalties and supply chain disruptions.',
  image:
    'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
},
{
  title: 'Scalable Trade Operations',
  description:
    'Grow your import and export operations without operational constraints. Whether youre experiencing seasonal peaks, entering new markets, or rapidly scaling volume, our flexible infrastructure adapts to your needs. We maintain capacity for sudden volume increases, manage multiple shipment types simultaneously, and optimize processes to reduce per-unit costs. Scale confidently knowing our systems and team can handle your growth.',
  image:
    'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg',
},
{
  title: 'Integrated Global Distribution',
  description:
    'Seamlessly connect your import and export operations with our broader logistics network. Once goods clear customs, we coordinate with freight partners, manage port transfers, arrange inland transportation, and handle last-mile delivery. This integrated approach eliminates handoff delays, reduces coordination costs, and provides a single point of contact for your entire international supply chain—from origin to final destination.',
  image:
    'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg',
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