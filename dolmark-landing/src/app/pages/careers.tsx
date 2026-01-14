
import { useState } from 'react';
import { ContactModal } from "./../components/Contact";
import { TEXT } from '../../constants';

export function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="careers" className="bg-gradient-to-br from-[#0F2C59] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Careers at Dolmark Exporters
              </p>

<h1
                className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                Build Your Future in Global Logistics
              </h1>

<div
                className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                <p>
                  At Dolmark Exporters, we believe logistics is powered by people, not just processes.
                  We're building a team of passionate problem solvers who thrive in a fast moving,
                  global environment and take pride in keeping supply chains running smoothly.
                </p>
                <p>
                  Whether you're starting your career or bringing years of experience, you'll find
                  opportunities here to grow, innovate, and make a real impact. Join us and be part
                  of a workplace that values learning, collaboration, and long-term growth.
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
              Apply and Grow with Us
            </h2>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[#14B8A6] transition-colors inline-flex items-center gap-2">
                {TEXT.industriesWeServe.button}<span>→</span>
              </button>
          </div>
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
      </section>
    </div>
  );
}