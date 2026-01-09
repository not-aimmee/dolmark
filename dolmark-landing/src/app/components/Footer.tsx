import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { TEXT } from '../../constants';
import { Logo } from '../components/Logo';

export function Footer() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[black] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white tracking-tight">DOLMARK</span>
                <span className="text-xs text-[#14B8A6] font-semibold tracking-wider">EXPORTERS</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              {TEXT.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#14B8A6] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#14B8A6] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#14B8A6] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#14B8A6] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">{TEXT.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('industries')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.nav.industries}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">{TEXT.footer.services}</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.services.warehousing.title}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.services.freight.title}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.services.contract.title}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
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
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-us')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.nav.whyUs}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('technology')} className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.nav.technology}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                  {TEXT.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            {TEXT.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors">
              {TEXT.footer.privacy}
            </a>
            <a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors">
              {TEXT.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}