import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      
      <div className="relative w-full h-64 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/34358847/pexels-photo-34358847.jpeg?_gl=1*1rxy88*_ga*MjEyNjgxNzAxOC4xNzY3NzExNTI4*_ga_8JE65Q40S6*czE3NjkxNzU3NDkkbzI1JGcxJHQxNzY5MTc1NzczJGozNiRsMCRoMA.."
            alt="coldchain cargo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-m text-black mb-8">
          Last updated: December 2025
        </p>

        

        {/* Sections */}
        <div className="space-y-16 text-gray-800 leading-relaxed">
          <section id="introduction">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Saudex Global  (“we”, “our”, “us”) is committed to protecting the privacy and personal information of visitors to our website. This Privacy Policy explains how we collect, use, store, and protect personal information submitted through our website, particularly via the contact form.

            </p>
          </section>

          <section id="information">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>
              When you submit an enquiry through our contact page, we may collect the following personal and business-related information:
Full Name,
Email Address,
Company Name,
Phone Number,
Service Required,
Message or business requirements.
We collect only the information necessary to respond to your enquiry.

            </p>
          </section>

          <section id="usage">
            <h2 className="text-2xl font-semibold mb-4">3. Purpose of Collection</h2>
            <p>
              The information collected is used strictly for legitimate business purposes, including:
Responding to enquiries and requests,
Providing quotations and service-related information,
Communicating with prospective clients and business partners.
We do not use your information for unsolicited marketing or promotional activities.

            </p>
          </section>

          <section id="sharing">
            <h2 className="text-2xl font-semibold mb-4">4. Disclosure of Information</h2>
            <p>
             Saudex Global does not sell, rent, or disclose personal information to third parties for commercial purposes.
Information may be shared only with authorized personnel or service providers where necessary to respond to your enquiry or comply with applicable laws or regulatory requirements.

            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              
              We implement reasonable technical and organizational safeguards to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure. While we strive to protect your data, no method of transmission over the internet is completely secure.

            </p>
          </section>

          <section id="security">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p>
             Personal information is retained only for as long as necessary to fulfill the purpose for which it was collected, or as required to comply with legal and regulatory obligations.

            </p>
          </section>

          <section id="rights">
            <h2 className="text-2xl font-semibold mb-4">7. User Consent</h2>
            <p>
              By submitting your information through our website contact form, you acknowledge and consent to the collection and use of your information in accordance with this Privacy Policy.
            </p>
          </section>
          <section id="rights">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us using the details provided below, subject to applicable laws.

            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Details</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please contact us at:

              <br />
              <span className="font-medium">Email: info@saudexglobal.com</span>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
