import { useState } from 'react';
import { ContactModal } from '../../components/Contact';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';

export function Horeca() {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const solutions = [
{
  title: 'HORECA Cold Storage Facilities',
  description:
    'Food grade, temperature controlled storage tailored for hotels, restaurants, and caterers, supporting fresh, frozen, and ready to use ingredients.',
  image:'https://images.pexels.com/photos/8352345/pexels-photo-8352345.jpeg?_gl=1*1l511i*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjQyMzUkajM5JGwwJGgw',
},
{
  title: 'Refrigerated HoReCa Distribution',
  description:
    'Reliable, time sensitive refrigerated deliveries ensuring consistent supply of ingredients to kitchens, hotels, and catering operations.',
  image:'https://images.pexels.com/photos/35501716/pexels-photo-35501716.jpeg?_gl=1*f2hf31*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjQxNzUkajEyJGwwJGgw',
},
{
  title: 'Kitchen Ready Order Fulfillment',
  description:
    'Fast, accurate picking and dispatch designed for frequent, small batch HoReCa orders with minimal handling and temperature exposure.',
  image:'https://images.pexels.com/photos/6169192/pexels-photo-6169192.jpeg?_gl=1*g3b4bd*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjQwOTEkajIwJGwwJGgw',
},
{
  title: 'Expiry & Batch Inventory Management',
  description:
    'FIFO and FEFO driven inventory control to support high turnover HoReCa operations and reduce wastage of short shelf life products.',
  image:'https://images.pexels.com/photos/6169034/pexels-photo-6169034.jpeg?_gl=1*1xx6tgj*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjM5ODgkajE0JGwwJGgw',
},
{
  title: 'Food Safety & Kitchen Compliance',
  description:
    'Strict hygiene standards, temperature records, and compliance processes aligned with HoReCa food safety and regulatory requirements.',
  image:'https://images.pexels.com/photos/7821343/pexels-photo-7821343.jpeg?_gl=1*10kshfz*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjM5MDMkajIzJGwwJGgw',
},
{
  title: 'Real Time Visibility & Monitoring',
  description:
    'Continuous temperature monitoring and order traceability enabling proactive issue resolution and reliable kitchen supply continuity.',
  image:'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?_gl=1*16l5syy*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNjM4MTIkajU0JGwwJGgw',
},

 ];

  const faqs = [
{
  question: 'How do you support daily and frequent HoReCa deliveries?',
  answer:
    'We operate scheduled and on demand refrigerated deliveries designed for high frequency HoReCa replenishment while maintaining strict temperature control.',
},
{
  question: 'Can you handle high volume and peak HoReCa demand?',
  answer:
    'Yes. Our scalable infrastructure and trained teams efficiently manage peak periods, events, and seasonal surges without compromising service quality.',
},
{
  question: 'What HoReCa products do you handle?',
  answer:
    'We handle fresh produce, dairy, frozen foods, meats, beverages, bakery items, and other temperature sensitive ingredients used in HoReCa kitchens.',
},
{
  question: 'How do you ensure food safety for hotels and restaurants?',
  answer:
    'We follow food safety protocols with hygiene controls, temperature documentation, trained staff, and regular audits to meet HoReCa standards.',
},
{
  question: 'Do you offer inventory and expiry management for HoReCa?',
  answer:
    'Yes. We provide batch level, expiry based inventory tracking using FIFO and FEFO methods to reduce waste and improve kitchen efficiency.',
},
{
  question: 'Do you provide HoReCa specific value added services?',
  answer:
    'Yes. We offer kitchen ready services such as order consolidation, repacking, labeling, and dispatch preparation under controlled conditions.',
},
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="horecahome" className="relative h-[600px] flex items-center justify-center overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1687697860857-7b148d12b93b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="horeca logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
          <p className="text-xl tracking-[0.2em] mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h1 className="text-5xl md:text-6xl mb-6 font-semibold">
            HoReCa Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Tailored logistics for Hotels, Restaurants, and Catering services ensuring timely delivery and quality preservation.
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
              Our Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              Comprehensive logistics services designed specifically for the HoReCa industry.
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

