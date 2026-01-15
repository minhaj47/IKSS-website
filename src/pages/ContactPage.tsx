import { Facebook, Globe, Mail, MapPin } from "lucide-react";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0a415d] to-[#c1884f] text-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up delay-200">
            Get in touch with us. We'd love to hear from you and answer any
            questions you may have
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0a415d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#0a415d]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:ikss.sust@gmail.com"
                    className="text-[#0a415d] hover:text-[#0a415d]/80 font-medium"
                  >
                    ikss.sust@gmail.com
                  </a>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c1884f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="text-[#c1884f]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Website
                  </h3>
                  <a
                    href="https://www.ikss-sust.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c1884f] hover:text-[#c1884f]/80 font-medium"
                  >
                    www.ikss-sust.org
                  </a>
                  <p className="text-sm text-gray-500">
                    Visit our official website
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-slate-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Shahjalal University of Science and Technology
                  </p>
                  <p className="text-gray-600">Sylhet-3114, Bangladesh</p>
                  <p className="text-sm text-gray-500">SUST Campus</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://fb.com/ikss.sust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-[#0a415d]/5 to-[#c1884f]/5 rounded-2xl p-6 border border-[#0a415d]/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Saturday - Thursday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span>2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Prayer Times:</span>
                  <span>Always Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up delay-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions or want to learn more about IKSS? We'd love to hear
              from you!
            </p>

            <div className="text-center">
              <a
                href="mailto:ikss.sust@gmail.com?subject=Inquiry about IKSS&body=Assalamu Alaikum,%0D%0A%0D%0AI would like to know more about Islamic Knowledge Seekers of SUST.%0D%0A%0D%0AJazakAllahu Khairan"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0a415d] to-[#c1884f] text-white py-4 px-8 rounded-lg hover:from-[#0a415d]/90 hover:to-[#c1884f]/90 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105"
              >
                <Mail size={24} />
                <span>Send us an Email</span>
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Click to open your email client with a pre-filled message
              </p>
            </div>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="mt-16 animate-slide-up delay-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2827391629076!2d91.79849061440844!3d24.921109146536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505558dd0be6a1%3A0x65c7e47c94b6dc49!2sShahjalal%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1635905049869!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-center mt-4 text-sm text-gray-500">
              Shahjalal University of Science and Technology, Sylhet-3114
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
