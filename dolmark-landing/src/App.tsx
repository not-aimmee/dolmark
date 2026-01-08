import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToHash } from './app/components/ScrollToHash';
import MainLayout from './app/layouts/MainLayout';
import SimpleLayout from './app/layouts/SimpleLayout';
import { Hero } from './app/components/Hero';
import { Services } from './app/components/Services';
import { Industries } from './app/components/Industries';
import { WhyChooseUs } from './app/components/WhyChooseUs';
import { About } from './app/components/About';
import { Technology } from './app/components/Technology';
import { Contact } from './app/components/Contact';
import Warehousing from './app/pages/services/Warehousing';
import ValueAdded from './app/pages/services/ValueAdded';
import Sequencing from './app/pages/services/Sequencing';
import SupplyChainConsulting from './app/pages/services/SupplyChainConsulting';
import RetailLogistics from './app/pages/services/RetailLogistics';
import Ecommerce from './app/pages/services/Ecommerce';
import FoodBeverage from './app/pages/industries/FoodBeverage';
import RetailDistributors from './app/pages/industries/RetailDistributors';
import Automotive from './app/pages/industries/Automotive';
import Healthcare from './app/pages/industries/Healthcare';
import Aerospace from './app/pages/industries/Aerospace';
import Industrials from './app/pages/industries/Industrials';
import type { Language } from './translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-white">
      <ScrollToHash />
      <Routes>
        {/* Home route uses MainLayout (Header + Outlet + Footer) */}
        <Route element={<MainLayout language={language} setLanguage={setLanguage} />}>
          <Route
            path="/"
            element={
              <>
                <Hero language={language} />
                <Services language={language} />
                <Industries language={language} />
                <WhyChooseUs language={language} />
                <About language={language} />
                <Technology language={language} />
                <Contact language={language} />
              </>
            }
          />
        </Route>

        {/* Service and Industry pages use SimpleLayout (Header + Outlet) so no Footer */}
        <Route element={<SimpleLayout language={language} setLanguage={setLanguage} />}>
          <Route path="services">
            <Route path="warehousing" element={<Warehousing />} />
            <Route path="value-added" element={<ValueAdded />} />
            <Route path="sequencing" element={<Sequencing />} />
            <Route path="supply-chain-consulting" element={<SupplyChainConsulting />} />
            <Route path="retail-logistics" element={<RetailLogistics />} />
            <Route path="ecommerce" element={<Ecommerce />} />
          </Route>
          <Route path="industries">
            <Route path="food-beverage" element={<FoodBeverage />} />
            <Route path="retail-distributors" element={<RetailDistributors />} />
            <Route path="automotive" element={<Automotive />} />
            <Route path="healthcare" element={<Healthcare />} />
            <Route path="aerospace" element={<Aerospace />} />
            <Route path="industrials" element={<Industrials />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
