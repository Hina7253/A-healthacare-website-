
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              World-Class Care, <br />
              <span className="text-blue-600">Close to Home.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Combining advanced medical technology with a patient-centered approach to healthcare.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/book" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 shadow-xl hover:shadow-2xl transition-all text-center">
                Book Appointment
              </Link>
              <Link to="/doctors" className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all text-center">
                Find a Physician
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -left-10 bottom-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://picsum.photos/seed/hospital-hero/800/600" 
              alt="Healthcare Professionals" 
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:transform hover:-translate-y-2 transition-all">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
              <p className="text-gray-600 mb-4">Immediate attention for critical health situations 24/7.</p>
              <a href="tel:911" className="text-red-600 font-semibold flex items-center">
                Get Help Now <span className="ml-2">→</span>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:transform hover:-translate-y-2 transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Schedule Visit</h3>
              <p className="text-gray-600 mb-4">Book your next appointment online in minutes.</p>
              <Link to="/book" className="text-blue-600 font-semibold flex items-center">
                Book Online <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:transform hover:-translate-y-2 transition-all">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Find Doctors</h3>
              <p className="text-gray-600 mb-4">Search our extensive network of medical professionals.</p>
              <Link to="/doctors" className="text-green-600 font-semibold flex items-center">
                Search Network <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Comprehensive Medical Services</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Providing a full spectrum of healthcare services with state-of-the-art facilities and dedicated experts.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold mb-1">25+</p>
            <p className="text-blue-300 text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold mb-1">150+</p>
            <p className="text-blue-300 text-sm">Expert Doctors</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold mb-1">50k+</p>
            <p className="text-blue-300 text-sm">Satisfied Patients</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold mb-1">10+</p>
            <p className="text-blue-300 text-sm">Specialty Centers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
