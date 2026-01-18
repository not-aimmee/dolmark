import { useState } from 'react';
import { ContactModal } from '../../components/Contact'; 
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

export function FoodBeverage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const solutions = [
  {
  title: 'Food Grade Cold Storage',
  description:
    'Hygienic, temperature controlled warehouses designed for fresh, frozen, and packaged food products, ensuring safety and quality from intake to dispatch.',
  image:
    'https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg',
},
{
  title: 'Refrigerated Food & Beverage Distribution',
  description:
    'Reliable refrigerated transportation ensuring consistent temperature control for beverages, dairy, frozen foods, and fresh produce during transit.',
  image:
    'https://images.pexels.com/photos/31577047/pexels-photo-31577047.jpeg',
},
{
  title: 'Fresh & Frozen Order Fulfillment',
  description:
    'Carefully managed picking, packing, and dispatch processes designed to preserve freshness, reduce handling time, and prevent temperature deviations.',
  image:
    'https://images.pexels.com/photos/20406112/pexels-photo-20406112.jpeg',
},
{
  title: 'Shelf Life & Batch Inventory Control',
  description:
    'Advanced inventory management with batch tracking, expiry monitoring, and FIFO/FEFO controls to minimize waste and maintain product integrity.',
  image:
    'https://images.pexels.com/photos/7019259/pexels-photo-7019259.jpeg',
},
{
  title: 'Food Safety & Regulatory Compliance',
  description:
    'Strict adherence to food safety standards with documented temperature logs, hygiene protocols, and compliance across storage and distribution.',
  image:
    'https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg',
},
{
  title: 'Temperature Monitoring & Traceability',
  description:
    'Real time temperature monitoring and end to end traceability to ensure complete visibility and proactive issue resolution across the food supply chain.',
  image:
    'https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg',
},

 ];

  const faqs = [
   {
  question: 'How do you ensure temperature consistency for food and beverages?',
  answer:
    'We maintain temperature integrity through food grade cold storage, refrigerated transportation, and continuous monitoring, ensuring freshness and safety from storage to final delivery.',
},
{
  question: 'Can you handle high volume food and beverage demand during peak seasons?',
  answer:
    'Yes. Our scalable cold storage facilities and experienced teams efficiently manage seasonal spikes while maintaining strict temperature control and service accuracy.',
},
{
  question: 'What types of food and beverage products do you handle?',
  answer:
    'We handle a wide range of food and beverage products including fresh produce, dairy, frozen foods, beverages, packaged foods, and other temperature sensitive items.',
},
{
  question: 'How do you ensure food safety and regulatory compliance?',
  answer:
    'We follow food safety protocols and comply with applicable regulations through hygiene controls, temperature documentation, trained staff, and regular quality audits.',
},
{
  question: 'What systems do you use for inventory and temperature tracking?',
  answer:
    'Our technology enables real time inventory visibility with batch, expiry, and temperature tracking to minimize spoilage and ensure full traceability.',
},
{
  question: 'Do you offer value added services for food and beverage logistics?',
  answer:
    'Yes. We offer food safe value added services such as labeling, repacking, kitting, order consolidation, and dispatch preparation under controlled conditions.',
},

  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="fbhome" className="relative h-[600px] flex items-center justify-center overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/14934012/pexels-photo-14934012.jpeg?_gl=1*15x4ltn*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjE0OTckajEkbDAkaDA."
            alt="food beverage logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
          <p className="text-xl tracking-[0.2em] mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h1 className="text-5xl md:text-6xl mb-6 font-semibold">
             Food & Beverages
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          Protecting product integrity across every stage of the supply chain.
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
              Food & Beverage Logistics Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              Ensuring freshness, safety, and quality across storage, handling, and distribution.
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
