import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, X } from 'lucide-react';
import { TEXT } from '../../constants';
import { Link } from "react-router-dom";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);
const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (isSending) return; // prevent double clicks

  setIsSending(true);
  // Send the email via EmailJS
const templateParams = {
    name: formData.name,
    email: formData.email,
    company: formData.company,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
  };

  emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (res) => {
        console.log('Email sent successfully!', res.status, res.text);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            service: '',
            message: ''
          });
          setIsSending(false);
          onClose();
        }, 3000);
      },
      (err) => {
        console.error('EmailJS error:', err);
        alert('Failed to send message. Please try again.');
        setIsSending(false);
      }
    );
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Close on background click
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-4xl mx-4 md:mx-0 rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl text-[#0A1E3A] mb-2">{TEXT.contact.title}</h2>
          <p className="text-gray-600">{TEXT.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 rounded-lg shadow"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-[#0A1E3A] mb-2">{TEXT.contact.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputField label={TEXT.contact.form.name} name="name" value={formData.name} onChange={handleChange} />
  <InputField label={TEXT.contact.form.email} name="email" type="email" value={formData.email} onChange={handleChange} />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <InputField label={TEXT.contact.form.company} name="company" value={formData.company} onChange={handleChange} />
    <InputField label={TEXT.contact.form.phone} name="phone" value={formData.phone} onChange={handleChange} />
  </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{TEXT.contact.form.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
                  >
                    <option value="">{TEXT.contact.form.selectService}</option>
                    {TEXT.contact.selectServices.map((service: string, index: number) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{TEXT.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00A86B] resize-none"
                  ></textarea>
                </div>
                <li>
                   <Link
                    to="/policy"
                    onClick={onClose}
                    className="text-black hover:text-[#00A86B] transition-colors">
                    {TEXT.nav.policy}
                  </Link>
                </li>
                <button
                  type="submit"
                  className="w-full bg-[#0A1E3A] text-white py-3 rounded hover:bg-[#00A86B] transition flex items-center justify-center gap-2"
                >
                  {TEXT.contact.form.submit} <Send className="w-5 h-5" />
                </button>

              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo(TEXT.contact.info)}
            <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1585637850919-66f56fe273c9?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Location"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Helper components for cleaner code
function InputField({ label, name, type = "text", value, onChange }: any) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
      />
    </div>
  );
}

function contactInfo(info: any) {
  const items = [
    { icon: MapPin, text: info.address },
    { icon: Phone, text: info.phone },
    { icon: Mail, text: info.email },
    { icon: Clock, text: info.hours }
  ];

  return (
    <div>
      <h3 className="text-2xl text-[#0A1E3A] mb-4">{info.title}</h3>
      <div className="space-y-4">
        {items.map(({ icon: Icon, text }, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#0A1E3A] rounded flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
