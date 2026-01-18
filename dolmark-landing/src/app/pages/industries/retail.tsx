import { useState } from 'react';
import { ContactModal } from '../../components/Contact';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

export function Retail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const solutions = [
{
  title: 'Retail Warehousing Solutions',
  description:
    'Organized, scalable warehousing designed to support retail inventory storage, store replenishment, and distribution operations.',
  image:'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?_gl=1*xfds0v*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjYzMzMkajQkbDAkaDA.',
},
{
  title: 'Store & Distribution Network Transport',
  description:
    'Reliable primary and secondary transportation ensuring timely movement of goods between warehouses, distribution centers, and retail outlets.',
  image:'https://images.pexels.com/photos/1366594/pexels-photo-1366594.jpeg?_gl=1*sc2fst*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjYyNzgkajU5JGwwJGgw',
},
{
  title: 'Retail Order Processing & Dispatch',
  description:
    'Efficient picking, packing, and dispatch operations designed for bulk retail orders and frequent store replenishment.',
  image:'https://images.pexels.com/photos/35084786/pexels-photo-35084786.jpeg?_gl=1*myo3dx*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjY1NDIkajQ4JGwwJGgw',
},
{
  title: 'SKU & Stock-Level Inventory Management',
  description:
    'Accurate SKU level inventory tracking to support stock availability, replenishment planning, and demand forecasting.',
  image:'https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?_gl=1*1990ftl*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgyOTI3MjAkbzExJGcxJHQxNzY4MjkyODk5JGo1OSRsMCRoMA..',
},
{
  title: 'Quality Checks & Reverse Logistics',
  description:
    'Standardized quality inspections and reverse logistics processes to manage returns, damages, and restocking efficiently.',
  image:'https://images.pexels.com/photos/11835351/pexels-photo-11835351.jpeg?_gl=1*1mg1oq3*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjY2MjgkajQyJGwwJGgw',
},
{
  title: 'Inventory & Shipment Visibility',
  description:
    'End-to-end visibility across inventory and shipments to improve control, reporting, and retail supply chain performance.',
  image:'https://images.pexels.com/photos/28846860/pexels-photo-28846860.jpeg?_gl=1*12ela7r*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTcyMzY4JGo1JGwwJGgw',
}
];
const faqs = [
{
  question: 'How do you support retail store replenishment?',
  answer:
    'We manage structured warehousing and transportation workflows to ensure timely and accurate replenishment of retail stores.',
},
{
  question: 'Can you handle peak retail demand and seasonal surges?',
  answer:
    'Yes. Our scalable infrastructure and experienced teams efficiently manage festive seasons, promotions, and demand fluctuations.',
},
{
  question: 'What types of retail products do you handle?',
  answer:
    'We handle a wide range of retail products including FMCG, apparel, consumer goods, electronics, and packaged items.',
},
{
  question: 'How do you ensure inventory accuracy across warehouses?',
  answer:
    'We use system driven inventory controls, barcode scanning, and regular audits to maintain high inventory accuracy.',
},
{
  question: 'Do you provide inventory visibility and reporting?',
  answer:
    'Yes. Our systems offer real time inventory visibility, stock movement tracking, and performance reporting.',
},
{
  question: 'Do you offer value added services for retail logistics?',
  answer:
    'Yes. We provide labeling, kitting, repacking, order consolidation, and dispatch preparation services.',
},
];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="rhome" className="relative h-[600px] flex items-center justify-center overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5498225/pexels-photo-5498225.jpeg?_gl=1*1n7a9wd*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgzMzA5ODQkbzEzJGcxJHQxNzY4MzMyMTA3JGoxMiRsMCRoMA.."
            alt="industrials logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
          <p className="text-xl tracking-[0.2em] mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h1 className="text-5xl md:text-6xl mb-6 font-semibold">
            Retail & Wholesale Logistics
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Purpose built logistics for retail and wholesale sectors, delivering efficiency, reliability, and operational precision.
          </p>
           <button
                          onClick={() => setIsModalOpen(true)}
                          className=" text-white px-8 py-3 rounded-md hover:bg-[#00A86B] transition-colors inline-flex items-center gap-2">
                          {TEXT.industriesWeServe.button}<span>→</span>
                        </button>
                        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Retail & Wholesale Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              Integrated logistics solutions designed for large scale retail storage, replenishment, and distribution
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

