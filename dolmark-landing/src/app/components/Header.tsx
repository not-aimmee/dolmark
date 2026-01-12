import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ContactModal } from './Contact';
import { Link } from 'react-router-dom';
import { TEXT } from '../../constants';
import { Logo } from '../components/Logo';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setShowServicesDropdown(false);
      setShowIndustriesDropdown(false);
      setShowAboutDropdown(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Logo className="w-14 h-14" />
            <Link
              to="/#home"
              className="flex flex-col leading-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-xl font-bold text-white tracking-tight">DOLMARK</span>
              <span className="text-xs text-white font-semibold tracking-wider">EXPORTERS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/#home"
              className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors"
            >
              {TEXT.nav.home}
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
                onClick={() => scrollToSection('services')}
                className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors flex items-center gap-1"
              >
                {TEXT.nav.services}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showServicesDropdown && (
                <div
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="./services/impoexpo#ie"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.impoexpo}
                  </Link>
                  <Link
                    to="/services/fmcgb#fmcgb"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.fmcgb}
                  </Link>
                  <Link
                    to="/services/frieghtforwarding#frieghtforwarding"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.frieghtforwarding}
                  </Link>
                  <Link
                    to="/services/distribution#distribution"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.distribution}
                  </Link>
                  <Link
                    to="/services/warehousing#warehousing"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.contractWarehousing}
                  </Link>
                  <Link
                    to="/services/tcl#tcl"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.tcl}
                  </Link>
                  <Link
                    to="/services/scc#scc"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.scc}
                  </Link>
                  <Link
                    to="/services/customs#customs"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.servicesDropdown.customs}
                  </Link>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowIndustriesDropdown(true)}
                onMouseLeave={() => setShowIndustriesDropdown(false)}
                onClick={() => scrollToSection('industries')}
                className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors flex items-center gap-1"
              >
                {TEXT.nav.industries}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showIndustriesDropdown && (
                <div
                  onMouseEnter={() => setShowIndustriesDropdown(true)}
                  onMouseLeave={() => setShowIndustriesDropdown(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="/industries/foodbeverage#fbhome"
                    onClick={() => setShowIndustriesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.industriesDropdown.foodnbeverages}
                  </Link>
                  <Link
                    to="/industries/fmcg#fmcghome"
                    onClick={() => setShowIndustriesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.industriesDropdown.fmcg}
                  </Link>
                  <Link
                    to="/industries/coldchain#cchome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.industriesDropdown.coldchain}
                  </Link>
                  <Link
                    to="/industries/retail#rhome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.industriesDropdown.retail}
                  </Link>
                  <Link
                    to="/industries/horeca#horecahome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.industriesDropdown.horeca}
                  </Link>
                  <Link
                    to="/industries/industrial#ihome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.industriesDropdown.industrial}
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors flex items-center gap-1"
              >
                {TEXT.nav.about}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showAboutDropdown && (
                <div
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                  className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.nav.aboutUs}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.nav.locations}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {TEXT.nav.careers}
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('technology')}
              className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors"
            >
              {TEXT.nav.technology}
            </button>
               <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors"
      >
        {TEXT.nav.contact}
      </button>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#6EE7DB] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#6EE7DB] transition-colors text-left block">
                {TEXT.nav.home}
              </Link>
             
              <button onClick={() => scrollToSection('industries')} className="text-white hover:text-[#6EE7DB] transition-colors text-left">
                {TEXT.nav.industries}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#6EE7DB] transition-colors text-left">
                {TEXT.nav.about}
              </button>
              <button onClick={() => scrollToSection('technology')} className="text-white hover:text-[#6EE7DB] transition-colors text-left">
                {TEXT.nav.technology}
              </button>
              <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors"
      >
        {TEXT.nav.contact}
      </button>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}