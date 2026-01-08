import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import type { Language } from '../../translations';

interface SimpleLayoutProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function SimpleLayout({ language, setLanguage }: SimpleLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <Outlet />
    </div>
  );
}
