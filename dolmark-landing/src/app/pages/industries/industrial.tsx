import { useState } from 'react';
import { ContactModal } from '../../components/Contact';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

export function Industrials() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const solutions = [
{
  title: 'E-commerce Fulfillment Warehousing',
  description:
    'Scalable, organized warehousing designed for high-SKU e-commerce operations, supporting fast picking, packing, and dispatch.',
  image:'https://images.unsplash.com/photo-1724065448444-94e5d280861e?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
},
{
  title: 'Last Mile & Line Haul Distribution',
  description:
    'Reliable line haul and last mile delivery solutions ensuring timely order movement from fulfillment centers to customers.',
  image:'https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
},
{
  title: 'High Volume Order Fulfillment',
  description:
    'Accurate, fast order processing built to handle daily and peak season e-commerce volumes with minimal errors.',
  image:'https://images.pexels.com/photos/6169026/pexels-photo-6169026.jpeg?_gl=1*x2xagi*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjU0NDAkajM5JGwwJGgw',
},
{
  title: 'Quality Control & Returns Handling',
  description:
    'Systematic quality checks and streamlined reverse logistics to manage returns, exchanges, and re stocking efficiently.',
  image:'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
},
{
  title: 'Order Tracking & Visibility',
  description:
    'End to end order tracking and performance monitoring to improve delivery reliability and customer satisfaction.',
  image:'https://images.unsplash.com/photo-1625239622428-ba0ae330a1f9?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
},
 ];

  const faqs = [
{
  question: 'How do you support fast and frequent e-commerce deliveries?',
  answer:
    'We operate scalable fulfillment and last mile delivery solutions designed for high order volumes while ensuring speed, accuracy, and reliability.',
},
{
  question: 'Can you handle peak sales and high volume e-commerce demand?',
  answer:
    'Yes. Our flexible infrastructure and trained teams efficiently manage sales spikes, festive seasons, and promotional surges without service disruption.',
},
{
  question: 'What types of products do you handle for e-commerce?',
  answer:
    'We handle a wide range of products including fashion, electronics, consumer goods, FMCG items, and other non hazardous retail products.',
},
{
  question: 'How do you ensure order accuracy and customer satisfaction?',
  answer:
    'We use barcode enabled picking, quality checks, and real time tracking to ensure accurate order fulfillment and timely deliveries.',
},
{
  question: 'Do you offer inventory visibility and order tracking?',
  answer:
    'Yes. Our systems provide real time inventory visibility, order status updates, and reporting to support efficient e-commerce operations.',
},
{
  question: 'Do you provide value added services for e-commerce?',
  answer:
    'Yes. We offer services such as labeling, kitting, returns processing, order consolidation, and packaging customization.',
},
];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="ihome" className="relative h-[600px] flex items-center justify-center overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6169669/pexels-photo-6169669.jpeg?_gl=1*r937p2*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjQ5MzMkajE2JGwwJGgw"
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
            E-Commerce & Industrial Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Purpose built logistics for e-commerce and industrial sectors, delivering speed, reliability, and operational precision.
          </p>
           <button
                onClick={() => setIsModalOpen(true)}
                className=" text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
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
              E-commerce & Industrial Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              End to end logistics solutions built to support high volume e-commerce and industrial fulfillment.
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

