import { CheckCircle, Heart, Send, Star, Users } from "lucide-react";
import React, { useState } from "react";

const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    reason: "",
    experience: "",
    commitment: "",
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
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in joining IKSS. We'll review your
            application and get back to you soon, InshaAllah.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                department: "",
                reason: "",
                experience: "",
                commitment: "",
              });
            }}
            className="bg-[#0a415d] text-white px-6 py-3 rounded-lg hover:bg-[#0a415d]/90 transition-colors duration-300"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0a415d] to-[#c1884f] text-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Join the Circle
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto animate-slide-up delay-200">
            Be a part of something greater. Join IKSS and help spread the light
            of Islam
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Join Section */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Why Join IKSS?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0a415d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-[#0a415d]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Spiritual Growth
                  </h3>
                  <p className="text-gray-600">
                    Deepen your understanding of Islam through regular study
                    circles, workshops, and discussions with like-minded peers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c1884f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#c1884f]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Brotherhood & Sisterhood
                  </h3>
                  <p className="text-gray-600">
                    Build lasting friendships with fellow Muslim students and
                    create a supportive community on campus.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="text-slate-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Leadership Development
                  </h3>
                  <p className="text-gray-600">
                    Develop leadership skills by organizing events, leading
                    discussions, and taking initiative in dawah activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#0a415d]/5 to-[#c1884f]/5 rounded-2xl p-6 border border-[#0a415d]/10">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                What We Expect
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0a415d] rounded-full"></div>
                  <span>Regular attendance at meetings and events</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0a415d] rounded-full"></div>
                  <span>Active participation in dawah activities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0a415d] rounded-full"></div>
                  <span>Commitment to Islamic values and principles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0a415d] rounded-full"></div>
                  <span>Willingness to learn and grow</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up delay-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Join IKSS</h2>
            <p className="text-gray-600 mb-6">
              Ready to be part of our mission? Click the button below to fill
              out our application form.
            </p>

            <a
              href="//fdkdfk" // Replace with actual form link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#0a415d] to-[#c1884f] text-white py-4 px-6 rounded-lg hover:from-[#0a415d]/90 hover:to-[#c1884f]/90 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105"
            >
              <Send size={20} />
              <span>Fill Application Form</span>
            </a>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Have questions? Contact us at{" "}
                <a
                  href="mailto:ikss.technical@gmail.com"
                  className="text-[#0a415d] hover:text-[#0a415d]/80"
                >
                  ikss.technical@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
