
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { Language } from '../../translations';

interface MainLayoutProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function MainLayout({ language, setLanguage }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <Outlet />
      <Footer language={language} />
    </div>
  );
}
