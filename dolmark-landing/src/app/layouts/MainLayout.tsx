
import { Outlet } from 'react-router-dom';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import { useState } from 'react';
import { ContactModal } from '../components/Contact';

export default function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <Header onContactClick={() => setIsModalOpen(true)}/>
        <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
