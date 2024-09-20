import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PackageComparison = () => {
  const navigate = useNavigate();
  const { packages, hotels } = useSelector((store) => store.package);

  const [selectedDays, setSelectedDays] = useState(15);
  const [selectedRoomType, setSelectedRoomType] = useState("quad");

  const roomTypes = [
    { value: "quad", label: "Quad Sharing" },
    { value: "triple", label: "Triple Sharing" },
    { value: "double", label: "Double Sharing" }
  ];

  const handlePackageClick = (packageId) => {
    navigate(`/packages/${packageId}`);
  };

  // Check if packages or hotels are empty
  if (!packages || packages.length === 0) {
    return (
      <div className="mx-auto max-w-7xl bg-lime-400 px-4 py-4 rounded-3xl">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h2 className="text-center text-gray-600 text-xl font-semibold">
            No packages available for comparison at the moment. Please check back later.
          </h2>
        </div>
      </div>
    );
  }

  if (!hotels || hotels.length === 0) {
    return (
      <div className="mx-auto max-w-7xl bg-lime-400 px-4 py-4 rounded-3xl">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h2 className="text-center text-gray-600 text-xl font-semibold">
            No hotel data available. Please contact support for assistance.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl bg-lime-400 px-4 py-4 rounded-3xl">
      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Duration Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Duration</label>
            <div className="relative">
              <select
                className="block w-full pl-4 pr-8 py-3 text-base border border-lime-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 bg-white appearance-none"
                value={selectedDays}
                onChange={(e) => setSelectedDays(Number(e.target.value))}
              >
                {[15, 20, 25].map((days) => (
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

          {/* Room Type Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Room Type</label>
            <div className="relative">
              <select
                className="block w-full pl-4 pr-8 py-3 text-base border border-lime-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 bg-white appearance-none"
                value={selectedRoomType}
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                {roomTypes.map((type) => (
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
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-lime-200">
        <div className="h-96 overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b border-lime-200">
                <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Makkah Hotel</th>
                <th className="px-6 py-4 bg-lime-50 text-left text-sm font-semibold text-gray-900">Madinah Hotel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lime-200">
              {packages.map((pkg) => {
                const makkahHotel = hotels.find((hotel) => hotel.$id === pkg.makkahHotelId);
                const madinahHotel = hotels.find((hotel) => hotel.$id === pkg.madinahHotelId);

                return (
                  <tr
                    key={pkg.$id}
                    onClick={() => handlePackageClick(pkg.$id)}
                    className="hover:bg-lime-100 transition-colors duration-150 cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{pkg.type}</td>
                    <td className="px-6 py-4 text-lg font-semibold text-lime-600">
                      ₹{pkg.durations[selectedDays]?.sharedRoomPrices[selectedRoomType] || "N/A"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-medium text-gray-900">{makkahHotel?.name || "N/A"}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-medium text-gray-900">{madinahHotel?.name || "N/A"}</div>
                      </div>
                    </td>
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