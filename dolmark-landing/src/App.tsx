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
import {Warehousing} from './app/pages/services/Warehousing';
import ValueAdded from './app/pages/services/ValueAdded';
import Sequencing from './app/pages/services/Sequencing';
import SupplyChainConsulting from './app/pages/services/SupplyChainConsulting';
import RetailLogistics from './app/pages/services/RetailLogistics';
import Ecommerce from './app/pages/services/Ecommerce';
import FoodBeverage from './app/pages/industries/FoodBeverage';
import RetailDistributors from './app/pages/industries/retail';
import {Coldchain} from './app/pages/industries/coldchain';
import Healthcare from './app/pages/industries/pharmaceuticals';
import {Fmcg} from './app/pages/industries/Fmcg';
import Industrials from './app/pages/industries/industrial';

export default function App() {

  return (
    <div className="min-h-screen bg-white">
      <ScrollToHash />
      <Routes>
        {/* Home route uses MainLayout (Header + Outlet + Footer) */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Industries />
                <WhyChooseUs />
                <About />
                <Technology />
                <Contact />
              </>
            }
          />
        </Route>

        {/* Service and Industry pages use SimpleLayout (Header + Outlet) so no Footer */}
        <Route element={<SimpleLayout />}>
          <Route path="services">
            <Route path="warehousing" element={<Warehousing />} />
            <Route path="value-added" element={<ValueAdded />} />
            <Route path="sequencing" element={<Sequencing />} />
            <Route path="supply-chain-consulting" element={<SupplyChainConsulting />} />
            <Route path="retail-logistics" element={<RetailLogistics />} />
            <Route path="ecommerce" element={<Ecommerce />} />
          </Route>
          <Route path="industries">
            <Route path="/industries/foodbeverage" element={<FoodBeverage />} />
            <Route path="/industries/retail" element={<RetailDistributors />} />
            <Route path="/industries/coldchain" element={<Coldchain />} />
            <Route path="/industries/pharmaceuticals" element={<Healthcare />} />
            <Route path="/industries/fmcg" element={<Fmcg />} />
            <Route path="/industries/industrial" element={<Industrials />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
