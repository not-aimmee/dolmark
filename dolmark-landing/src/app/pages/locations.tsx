
import { useState } from "react";
import { ContactModal } from "../components/Contact";

const locations = [
  {
    country: "Singapore",
    description:"Our Singapore office serves as the strategic nerve center for Asia-Pacific operations, enabling seamless regional coordination, innovation, and cross border logistics excellence.",
    image:'../../images/l1.webp',
  },
  {
    country: "Malaysia",
    description:"Positioned in one of Southeast Asia’s fastest growing economies, our Malaysia presence strengthens regional connectivity and operational efficiency.",
    image:'../../images/l2.webp',
  },
  {
    country: "Indonesia",
    description:"Supporting Indonesia’s expansive market with localized expertise, scalable logistics solutions, and strong last mile connectivity.",
    image:'../../images/l3.webp',
  },
  {
    country: "United Arab Emirates",
    description: "Our Dubai office acts as the gateway to the Middle East, connecting global trade routes with speed, reliability, and precision.",
    image:'../../images/l4.webp',
  },
  {
    country: "Saudi Arabia",
    description:"Aligned with Vision 2030, our Saudi operations support national growth through modern logistics infrastructure and intelligent supply chain solutions.",
    image:'../../images/l5.webp',
  },
  {
    country: "India",
    description:"Serving one of the world’s most diverse markets, our India office delivers agile, technology driven logistics tailored for scale and speed.",
    image:'../../images/l6.webp',
  }
];

export default function Locations() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="locations" className=" bg-white ">
      {/* Header */}
      <div className="relative pt-32 md:pt-40 lg:pt-44 pb-24 text-center px-6">
          {/*Background image*/}
      <div className="absolute inset-0 z-0">
    <img
      src="../../images/l0.webp"
      alt="asean logistics"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/65"></div>
  </div>
      <div className="relative z-10 max-w-6xl mx-auto pt-32 md:pt-40 lg:pt-44 pb-24  text-white">
       
        <h1 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-10">
          Our Global Presence
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
          Strategically located offices across Asia and the Middle East allow us
          to deliver localized expertise, faster turnaround times, and globally
          aligned logistics solutions.
        </p>
      </div>
      </div>
      {/*separator*/}
       <div className="h-30 bg-white"></div>
      {/* Locations */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-10">
        {locations.map((location, index) => (
          <div
            key={location.country}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative verflow-hidden rounded-3xl">
              <img
                src={location.image}
                alt={location.country}
                className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-poppins text-4xl font-bold text-[#0A1E3A] mb-4">
                {location.country}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {location.description}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-[3px] bg-[#00B3A4]" />
                <div className="w-2 h-2 rounded-full bg-[#00C2A0]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#0A1E3A] to-[#0F4C5C] py-24 text-center px-6">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
          Let’s Build Global Connections
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-[#00C2A0] mb-10">
          Wherever your business operates, our global teams are ready to support
          your supply chain with precision, reliability, and scale.
        </p>
<button
                onClick={() => setIsModalOpen(true)}
                className=" text-white px-8 py-3 rounded-md hover:bg-[#00A86B] transition-colors inline-flex items-center gap-2">
                Contact Our Team<span>→</span>
              </button>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>

  );
}
