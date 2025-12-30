
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find a Doctor', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Appointments', path: '/book' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 flex justify-between items-center">
        <span>Emergency: 911 | General Info: (555) 123-4567</span>
        <div className="hidden sm:block">
          <span className="mr-4">Patient Portal</span>
          <span>Locations</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">ST. MERIDIAN</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  } px-1 py-2 text-sm font-medium transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">St. Meridian</h3>
            <p className="text-gray-400 text-sm">Providing exceptional care with compassion and innovation since 1985.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Emergency Medicine</li>
              <li>Cardiac Care</li>
              <li>Women's Health</li>
              <li>Pediatrics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-blue-400">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Patient Portal</li>
              <li>Pay Bill Online</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-blue-400">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Medical Plaza Dr.</li>
              <li>San Francisco, CA 94103</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@meridian.med</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} St. Meridian Medical Center. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
