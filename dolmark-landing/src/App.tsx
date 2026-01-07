import { useState } from 'react';
import { Header } from './app/components/Header';
import { Hero } from './app/components/Hero';
import { Services } from './app/components/Services';
import { Industries } from './app/components/Industries';
import { WhyChooseUs } from './app/components/WhyChooseUs';
import { About } from './app/components/About';
import { Technology } from './app/components/Technology';
import { Contact } from './app/components/Contact';
import { Footer } from './app/components/Footer';
import type { Language } from './translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Industries language={language} />
      <WhyChooseUs language={language} />
      <About language={language} />
      <Technology language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}
