
import React, { useState } from 'react';
import { DOCTORS } from '../constants';

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const specialties = ['All', ...new Set(DOCTORS.map(d => d.specialty))];

  const filteredDoctors = DOCTORS.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || doc.specialty === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Our Medical Team</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Find world-class specialists dedicated to your health and well-being.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full relative">
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or specialty..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setActiveFilter(spec)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === spec 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doctor => (
              <div key={doctor.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {doctor.specialty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{doctor.experience} Years Experience • {doctor.education}</p>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{doctor.bio}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                        <span 
                          key={day}
                          className={`text-[10px] w-8 h-8 flex items-center justify-center rounded-full border ${
                            doctor.availability.includes(day)
                              ? 'border-blue-200 bg-blue-50 text-blue-600 font-bold'
                              : 'border-gray-100 text-gray-300'
                          }`}
                        >
                          {day[0]}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-100">
                    Book Session
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
              <button onClick={() => { setSearchTerm(''); setActiveFilter('All'); }} className="text-blue-600 font-bold mt-2">Clear all filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

