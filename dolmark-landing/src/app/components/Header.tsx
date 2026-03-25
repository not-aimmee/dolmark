import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { TEXT } from '../../constants';
import logo from '/favicon2.png';
interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const navigate = useNavigate();

  const handleClick = (section: string) => {
    if (window.location.pathname !== "/") {
      // Navigate to landing page first
      navigate("/", { replace: false });
      // Delay scroll until landing page is rendered
      setTimeout(() => {
        scrollToSection(section);
      }, 100); // 100ms is usually enough, adjust if needed
    } else {
      // Already on landing page
      scrollToSection(section);
    }
  };

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
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src={logo} alt="Saudex Global" className="w-15 h-15" draggable={false} />
            <Link
              to="/#home"
              className="flex flex-col leading-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-3xl font-bold text-white tracking-tight">SAUDEX GLOBAL</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/#home"
              className="px-4 py-2 text-white hover:text-[#1AC6C1] transition-colors"
            >
              {TEXT.nav.home}
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
             <button
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
                onClick={() => scrollToSection('services')}
                className="px-4 py-2 text-white hover:text-[#00C2A0] transition-colors flex items-center gap-1"
              >
                {TEXT.nav.services}
                <ChevronDown className={`w-4 h-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""}`}/>
              </button>
              {showServicesDropdown && (
                <div
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="/services/impoexpo#ie"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.servicesDropdown.impoexpo}
                  </Link>
                  <Link
                    to="/services/fmcgb#fmcgb"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.servicesDropdown.fmcgb}
                  </Link>
                  <Link
                    to="/services/frieghtforwarding#frieghtforwarding"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.servicesDropdown.frieghtforwarding}
                  </Link>
                  <Link
                    to="/services/distribution#distribution"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.servicesDropdown.distribution}
                  </Link>
                  <Link
                    to="/services/warehousing#warehousing"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.servicesDropdown.contractWarehousing}
                  </Link>
                  <Link
                    to="/services/tcl#tcl"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.servicesDropdown.tcl}
                  </Link>
                  <Link
                    to="/services/scc#scc"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.servicesDropdown.scc}
                  </Link>
                  <Link
                    to="/services/customs#customs"
                    onClick={() => setShowServicesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
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
                className="px-4 py-2 text-white hover:text-[#00C2A0] transition-colors flex items-center gap-1"
              >
                {TEXT.nav.industries}
                <ChevronDown className={`w-4 h-4 transition-transform ${showIndustriesDropdown ? "rotate-180" : ""}`} />
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
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.industriesDropdown.foodnbeverages}
                  </Link>
                  <Link
                    to="/industries/fmcg#fmcghome"
                    onClick={() => setShowIndustriesDropdown(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.industriesDropdown.fmcg}
                  </Link>
                  <Link
                    to="/industries/coldchain#cchome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.industriesDropdown.coldchain}
                  </Link>
                  <Link
                    to="/industries/retail#rhome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.industriesDropdown.retail}
                  </Link>
                  <Link
                    to="/industries/horeca#horecahome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.industriesDropdown.horeca}
                  </Link>
                  <Link
                    to="/industries/industrial#ihome"
                    onClick={() => setShowIndustriesDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
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
                className="px-4 py-2 text-white hover:text-[#00C2A0] transition-colors flex items-center gap-1"
              >
                {TEXT.nav.about}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAboutDropdown ? "rotate-180" : ""}`} />
              </button>
              {showAboutDropdown && (
                <div
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                  className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <button
                    onClick={() => handleClick("about")}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.nav.aboutUs}
                  </button>
                  <Link
                    to="/locations#locations"
                    onClick={() => setShowAboutDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.nav.locations}
                  </Link>
                  <Link
                    to="/careers#careers"
                    onClick={() => setShowAboutDropdown(false) }
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A86B] transition-colors"
                  >
                    {TEXT.nav.careers}
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={() => handleClick("technology")}
              className="px-4 py-2 text-white hover:text-[#00C2A0] transition-colors"
            >
              {TEXT.nav.technology}
            </button>
              <button
        onClick={onContactClick}
        className="px-4 py-2 text-white hover:text-[#00C2A0] transition-colors"
      >
        {TEXT.nav.contact}
      </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#00C2A0] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#00C2A0] transition-colors text-left block">
                {TEXT.nav.home}
              </Link>
             <button
  onClick={() => setShowServicesDropdown(prev => !prev)}
  className="flex items-center justify-between text-white hover:text-[#00C2A0] transition-colors text-left"
>
  {TEXT.nav.services}
  <ChevronDown className={`w-4 h-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""}`} />
</button>
{showServicesDropdown && (
  <div className="ml-4 flex flex-col space-y-2">
    <button onClick={() => scrollToSection('services')} className="text-white/90 text-left">
      All Services
    </button>

    <Link to="./services/impoexpo#ie" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.impoexpo}
    </Link>
    <Link to="/services/fmcgb#fmcgb" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.fmcgb}
    </Link>
    <Link to="/services/frieghtforwarding#frieghtforwarding" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.frieghtforwarding}
    </Link>
    <Link to="/services/distribution#distribution" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.distribution}
    </Link>
    <Link to="/services/warehousing#warehousing" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.contractWarehousing}
    </Link>
    <Link to="/services/tcl#tcl" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.tcl}
    </Link>
    <Link to="/services/scc#scc" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.scc}
    </Link>
    <Link to="/services/customs#customs" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.servicesDropdown.customs}
    </Link>
  </div>
)}

             
              <button
  onClick={() => setShowIndustriesDropdown(prev => !prev)}
  className="flex items-center justify-between text-white hover:text-[#00C2A0] transition-colors text-left"
>
  {TEXT.nav.industries}
  <ChevronDown className={`w-4 h-4 transition-transform ${showIndustriesDropdown ? "rotate-180" : ""}`} />
</button>
{showIndustriesDropdown && (
  <div className="ml-4 flex flex-col space-y-2">
    <button onClick={() => scrollToSection('industries')} className="text-white/90 text-left">
      All Industries We Serve 
    </button>
    <Link to="/industries/foodbeverage#fbhome" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.industriesDropdown.foodnbeverages}
    </Link>
    <Link to="/industries/fmcg#fmcghome" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.industriesDropdown.fmcg}
    </Link>
    <Link to="/industries/coldchain#cchome" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.industriesDropdown.coldchain}
    </Link>
    <Link to="/industries/retail#rhome" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.industriesDropdown.retail}
    </Link>
    <Link to="/industries/horeca#horecahome" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.industriesDropdown.horeca}
    </Link>
    <Link to="/industries/industrail#ihome" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.industriesDropdown.industrial}
    </Link>
  </div>
)}
<button
  onClick={() => setShowAboutDropdown(prev => !prev)}
  className="flex items-center justify-between text-white hover:text-[#00C2A0] transition-colors text-left"
>
  {TEXT.nav.about}
  <ChevronDown className={`w-4 h-4 transition-transform ${showAboutDropdown ? "rotate-180" : ""}`} />
</button>
{showAboutDropdown && (
  <div className="ml-4 flex flex-col space-y-2">
    <button onClick={() => handleClick("about")} className="text-white/90 text-left">
      {TEXT.nav.aboutUs}
    </button>
    <Link to="/locations#locations" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.nav.locations}
    </Link>
    <Link to="/careers#careers" onClick={() => setIsMenuOpen(false)} className="text-white/90">
      {TEXT.nav.careers}
    </Link>
  </div>
)}

              <button onClick={() => scrollToSection('technology')} className="text-white hover:text-[#00C2A0] transition-colors text-left">
                {TEXT.nav.technology}
              </button>
              <button
        onClick={onContactClick}
        className=" text-white hover:text-[#00C2A0] transition-colors text-left"
      >
        {TEXT.nav.contact}
      </button>
            </div>
          </div>
        )}
      </div>
    </header>
    
  );
}
