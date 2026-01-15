import { ArrowRight, BookOpen, Calendar, Heart, Users } from "lucide-react";
import React from "react";
import QuranVerse from "../components/QuranVerse";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 overflow-hidden border-b border-gray-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3 bg-gradient-to-br from-blue-50 to-amber-50">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#0a415d] rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-[#c1884f] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 border-2 border-[#0a415d] rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#0a415d]/30 rounded-full animate-pulse delay-3000"></div>
          <div className="absolute top-20 right-1/3 w-16 h-16 border border-[#c1884f]/40 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/SEU dawah circle (1).png"
                alt="IKSS Logo"
                className="w-96 h-96 md:w-112 md:h-112 drop-shadow-xl animate-slide-up"
              />
            </div>

            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-400">
              Spreading the light of Islam at Shahjalal University of Science
              and Technology, Sylhet
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up delay-500">
              <button
                onClick={() => onPageChange("join")}
                className="bg-[#0a415d] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0a415d]/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Users size={20} /> <span>Join Now</span>
              </button>
              <button
                onClick={() => onPageChange("events")}
                className="bg-white border-2 border-[#0a415d] text-[#0a415d] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0a415d]/5 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Calendar size={20} /> <span>Upcoming Events</span>
              </button>
              <button
                onClick={() => onPageChange("resources")}
                className="bg-[#c1884f] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c1884f]/90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <BookOpen size={20} /> <span>Explore Resources</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quran Verse Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuranVerse />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              IKSS is a student-led organization dedicated to spreading Islamic
              knowledge, building community, and creating positive change at
              Shahjalal University of Science and Technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up delay-200">
            {/* Mission Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0a415d]/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-[#0a415d]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Dawah & Outreach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Spreading the beautiful message of Islam through campus
                activities, street dawah, and community engagement programs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#c1884f]/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-[#c1884f]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Islamic Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Providing authentic Islamic knowledge through study circles,
                workshops, and resource sharing for spiritual growth.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0a415d]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-[#0a415d]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Community Building
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating a supportive brotherhood and sisterhood among Muslim
                students at SUST through various social and spiritual
                activities.
              </p>
            </div>
          </div>
          <div className="text-center mt-12 animate-slide-up delay-300">
            <button
              onClick={() => onPageChange("about")}
              className="bg-[#0a415d] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0a415d]/90 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Learn More About Us</span> <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0a415d] to-[#c1884f] text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center animate-slide-up">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-white/80">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-white/80">Events Organized</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Students Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-white/80">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Logos Section */}
      <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-700 mb-8">
            Our Partners & Affiliates
          </h2>
          <div className="flex justify-center overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8 animate-slide-logos">
              <a
                href="https://www.youtube.com/@islamzonebd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images.jpeg"
                  alt="Islam Zone"
                  className="h-10 sm:h-12 md:h-14 object-contain hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://hoytoba.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/logo_v1.5_round.png"
                  alt="Hoytoba"
                  className="h-10 sm:h-12 md:h-14 object-contain hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://sholo.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/image.webp"
                  alt="Sholo"
                  className="h-10 sm:h-12 md:h-14 object-contain hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://www.facebook.com/youthfoundationtalora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/youthfoundation.jpg"
                  alt="Youthfoundation"
                  className="h-10 sm:h-12 md:h-14 object-contain hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://seanpublication.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/sean-logo.png"
                  alt="Sean Publication"
                  className="h-10 sm:h-12 md:h-14 object-contain hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://www.youtube.com/@BaseeraMedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/baseera_logo.jpg"
                  alt="Baseera"
                  className="h-10 sm:h-12 md:h-14 object-contain hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://www.youtube.com/@RaindropsmediaOrg2015"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/raidrops_logo.jpg"
                  alt="Raidrops"
                  className="h-10 sm:h-12 md:h-14 object-contain hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
