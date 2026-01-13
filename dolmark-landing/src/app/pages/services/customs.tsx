import {  FileText, ShieldCheck, Eye, Repeat } from "lucide-react";
import { useState } from 'react';
import { ContactModal } from "../../components/Contact";
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
  icon: FileText, // Represents documentation and customs paperwork
  title: "Efficient Documentation",
  description: "We handle all import/export paperwork and documentation accurately, ensuring smooth customs clearance for your shipments.",
},
{
  icon: ShieldCheck, // Emphasizes compliance and security
  title: "Regulatory Compliance",
  description: "Strict adherence to local and international customs regulations to avoid delays, fines, or compliance issues.",
},
{
  icon: Eye, // Represents monitoring and visibility
  title: "Real-Time Shipment Tracking",
  description: "Stay informed with real-time updates on customs clearance status and shipment progress for complete transparency.",
},
{
  icon: Repeat, // Represents adaptability and scalability
  title: "Scalable Clearance Solutions",
  description: "Our customs clearance processes adapt to high-volume shipments, complex import/export requirements, and business growth seamlessly.",
},

];

export function Customs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
  title: 'Expert Customs Clearance',
  description: 'Comprehensive customs services to ensure your imports and exports move seamlessly across borders. Our team manages documentation, regulatory checks, and approvals for hassle-free clearance.',
  image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg', // customs paperwork/inspection
},
{
  title: 'Regulatory Compliance Management',
  description: 'Strict adherence to international and local trade regulations, ensuring all shipments comply with customs laws and industry standards.',
  image: 'https://images.pexels.com/photos/5699472/pexels-photo-5699472.jpeg', // compliance check or documents
},
{
  title: 'Value Added Clearance Services',
  description: 'Additional services like duty calculation, classification, invoice verification, and documentation review to streamline import/export processes.',
  image: 'https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg', // paperwork / inspection
},
{
  title: 'Advanced Tracking & Visibility',
  description: 'Real time updates and tracking of customs status to give full transparency and control over your shipments at every stage.',
  image: 'https://images.pexels.com/photos/5900229/pexels-photo-5900229.jpeg', // tracking dashboard
},
{
  title: 'Secure Handling & Risk Management',
  description: 'We implement strict protocols to safeguard shipments and reduce customs-related risks, ensuring your goods remain secure throughout the process.',
  image: 'https://images.pexels.com/photos/5128507/pexels-photo-5128507.jpeg', // security and inspection
},
{
  title: 'Flexible & Scalable Solutions',
  description: 'Our customs clearance processes scale to handle large shipments, complex documentation, and seasonal trade fluctuations efficiently.',
  image: 'https://images.pexels.com/photos/5700746/pexels-photo-5700746.jpeg', // logistics operations
},
{
  title: 'Integrated Trade Support',
  description: 'Seamless coordination with freight forwarders, carriers, and customs authorities ensures smooth inbound and outbound flow of goods.',
  image: 'https://images.pexels.com/photos/536019/pexels-photo-536019.jpeg', // delivery trucks / logistics
}

  ];

  const faqs = [
    {
  question: 'How do you ensure smooth customs clearance and compliance?',
  answer: 'Our experts manage all customs documentation, regulatory checks, and approvals efficiently, ensuring shipments clear customs quickly while remaining fully compliant with local and international laws.',
},
{
  question: 'Can you handle high-volume shipments and complex imports/exports?',
  answer: 'Yes. Our scalable customs clearance processes and experienced team can manage large shipments, seasonal peaks, and complex regulatory requirements without delays or errors.',
},
{
  question: 'What types of goods can you clear through customs?',
  answer: 'We handle a wide range of goods including FMCG, beverages, packaged food products, electronics, and other consumer goods. Our team ensures compliance for both standard and specialized shipments.',
},
{
  question: 'How do you maintain compliance and operational standards?',
  answer: 'We follow international trade regulations, local customs laws, and industry best practices. Regular audits, trained personnel, and documented procedures ensure consistent quality and regulatory adherence.',
},
{
  question: 'Do you provide real-time tracking and visibility for shipments?',
  answer: 'Yes. Our advanced tracking systems allow clients to monitor the status of their shipments throughout the customs clearance process, offering full transparency and control.',
},
{
  question: 'Do you offer additional services to simplify customs processing?',
  answer: 'Absolutely. We provide value-added services such as tariff classification, invoice verification, documentation review, duty calculation, and customs advisory to ensure smooth and efficient clearance.',
},
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="customs" className="bg-gradient-to-br from-[#0F2C59] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Custom Clearance and Compliance
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                 Setting new standards in customs clearance and trade compliance. We provide scalable solutions that simplify regulatory processes, minimize delays, and ensure your shipments move seamlessly across borders.
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
              Why Choose Our Sevice?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Comprehensive customs and trade compliance solutions that optimize your supply chain and keep your goods moving efficiently across borders.
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
              Custom Clearance Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE CUSTOMS SERVICES
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
                className=" bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
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