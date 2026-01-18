import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { TEXT } from '../../../constants';
import { ContactModal } from '../../components/Contact';


export function Coldchain() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const solutions = [
    {
  title: 'Temperature Controlled Warehousing',
  description: 'Purpose built cold storage facilities designed to maintain precise temperature ranges for perishable and sensitive goods, ensuring product integrity from storage to dispatch.',
  image:'https://images.pexels.com/photos/15360457/pexels-photo-15360457.jpeg?_gl=1*1ynr7f*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTcyNzMyJGoyMSRsMCRoMA..',
    },
{
  title: 'Cold Chain Distribution',
  description: 'End to end refrigerated transportation and distribution services that maintain uninterrupted cold chain conditions throughout transit and delivery.',
  image:'https://plus.unsplash.com/premium_photo-1764099530478-fe7eca999568?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
},
{
  title: 'Perishable Handling & Fulfillment',
  description: 'Specialized handling, picking, and dispatch processes designed for perishable goods, ensuring minimal exposure and maximum freshness.',
  image: 'https://images.pexels.com/photos/20121161/pexels-photo-20121161.jpeg?_gl=1*1ohajdb*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTczMDQxJGozMiRsMCRoMA..',
},
{
  title: 'Cold Chain Inventory Management',
  description: 'Real time inventory tracking with batch, expiry, and temperature visibility to reduce spoilage, improve accuracy, and maintain compliance.',
  image: 'https://images.pexels.com/photos/4090524/pexels-photo-4090524.jpeg?_gl=1*1qkxm2c*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTczMTk0JGo0NSRsMCRoMA..',
},
{
  title: 'Quality Control & Regulatory Compliance',
  description: 'Strict quality checks and compliance with cold chain regulations, ensuring products meet safety, hygiene, and temperature standards at every stage.',
  image: 'https://images.pexels.com/photos/8696371/pexels-photo-8696371.jpeg?_gl=1*1otsi2*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTczMjQ4JGo1NSRsMCRoMA..',
},
{
  title: 'Cold Chain Visibility & Monitoring',
  description: 'Continuous temperature monitoring and tracking systems providing end to end visibility and actionable insights across the cold chain network.',
  image:'https://images.pexels.com/photos/12069460/pexels-photo-12069460.jpeg?_gl=1*e5556l*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3Njg1Njc4OTQkbzIxJGcxJHQxNzY4NTcyOTQ0JGozNCRsMCRoMA..',
}
 ];

  const faqs = [
   {
  question: 'How do you maintain temperature integrity throughout the cold chain?',
  answer: 'We use temperature controlled storage, refrigerated transport, and continuous monitoring systems to maintain consistent temperature ranges from storage to final delivery, ensuring product integrity at every stage.',
},
{
  question: 'Can you manage high volume cold chain operations during peak demand?',
  answer: 'Yes. Our scalable cold storage infrastructure and trained teams are equipped to handle volume spikes while maintaining strict temperature control and operational accuracy during peak seasons.',
},
{
  question: 'What types of cold chain products do you handle?',
  answer: 'We handle a wide range of temperature sensitive goods including beverages, food products, dairy, frozen items, edible oils, and other perishable commodities requiring controlled environments.',
},
{
  question: 'How do you ensure compliance with cold chain safety and regulatory standards?',
  answer: 'We follow established cold chain protocols and comply with applicable food safety, hygiene, and temperature regulations. Regular audits, trained personnel, and documented procedures ensure consistent compliance.',
},
{
  question: 'What systems do you use for cold chain inventory and temperature tracking?',
  answer: 'Our systems provide real time inventory visibility along with batch, expiry, and temperature tracking, enabling proactive monitoring and reducing the risk of spoilage or non compliance.',
},
{
  question: 'Do you offer value-added services within cold chain operations?',
  answer: 'Yes. We provide cold chain compatible value added services such as labeling, repacking, order consolidation, and dispatch preparation under controlled conditions.',
},
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="cchome" className="relative h-[600px] flex items-center justify-center overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/25819972/pexels-photo-25819972.jpeg?_gl=1*12tql1d*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgwNTkzNzkkbzkkZzEkdDE3NjgwNTk3OTEkajU5JGwwJGgw"
            alt="coldchain cargo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
          <p className="text-xl tracking-[0.2em] mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h1 className="text-5xl md:text-6xl mb-6 font-semibold">
            Cold Chain Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          Ensuring temperature integrity across storage, handling, and distribution for sensitive and perishable goods.
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
              Cold Chain Goods Solutions
            </h2>
            <p 
              className="text-2xl tracking-wide"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: '#0F4C5C'
              }}
            >
              Advanced Temperature-Controlled Supply Chain Solutions
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
