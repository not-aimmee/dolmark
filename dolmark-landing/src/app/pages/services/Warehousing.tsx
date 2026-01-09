import { Package, Truck, BarChart3, Settings, CheckCircle2, Shield, Clock, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Contract Warehousing",
    description:
      "Scalable, reliable, and custom contract warehousing solutions tailored to your specific product needs.",
    gradient: "from-[#00B3A4] via-[#6EE7DB] to-[#00B3A4]",
  },
  {
    icon: Truck,
    title: "E-Commerce",
    description:
      "Accelerate your company's e-commerce growth with our scalable e-commerce services.",
    gradient: "from-[#0F2C59] via-[#00B3A4] to-[#0F2C59]",
  },
  {
    icon: BarChart3,
    title: "Sequencing",
    description:
      "Ship into automotive manufacturers with confidence using our JIT and sequencing solutions.",
    gradient: "from-[#6EE7DB] via-[#00B3A4] to-[#6EE7DB]",
  },
  {
    icon: Settings,
    title: "Value Added Services (VAS)",
    description:
      "Go beyond standard warehousing and logistics with customized packaging, kitting, and labeling solutions.",
    gradient: "from-[#00B3A4] via-[#0F2C59] to-[#00B3A4]",
  },
];

const benefits = [
  {
    icon: CheckCircle2,
    title: "Flexible Space Solutions",
    description:
      "From short-term overflow to long-term dedicated warehousing, we adapt to your changing business needs.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "State-of-the-art security systems and full regulatory compliance to protect your inventory.",
  },
  {
    icon: Clock,
    title: "Real-Time Visibility",
    description:
      "Advanced WMS technology provides complete transparency and control over your inventory 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Operations",
    description:
      "Grow with confidence knowing our infrastructure can scale seamlessly with your business.",
  },
];

export function Warehousing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F2C59] to-[#061526] py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6EE7DB] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00B3A4] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <p className="text-[#6EE7DB] font-inter tracking-wide uppercase text-sm animate-fade-in">
                Our Solutions
              </p>
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Contract Warehousing
              </h1>
              <div className="space-y-4 text-white/90 font-inter leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p>
                  Our contract warehousing solutions are designed for flexibility,
                  speed, and reliability. Whether you need yard management,
                  regional shuttles, or transportation management, we can create
                  a custom solution for you. With{" "}
                  <span className="text-[#6EE7DB] font-semibold">37 strategic locations</span>{" "}
                  across North America, our facilities are built to support complex
                  inventory management, seamless distribution, and just-in-time
                  delivery.
                </p>
                <p>
                  From short-term overflow to long-term dedicated space, we give you
                  the control and visibility you need to grow.
                </p>
              </div>
              <div className="pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <p className="font-poppins font-semibold text-[#6EE7DB]">
                  Trusted by enterprise and growing companies for over 100 years.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1767294274634-613a3545e36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc5MDExNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern warehouse facility"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6EE7DB] rounded-full blur-2xl opacity-50 animate-bounce" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00B3A4] rounded-full blur-2xl opacity-50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#0F2C59] mb-6">
              Explore Our Solutions
            </h2>
            <p className="text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed text-lg">
              Buske Logistics maintains a variety of 3PL services for major
              enterprises and growing companies. Whatever your 3PL need is, we have
              a solution.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-transparent transition-all duration-500 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#00B3A4] to-[#6EE7DB] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                    <service.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-semibold text-[#0F2C59] mb-4 group-hover:text-white transition-colors duration-300 text-lg">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-inter leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Floating dots decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#6EE7DB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-[#00B3A4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }}></div>
                <div className="absolute top-6 right-10 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.2s' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4">
              Why Choose Our Contract Warehousing?
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed text-lg">
              Industry-leading warehousing solutions designed to optimize your
              supply chain and drive business growth.
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
    </div>
  );
}