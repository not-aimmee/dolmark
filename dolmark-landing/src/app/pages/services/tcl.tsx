import { ThermometerSnowflake,ShieldCheck, Activity, Truck } from "lucide-react";
import { useState } from 'react';
import { ContactModal } from "../../components/Contact";
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

const benefits = [
  {
  icon: ThermometerSnowflake,
  title: "Multi-Temperature Storage",
  description:
    "Chilled and frozen storage zones designed to maintain precise temperatures across all product categories.",
},
{
  icon: ShieldCheck,
  title: "Cold Chain Compliance",
  description:
    "Fully compliant facilities following food safety, HACCP, and cold chain regulatory standards.",
},
{
  icon: Activity,
  title: "24/7 Temperature Monitoring",
  description:
    "Continuous temperature tracking with real-time alerts to ensure product integrity at all times.",
},
{
  icon: Truck,
  title: "Scalable Cold Logistics",
  description:
    "Flexible cold storage and distribution capacity that scales with seasonal and volume demands.",
},

];

export function Tcl() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

   const solutions = [
    {
  title: 'Dedicated Cold Storage Facilities',
  description:
    'Purpose built refrigerated and frozen warehouses with controlled zones to maintain product integrity end to end.',
  image:
    'https://images.pexels.com/photos/12171793/pexels-photo-12171793.jpeg',
},
{
  title: 'Temperature-Controlled Inventory Management',
  description:
    'Optimized cold storage layouts that improve airflow, reduce dwell time, and preserve product freshness.',
  image:
    'https://images.pexels.com/photos/19895915/pexels-photo-19895915.jpeg',
},
{
  title: 'Value-Added Cold Chain Services',
  description:
    'Cold safe labeling, packaging, kitting, and handling services performed without temperature deviation.',
  image:
    'https://images.pexels.com/photos/5775099/pexels-photo-5775099.jpeg',
},
{
  title: 'Cold Chain Warehouse Management Systems',
  description:
    'Real time temperature visibility, batch tracking, and traceability for chilled and frozen inventories.',
  image:
    'https://images.pexels.com/photos/6595779/pexels-photo-6595779.jpeg',
},
{
  title: 'Cold Chain Compliance & Safety',
  description:
    'Strict adherence to food safety, HACCP, and cold chain standards with secure monitored facilities.',
  image:
    'https://images.pexels.com/photos/4481528/pexels-photo-4481528.jpeg',
},
{
  title: 'Scalable Cold Storage Operations',
  description:
    'Flexible refrigerated capacity designed to handle seasonal peaks and fluctuating volume demands.',
  image:
    'https://images.pexels.com/photos/15340003/pexels-photo-15340003.jpeg',
},
{
  title: 'Integrated Refrigerated Distribution',
  description:
    'Seamless coordination between cold storage and temperature-controlled transportation networks.',
  image:
    'https://images.pexels.com/photos/6595779/pexels-photo-6595779.jpeg',
},

  ];

  const faqs = [
    {
  question: 'How do your temperature-controlled facilities ensure product safety and quality?',
  answer:
    'Our cold storage facilities use controlled temperature zones, continuous monitoring, and strict handling protocols to preserve product quality and prevent temperature deviations.',
},
{
  question: 'Can you handle peak volumes in temperature-controlled storage and distribution?',
  answer:
    'Yes. Our scalable cold storage infrastructure and flexible operations support seasonal peaks and high volume demand without compromising temperature integrity.',
},
{
  question: 'What products do you handle in your cold chain operations?',
  answer:
    'We manage chilled and frozen products including food, beverages, dairy, FMCG, and other temperature sensitive goods.',
},
{
  question: 'How do you maintain cold chain compliance and safety standards?',
  answer:
    'We follow HACCP, food safety, and cold chain compliance standards, supported by trained staff, regular audits, and documented processes.',
},
{
  question: 'What visibility and tracking do you provide for temperature sensitive inventory?',
  answer:
    'Our WMS offers real time inventory and temperature visibility, batch traceability, alerts, and automated reporting across the cold chain.',
},
{
  question: 'Do you offer value added services within temperature controlled warehouses?',
  answer:
    'Yes. We provide cold safe labeling, repacking, kitting, consolidation, and dispatch preparation without breaking the cold chain.',
},
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="tcl" className="bg-gradient-to-br from-[#0F2C59] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Temperature Controlled Logistics
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                  Redefining temperature controlled warehousing with reliable, scalable solutions built to preserve quality and optimize cold chain operations.
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
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Reliable cold chain warehousing solutions that optimize temperature integrity and drive business growth.
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
              Temperature Controlled Logistics Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              SCALABLE COLD CHAIN SERVICES
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
                className=" text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
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