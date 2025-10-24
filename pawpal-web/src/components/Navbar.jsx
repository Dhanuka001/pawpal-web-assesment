import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false); 

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo and Title */}
          <a href="#home" className="flex items-center space-x-2">
            <img src="/image.png" alt="PawPal Logo" className="h-40 w-50 object-contain" />
            
          </a>

          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>

            <div className="relative group">
              <button className="text-gray-800 hover:text-blue-600 font-medium">
                Project Scope ▾
              </button>
              <div className="absolute left-0 top-full z-20 hidden w-56 rounded-md bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:block group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-2">
                <a href="#literature" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Literature Survey</a>
                <a href="#gap" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Research Gap</a>
                <a href="#problem" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Problem & Solution</a>
                <a href="#objectives" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Objectives</a>
                <a href="#methodology" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Methodology</a>
                <a href="#technologies" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Technologies</a>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-800 hover:text-blue-600 font-medium">
                Downloads ▾
              </button>
              <div className="absolute left-0 top-full z-20 hidden w-48 rounded-md bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:block group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-2">
                <a href="#documents" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Documents</a>
                <a href="#presentations" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Presentations</a>
              </div>
            </div>

            <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">About Us</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <a href="#home" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Home</a>
          <a href="#literature" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Literature Survey</a>
          <a href="#gap" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Research Gap</a>
          <a href="#problem" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Problem & Solution</a>
          <a href="#objectives" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Objectives</a>
          <a href="#methodology" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Methodology</a>
          <a href="#technologies" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Technologies</a>
          <a href="#documents" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Documents</a>
          <a href="#presentations" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Presentations</a>
          <a href="#about" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">About Us</a>
          <a href="#contact" onClick={handleNavClick} className="block px-4 py-2 hover:bg-blue-50">Contact</a>
        </div>
      )}
    </nav>
  );
}
