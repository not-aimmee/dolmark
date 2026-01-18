import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, X } from 'lucide-react';
import { TEXT } from '../../constants';

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
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
      onClose(); // Close modal after submission
    }, 3000);
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
          <h2 className="text-3xl md:text-4xl text-[#0F2C59] mb-2">{TEXT.contact.title}</h2>
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
                <h3 className="text-2xl text-[#0F2C59] mb-2">{TEXT.contact.success}</h3>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14B8A6] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0F2C59] text-white py-3 rounded hover:bg-[#14B8A6] transition flex items-center justify-center gap-2"
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
                src="https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?_gl=1*1d3odxu*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjgzMzA5ODQkbzEzJGcxJHQxNzY4MzMzMDE2JGoxMyRsMCRoMA.."
                alt="Location"
                className="w-full h-full object-cover"
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
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
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
      <h3 className="text-2xl text-[#0F2C59] mb-4">{info.title}</h3>
      <div className="space-y-4">
        {items.map(({ icon: Icon, text }, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#4A90E2] rounded flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
