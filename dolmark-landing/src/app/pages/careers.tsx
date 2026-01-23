
import { useState } from 'react';

import { ContactModal } from '../components/Contact'; 
import { TEXT } from '../../constants';

export function Careers() {
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="careers" className="bg-gradient-to-br from-[#0A1E3A] to-[#061526] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-start">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/16057288/pexels-photo-16057288.jpeg?_gl=1*ipnkl7*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgzODY5NTIkbzE0JGcxJHQxNzY4Mzg2OTg4JGoyNCRsMCRoMA.."
            alt="coldchain cargo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
           <div className="text-white text-center max-w-3xl mx-auto">
            {/* Left Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
              <p className="text-[#00C2A0] font-inter tracking-wide uppercase text-2xl animate-fade-in">
                Careers at Saudex Global
              </p>

<h1
                className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                Build Your Future in Global Logistics
              </h1>

            </div>

          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#0A1E3A] mb-4">
              Apply and Grow with Us
            </h2>
            <div
                className="space-y-5 text-black font-inter text-xl leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                <p>
                  At Saudex Global, we believe logistics is powered by people, not just processes.
                  We're building a team of passionate problem solvers who thrive in a fast moving,
                  global environment and take pride in keeping supply chains running smoothly.
                </p>
                <p>
                  Whether you're starting your career or bringing years of experience, you'll find
                  opportunities here to grow, innovate, and make a real impact. Join us and be part
                  of a workplace that values learning, collaboration, and long term growth.

                  
                </p>
                <button
                onClick={() =>  setIsModalOpen(true)}
                className="bg-[#0A1E3A] text-white px-8 py-3 rounded-md hover:bg-[#00A86B] transition-colors inline-flex items-center gap-2">
                {TEXT.industriesWeServe.button}<span>→</span>
              </button>
              </div>
            
          </div>
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
      </section>
    </div>
  );
}
