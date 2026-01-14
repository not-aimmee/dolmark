import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { TEXT } from '../../constants';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2C59] mb-4">{TEXT.contact.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{TEXT.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2C59] mb-2">{TEXT.contact.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label={TEXT.contact.form.name} name="name" value={formData.name} onChange={handleChange} />
                  <InputField label={TEXT.contact.form.email} name="email" type="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label={TEXT.contact.form.company} name="company" value={formData.company} onChange={handleChange} />
                  <InputField label={TEXT.contact.form.phone} name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{TEXT.contact.form.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none"
                  >
                    <option value="">{TEXT.contact.form.selectService}</option>
                    {TEXT.contact.selectServices.map((service: string, index: number) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{TEXT.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0F2C59] text-white py-4 rounded-lg font-bold hover:bg-[#14B8A6] transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "Sending..." : TEXT.contact.form.submit} <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>

          <div className="space-y-8">
            <div className="bg-[#0F2C59] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">{TEXT.contact.info.title}</h3>
              <div className="space-y-6">
                <InfoItem icon={MapPin} text={TEXT.contact.info.address} />
                <InfoItem icon={Phone} text={TEXT.contact.info.phone} />
                <InfoItem icon={Mail} text={TEXT.contact.info.email} />
                <InfoItem icon={Clock} text={TEXT.contact.info.hours} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, name, type = "text", value, onChange }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none"
      />
    </div>
  );
}

function InfoItem({ icon: Icon, text }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#14B8A6]" />
      </div>
      <p className="text-gray-200 text-lg">{text}</p>
    </div>
  );
}

export { Contact as ContactModal };