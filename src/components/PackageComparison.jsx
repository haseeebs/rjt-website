import { useState } from 'react';
import packages from '../data/packages';

const PackageComparison = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [selectedDuration, setSelectedDuration] = useState(15);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Package Comparison</h1>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === 'details'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === 'inclusions'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('inclusions')}
          >
            Inclusions/Exclusions
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-700">Duration:</span>
          {[15, 20, 25].map((days) => (
            <button
              key={days}
              className={`px-4 py-2 rounded ${
                selectedDuration === days
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedDuration(days)}
            >
              {days} Days
            </button>
          ))}
        </div>
      </div>

      <div className="border rounded-md h-[30rem] overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b">
              <th className="w-[100px] px-4 py-2 text-left">Type</th>
              {activeTab === 'details' ? (
                <>
                  <th className="px-4 py-2 text-left">Base Price</th>
                  <th className="px-4 py-2 text-left">Makkah Hotel</th>
                  <th className="px-4 py-2 text-left">Madinah Hotel</th>
                  <th className="px-4 py-2 text-left">Shared Room Prices</th>
                </>
              ) : (
                <>
                  <th className="px-4 py-2 text-left">Inclusions</th>
                  <th className="px-4 py-2 text-left">Exclusions</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.type} className="border-b hover:bg-gray-50">
                <td className="px-4 py-14 font-medium">{pkg.type}</td>
                {activeTab === 'details' ? (
                  <>
                    <td className="px-4 py-2">₹{pkg.durations[selectedDuration].basePrice}</td>
                    <td className="px-4 py-2">
                      {pkg.makkahHotel}
                      <br />
                      <span className="text-sm text-gray-500">
                        ({pkg.makkahDistance})
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {pkg.madinahHotel}
                      <br />
                      <span className="text-sm text-gray-500">
                        ({pkg.madinahDistance})
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <ul className="space-y-1">
                        <li>Quad: ₹{pkg.durations[selectedDuration].sharedRoomPrices.quad}</li>
                        <li>Triple: ₹{pkg.durations[selectedDuration].sharedRoomPrices.triple}</li>
                        <li>Double: ₹{pkg.durations[selectedDuration].sharedRoomPrices.double}</li>
                      </ul>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-2">
                      <ul className="list-disc pl-4">
                        {pkg.inclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-2">
                      <ul className="list-disc pl-4">
                        {pkg.exclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageComparison;