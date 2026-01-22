import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { X, Send } from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CareersModal({ isOpen, onClose }: CareersModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) return alert("Please upload your CV.");

    setLoading(true);

    try {
      //  Upload CV to Cloudinary
      const formData = new FormData();
      formData.append("file", cvFile);
      formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

     const cloudRes = await fetch("https://YOUR-RENDER-URL/upload-cv",
        {
          method: "POST",
          body: formData,
        }
      );
      const cloudData = await cloudRes.json();
      console.log(cloudData.secure_url);


      //  Send email via EmailJS with CV link
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
        cv_link: cloudData.secure_url,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        setCvFile(null);
        setLoading(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-2xl mx-4 md:mx-0 rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
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
          <h2 className="text-3xl md:text-4xl text-[#0A1E3A] mb-2">Join Our Team</h2>
          <p className="text-gray-600">Submit your CV and tell us why you'd be a great fit</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-6 rounded-lg shadow"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#0A1E3A] mb-2">Application Submitted!</h3>
              <p className="text-gray-600">Thank you for your interest. We'll review your CV shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField 
                label="Full Name" 
                name="name" 
                value={name} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              <InputField 
                label="Email" 
                name="email" 
                type="email" 
                value={email} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <div>
                <label className="block text-sm text-gray-700 mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00A86B] resize-none"
                  placeholder="Tell us about yourself and why you're interested in this position"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Upload CV</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
                />
                {cvFile && <p className="text-sm text-green-600 mt-1">✓ {cvFile.name}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A1E3A] text-white py-3 rounded hover:bg-[#00A86B] transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"} <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Helper component
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
