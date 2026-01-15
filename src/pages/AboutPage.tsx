import {
  BookOpen,
  ExternalLink,
  Heart,
  Star,
  Target,
  Users,
} from "lucide-react";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0a415d] to-[#c1884f] text-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            আমাদের সম্পর্কে
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 animate-slide-up delay-200">
            Islamic Knowledge Seekers of SUST
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up delay-300">
            Shahjalal University of Science and Technology-তে ইসলামের দাওয়াহ
            ছড়িয়ে দেওয়ার একটি ছাত্র-নেতৃত্বাধীন প্রতিষ্ঠান
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        {/* Main Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 animate-slide-up">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#0a415d]/10 rounded-full flex items-center justify-center mr-4">
              <Heart className="text-[#0a415d]" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              আমাদের সম্পর্কে
            </h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            IKSS (Islamic Knowledge Seekers of SUST) একটি অনলাইন এবং অফলাইন
            ভিত্তিক ক্যাম্পাসকেন্দ্রিক দাওয়াহ প্রতিষ্ঠান। এটি Shahjalal
            University of Science and Technology-তে অধ্যয়নরত শিক্ষার্থীদের মাঝে
            ইসলামের দাওয়াহ পৌঁছানোর লক্ষ্যে কাজ করে যাচ্ছে।
          </p>
        </div>

        {/* Our Objectives */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 animate-slide-up delay-200">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#c1884f]/10 rounded-full flex items-center justify-center mr-4">
              <Target className="text-[#c1884f]" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              আমাদের উদ্দেশ্য
            </h3>
          </div>
          <p className="text-lg text-gray-700 mb-6">আমাদের মূল লক্ষ্য হচ্ছে:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="text-teal-600" size={16} />
              </div>
              <p className="text-gray-700">
                SUST-তে আগত ছাত্রদের মাঝে ইসলামের বাণী ও দাওয়াহ'র শিক্ষা
                ছড়িয়ে দেওয়া
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#0a415d]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="text-[#0a415d]" size={16} />
              </div>
              <p className="text-gray-700">
                ক্যাম্পাসজুড়ে ইসলামের দাওয়াহ ও সচেতনতা কার্যক্রম পরিচালনা
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#c1884f]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="text-[#c1884f]" size={16} />
              </div>
              <p className="text-gray-700">
                মাঠ পর্যায়ে দাওয়াহ কার্যক্রমে অংশগ্রহণ
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#0a415d]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="text-[#0a415d]" size={16} />
              </div>
              <p className="text-gray-700">
                ইসলামি সংস্কৃতি ও সিরাত সম্পর্কিত জ্ঞান চর্চা
              </p>
            </div>

            <div className="flex items-start space-x-3 md:col-span-2">
              <div className="w-8 h-8 bg-[#c1884f]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="text-[#c1884f]" size={16} />
              </div>
              <p className="text-gray-700">
                সময়োপযোগী ও তরুণবান্ধব দাওয়াহ প্রজেক্ট বাস্তবায়ন
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-gradient-to-br from-[#0a415d]/5 to-[#c1884f]/5 rounded-2xl p-8 mb-12 border border-[#0a415d]/20 animate-slide-up delay-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0a415d]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-[#0a415d]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              আমাদের স্বপ্ন
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              আমরা একটি স্বপ্ন দেখি—SUST ক্যাম্পাসে একটি প্রজন্ম গড়ে তুলতে চাই
              যারা জ্ঞানে, চরিত্রে ও কাজে ইসলামের প্রতিনিধিত্ব করবে, ইনশাআল্লাহ।
            </p>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up delay-400">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#c1884f]/10 rounded-full flex items-center justify-center mr-4">
              <BookOpen className="text-[#c1884f]" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Organizational Structure
            </h3>
          </div>
          <p className="text-gray-700 mb-6">
            Learn more about our organizational structure, leadership team, and
            how we operate to achieve our mission effectively.
          </p>
          <a
            href="https://docs.google.com/document/d/1QE-JF_raafEIvvUOOBr7ohFAafj-9koSrg-HbmQZADE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#0a415d] text-white px-6 py-3 rounded-lg hover:bg-[#0a415d]/90 transition-colors duration-300"
          >
            <BookOpen size={20} />
            <span>View IKSS Organizational Structure</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
