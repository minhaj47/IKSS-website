import {
  BookOpen,
  Calendar,
  Camera,
  Home,
  Mail,
  Menu,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import React, { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "resources", label: "Resources", icon: BookOpen },
    { id: "events", label: "Events", icon: Calendar },
    { id: "gallery", label: "Gallery", icon: Camera },
    { id: "about", label: "About Us", icon: Users },
    { id: "join", label: "Join Us", icon: UserPlus },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="bg-gradient-to-r from-white via-gray-50/50 to-white shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 lg:py-5">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer group flex-1"
            onClick={() => onPageChange("home")}
          >
            <div className="relative flex-shrink-0">
              <img
                src="/SEU dawah circle (1).png"
                alt="IKSS Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  clipPath: "inset(0 0 20% 0)",
                }}
              />
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#0a415d]/10 to-[#c1884f]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            </div>
            <div className="flex flex-col min-w-0">
              {/* Primary Brand Name */}
              <div className="flex items-baseline space-x-1">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight bg-gradient-to-r from-[#0a415d] via-[#0a415d] to-[#c1884f] bg-clip-text text-transparent">
                  IKSS
                </h1>
                <div className="hidden sm:block w-0.5 h-4 sm:h-5 lg:h-6 bg-gradient-to-b from-[#c1884f] to-[#0a415d] rounded-full opacity-60"></div>
              </div>
              {/* Full Organization Name */}
              <div className="flex flex-col -mt-0.5 sm:-mt-1">
                <p className="text-xs sm:text-xs lg:text-sm font-semibold text-[#0a415d] leading-tight truncate">
                  Islamic Knowledge Seekers
                </p>
                <p className="text-xs sm:text-xs lg:text-sm font-medium text-[#c1884f]/80 leading-tight">
                  of SUST
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-200/50">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-[#0a415d] to-[#c1884f] shadow-lg transform scale-105"
                      : "text-gray-700 hover:text-[#0a415d] hover:bg-[#0a415d]/10"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-white" : ""} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-md"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile/Tablet Navigation Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-[#0a415d] to-[#c1884f] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <Menu
                  size={18}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={18}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 pb-4 sm:pb-6" : "max-h-0"
          }`}
        >
          <div className="mx-2 sm:mx-0 bg-gradient-to-br from-[#0a415d]/5 to-[#c1884f]/5 rounded-xl sm:rounded-2xl border border-gray-200/50 backdrop-blur-sm">
            <nav className="flex flex-col p-3 sm:p-4 space-y-1 sm:space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 transform ${
                      isActive
                        ? "text-white bg-gradient-to-r from-[#0a415d] to-[#c1884f] shadow-md scale-[1.01] sm:scale-[1.02]"
                        : "text-gray-700 hover:text-[#0a415d] hover:bg-white/70 hover:shadow-sm hover:scale-[1.01]"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen
                        ? "slideInFromRight 0.3s ease-out forwards"
                        : "",
                    }}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg ${
                        isActive ? "bg-white/20" : "bg-[#0a415d]/10"
                      }`}
                    >
                      <Icon size={16} className="sm:hidden" />
                      <Icon size={18} className="hidden sm:block" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
