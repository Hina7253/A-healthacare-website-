
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            St. Meridian provides a wide range of medical specialties equipped with the latest technology and staffed by industry-leading professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 text-4xl p-6 rounded-2xl">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description} Our department is equipped with 24/7 staffing and cutting-edge diagnostic tools to ensure the highest standard of care for every patient.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Inpatient</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Outpatient</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Advanced Tech</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-12 shadow-inner border border-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-8">Our AI Concierge or our human reception team are here to guide you to the right department.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
              Call Support: (555) 123-4567
            </button>
            <button className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
              Live Chat Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
