import  { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {translations } from '../../../translations';
import type { Language } from '../../../translations';

interface IndustryProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Fmcg ({language, setLanguage}:IndustryProps) {
  const t = translations[language];
  return (
    <section id="ipage" className="relative min-h-screen flex items-center pt-20"> 
      <div /*className="min-h-screen bg-white"*/ >
        <Header language={language} setLanguage={setLanguage} /> 
     </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0"> 
        <img src="https://images.unsplash.com/photo-1528034441002-cdbf746744b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="FMCG Industry Background" 
        className="absolute inset-0 w-full h-full object-cover" /> 
      </div>
         {/* Content */} 
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
           <div className="max-w-3xl"> 
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" text-xl md:text-2xl text-white mb-10 font-light" >
            {t.industriesWeServe.title} 
            </motion.p>
            <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }} > 
             <h1 className="text-[5vw] md:text-[7vw] lg:text-[8vw] text-white font-semibold leading-none mb-6 " >
               {t.industriesWeServe.fmcg.heading} 
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" text-xl md:text-2xl text-white mb-10 font-light" >
            {t.industriesWeServe.fmcg.text} 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" text-xl md:text-2xl text-white mb-10 font-light" >
              <Link to="/#contact" className="bg-[#0F2C59] text-white px-8 py-3 rounded-md hover:bg-[black] transition-colors inline-flex items-center gap-2">
              {t.services.button}
              <span>→</span>
            </Link> 
            </motion.p>
       </div> 
        <div>
     <footer className="bg-[#0F2C59] text-white">
        <Footer language={language} />
      </footer>
      </div>
      </div>
      
    </section> 
  );
}
