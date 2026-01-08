import { useState, useEffect } from 'react';
import { Menu, X, Languages, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../../translations';
import { Logo } from '../components/Logo';
import type { Language } from '../../translations';
interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const t = translations[language];

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

  const languageNames = {
    en: 'EN',
    ms: 'MS',
    zh: '中文',
    ar: 'عَرَبِي'
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
            <button
              onClick={() => scrollToSection('home')}
              className="flex flex-col leading-tight"
            >
              <span className="text-xl font-bold text-white tracking-tight">DOLMARK</span>
              <span className="text-xs text-white font-semibold tracking-wider">EXPORTERS</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors"
            >
              {t.nav.home}
            </button>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
                onClick={() => scrollToSection('services')}
                className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors flex items-center gap-1"
              >
                {t.nav.services}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showServicesDropdown && (
                <div
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="/services/warehousing"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.servicesDropdown.contractWarehousing}
                  </Link>
                  <Link
                    to="/services/value-added"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.servicesDropdown.valueAdded}
                  </Link>
                  <Link
                    to="/services/sequencing"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.servicesDropdown.sequencing}
                  </Link>
                  <Link
                    to="/services/supply-chain-consulting"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.servicesDropdown.supplyChainConsulting}
                  </Link>
                  <Link
                    to="/services/retail-logistics"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.servicesDropdown.retailLogistics}
                  </Link>
                  <Link
                    to="/services/ecommerce"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.servicesDropdown.ecommerce}
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
                {t.nav.industries}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showIndustriesDropdown && (
                <div
                  onMouseEnter={() => setShowIndustriesDropdown(true)}
                  onMouseLeave={() => setShowIndustriesDropdown(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <button
                    onClick={() => scrollToSection('industries')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.industriesDropdown.retail}
                  </button>
                  <button
                    onClick={() => scrollToSection('industries')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.industriesDropdown.fmcg}
                  </button>
                  <button
                    onClick={() => scrollToSection('industries')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.industriesDropdown.pharmaceuticals}
                  </button>
                  <button
                    onClick={() => scrollToSection('industries')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.industriesDropdown.importnexport}
                  </button>
                  <button
                    onClick={() => scrollToSection('industries')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.industriesDropdown.industrial}
                  </button>
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
                {t.nav.about}
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
                    {t.nav.aboutUs}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.nav.locations}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6] transition-colors"
                  >
                    {t.nav.careers}
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('technology')}
              className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors"
            >
              {t.nav.technology}
            </button>

            <Link
              to="/#contact"
              className="px-4 py-2 text-white hover:text-[#6EE7DB] transition-colors"
            >
              {t.nav.contact}
            </Link>

            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1.5 px-3 py-2 text-white hover:text-[#6EE7DB] transition-colors border border-gray-300 rounded-md"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">{languageNames[language]}</span>
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  <button
                    onClick={() => { setLanguage('en'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLanguage('ms'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bahasa
                  </button>
                  <button
                    onClick={() => { setLanguage('zh'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    中文
                  </button>
                  <button
                    onClick={() => { setLanguage('ar'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#0F2C59] transition-colors"
              >
                <Languages className="w-5 h-5" />
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  <button
                    onClick={() => { setLanguage('en'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLanguage('ms'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bahasa
                  </button>
                  <button
                    onClick={() => { setLanguage('zh'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    中文
                  </button>
                  <button
                    onClick={() => { setLanguage('ar'); setShowLangDropdown(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

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
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#6EE7DB] transition-colors text-left">
                {t.nav.home}
              </button>
             
              <button onClick={() => scrollToSection('industries')} className="text-white hover:text-[#6EE7DB] transition-colors text-left">
                {t.nav.industries}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#6EE7DB] transition-colors text-left">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('technology')} className="text-white hover:text-[#6EE7DB] transition-colors text-left">
                {t.nav.technology}
              </button>
              <Link
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#0F2C59] text-white px-6 py-2 rounded-md hover:bg-[#14B8A6] transition-colors text-center block"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}