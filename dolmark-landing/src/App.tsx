import { lazy, Suspense } from "react";

import { Routes, Route} from 'react-router-dom';
import { ScrollToHash } from './app/components/ScrollToHash';
import MainLayout from './app/layouts/MainLayout';
const Hero = lazy(() => import("./app/components/Hero"));
const Services = lazy(() => import("./app/components/Services")); 
const Industries = lazy(() => import("./app/components/Industries"));
const WhyChooseUs = lazy(() => import("./app/components/WhyChooseUs"));
const About = lazy(() => import("./app/components/About"));
const Technology = lazy(() => import("./app/components/Technology"));
const Warehousing = lazy(() => import("./app/pages/services/Warehousing"));
const Impoexpo = lazy(() => import("./app/pages/services/impoexpo"));
const Fmcgb = lazy(() => import("./app/pages/services/fmcgb"));
const Scc = lazy(() => import("./app/pages/services/scc"));
const Distribution = lazy(() => import("./app/pages/services/distribution"));
const Tcl = lazy(() => import("./app/pages/services/tcl"));
const Customs = lazy(() => import("./app/pages/services/customs"));
const Frieght = lazy(() => import("./app/pages/services/frieghtforwarding"));
const FoodBeverage = lazy(() => import("./app/pages/industries/FoodBeverage"));
const Retail = lazy(() => import("./app/pages/industries/retail"));
const Coldchain = lazy(() => import("./app/pages/industries/coldchain"));
const Horeca = lazy(() => import("./app/pages/industries/horeca"));
const Fmcg = lazy(() => import("./app/pages/industries/Fmcg"));
const Industrials = lazy(() => import("./app/pages/industries/industrial"));
const Careers = lazy(() => import("./app/pages/careers"));
const PrivacyPolicy = lazy(() => import("./app/pages/policy"));
const Terms = lazy(() => import("./app/pages/terms"));
const Locations = lazy(() => import("./app/pages/locations"));


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToHash />
      <Suspense fallback={<div className="page-loader" />}>
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
                <About />
                <WhyChooseUs />
                <Technology />
              </>
            }
          />
        </Route>

        {/* Service and Industry pages use SimpleLayout (Header + Outlet) so no Footer */}
        <Route element={<MainLayout/>}>
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
}
