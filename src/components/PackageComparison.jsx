import { useState } from 'react';
import { hotels, packages, inclusions } from '../data/packages';

const PackageComparison = () => {
  const [selectedDays, setSelectedDays] = useState(15);
  const [selectedRoomType, setSelectedRoomType] = useState("quad");
  const [activeTab, setActiveTab] = useState('details');

  // Updated room types to match with sharedRoomPrices keys
  const roomTypes = [
    { value: "quad", label: "Quad Sharing" },
    { value: "triple", label: "Triple Sharing" },
    { value: "double", label: "Double Sharing" }
  ];

  // Helper function to fetch inclusions by ID
  const getInclusions = (ids) => {
    return ids.map((id) => inclusions.find((inclusion) => inclusion.id === id)?.description);
  };

  return (
    <div className="mx-auto max-w-7xl bg-lime-400 px-4 py-4 rounded-3xl">
      {/* Enhanced Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Duration Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Duration</label>
            <div className="relative">
              <select
                className="block w-full pl-4 pr-8 py-3 text-base border border-lime-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 bg-white appearance-none"
                value={selectedDays}
                onChange={(e) => setSelectedDays(Number(e.target.value))}
              >
                {[15, 20, 25].map(days => (
                  <option key={days} value={days}>{days} Days Package</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Room Type Selection - Updated */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Room Type</label>
            <div className="relative">
              <select
                className="block w-full pl-4 pr-8 py-3 text-base border border-lime-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 bg-white appearance-none"
                value={selectedRoomType}
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                {roomTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-end">
            <div className="w-full bg-lime-50 rounded-lg p-1">
              <div className="flex space-x-1">
                {['details', 'inclusions'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-white text-lime-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-lime-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-lime-200">
        <div className="h-96 overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b border-lime-200">
                <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Category</th>
                {activeTab === 'details' ? (
                  <>
                    <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Makkah Hotel</th>
                    <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Madinah Hotel</th>
                  </>
                ) : (
                  <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Package Inclusions</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-lime-200">
              {packages.map((pkg) => {
                const makkahHotel = hotels.find((hotel) => hotel.id === pkg.makkahHotelId);
                const madinahHotel = hotels.find((hotel) => hotel.id === pkg.madinahHotelId);
                const packageInclusions = pkg.inclusions ? getInclusions(pkg.inclusions) : [];

                return (
                  <tr key={pkg.id} className="hover:bg-lime-100 transition-colors duration-150 cursor-pointer">
                    <td className="px-6 py-16 font-medium text-gray-900">{pkg.type}</td>
                    {activeTab === "details" ? (
                      <>
                        <td className="px-6 py-4 text-lg font-semibold text-lime-600">
                          {pkg.durations[selectedDays]?.sharedRoomPrices[selectedRoomType] || "N/A"}
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">{makkahHotel?.name || "N/A"}</div>
                            <div className="text-sm text-gray-500">
                              {makkahHotel?.hasShuttle ? (
                                <div className="flex items-center text-lime-600">
                                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  {makkahHotel.transport}
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2">
                                  <span>Distance: {makkahHotel?.distance || "N/A"}</span>
                                  <span>•</span>
                                  <span>Walking: {makkahHotel?.walkingTime || "N/A"}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">{madinahHotel?.name || "N/A"}</div>
                            <div className="text-sm text-gray-500">
                              {madinahHotel?.hasShuttle ? (
                                <div className="flex items-center text-lime-600">
                                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  {madinahHotel.transport}
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2">
                                  <span>Distance: {madinahHotel?.distance || "N/A"}</span>
                                  <span>•</span>
                                  <span>Walking: {madinahHotel?.walkingTime || "N/A"}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </>
                    ) : (
                      <td className="px-6 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          {packageInclusions.map((inclusion, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-lime-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{inclusion}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PackageComparison;