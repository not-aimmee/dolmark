import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { TEXT } from '../../constants';
import { Logo } from '../components/Logo';
import { ContactModal } from './Contact';
import { useNavigate } from 'react-router-dom';
export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-[black] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-11 h-11" />
              <div className="flex flex-col leading-tight">
                <button
                 onClick={handleHomeClick}
                 className="flex flex-col leading-tight hover:opacity-80 transition-opacity text-left"
                >
                <span className="text-2xl font-bold text-white tracking-tight">SAUDEX</span>
                <span className="text-xl text-white font-semibold tracking-wider">GLOBAL</span>
                 </button>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              {TEXT.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00A86B] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00A86B] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00A86B] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00A86B] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">{TEXT.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('industries')} className="text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.nav.industries}
                </button>
              </li>
              <li>
                 <button
        onClick={() => setIsModalOpen(true)}
        className="text-gray-300 hover:text-[#00A86B] transition-colors">
        {TEXT.nav.contact}
      </button>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">{TEXT.footer.services}</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.services.warehousing.title}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.services.freight.title}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.services.contract.title}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.services.scm.title}
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4">{TEXT.footer.company}</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-us')} className="text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.nav.whyUs}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('technology')} className="text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.nav.technology}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00A86B] transition-colors">
                  {TEXT.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        
        {/*countires we operate in  */}
         <div>
            <h3 className="text-lg mb-4">Countries We Operate In</h3>
            <ul className="space-y-3">
            <h1 className="text-gray-300">
            <li>Singapore</li>
              <li>Malaysia</li>
              <li>Indonesia</li>
              <li>India</li>
              <li>Dubai</li>
              <li>Saudi Arabia</li>
            </h1>
            </ul>
          
        </div>
</div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            {TEXT.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-[#00A86B] transition-colors">
              {TEXT.footer.privacy}
            </a>
            <a href="#" className="text-gray-300 hover:text-[#00A86B] transition-colors">
              {TEXT.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
