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
import {Impoexpo} from './app/pages/services/impoexpo';
import {Fmcgb} from './app/pages/services/fmcgb';
import {Scc} from './app/pages/services/scc';
import {Distribution} from './app/pages/services/distribution';
import {Tcl} from './app/pages/services/tcl';
import {Customs} from './app/pages/services/customs';
import {Frieght} from './app/pages/services/frieghtforwarding';
import {FoodBeverage} from './app/pages/industries/FoodBeverage';
import {Retail} from './app/pages/industries/retail';
import {Coldchain} from './app/pages/industries/coldchain';
import {Horeca} from './app/pages/industries/horeca';
import {Fmcg} from './app/pages/industries/Fmcg';
import {Industrials} from './app/pages/industries/industrial';

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
            <Route path="/services/impoexpo" element={<Impoexpo />} />
            <Route path="/services/fmcgb" element={<Fmcgb/>} />
            <Route path="/services/warehousing" element={<Warehousing />} />
            <Route path="/services/scc" element={<Scc />} />
            <Route path="/services/distribution" element={<Distribution />} />
            <Route path="/services/tcl" element={<Tcl />} />
            <Route path="/services/customs" element={<Customs />} />
            <Route path="/services/frieghtforwarding" element={<Frieght />} />
          </Route>
          <Route path="industries">
            <Route path="/industries/foodbeverage" element={<FoodBeverage />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/coldchain" element={<Coldchain />} />
            <Route path="/industries/horeca" element={<Horeca />} />
            <Route path="/industries/fmcg" element={<Fmcg />} />
            <Route path="/industries/industrial" element={<Industrials />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
