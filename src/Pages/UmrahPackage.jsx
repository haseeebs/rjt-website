import React, { useState } from 'react';
import { Check, X, Users, Building, MapPin, Info } from 'lucide-react';
import packages from '../data/packages.js';

const UmrahPackages = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    // <div className="w-full max-w-6xl mx-auto p-4">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg ">
        <div className="overflow-x-auto relative">
          <table className="w-full border-collapse">
            <thead className="bg-white sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="p-4 border border-gray-200 bg-gray-50">
                  <div className="font-bold text-lg text-gray-700">Package Features</div>
                </th>
                {packages.map((pkg) => (
                  <th key={pkg.type} className="p-4 border border-gray-200 bg-white">
                    <div className="space-y-4 group transition-all duration-300">
                      <div className="flex items-center justify-center gap-2">
                        <div className={`p-2 rounded-full bg-${pkg.color}-100 group-hover:bg-${pkg.color}-200 transition-colors`}>
                          {pkg.icon}
                        </div>
                        <h3 className="text-xl font-bold">{pkg.type}</h3>
                      </div>
                      <div className={`text-3xl font-bold text-${pkg.color}-600 group-hover:text-${pkg.color}-700`}>
                        ₹{pkg.price}
                        {/* <span className="text-sm font-normal text-gray-500">/person</span> */}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Hotels Section */}
              <tr className="bg-gray-50">
                <td colSpan={4} className="p-4 border border-gray-200 sticky left-0">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Building className="w-5 h-5" />
                    <span className="font-bold text-lg">Hotels</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 bg-white sticky left-0">
                  <div className="font-medium">Makkah Hotel</div>
                </td>
                {packages.map((pkg) => (
                  <td
                    key={pkg.type}
                    className="p-4 border border-gray-200 transition-all duration-300 hover:bg-gray-50 relative cursor-default"
                    onMouseEnter={() => setActiveTooltip(`makkah-${pkg.type}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="space-y-2">
                      <div className="font-medium text-gray-800 flex items-center gap-2">
                        {pkg.makkahHotel}
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        <MapPin className="w-3 h-3" />
                        {pkg.makkahDistance} from Haram
                      </span>
                    </div>
                    {activeTooltip === `makkah-${pkg.type}` && (
                      <div className="absolute z-20 bg-black text-white text-sm rounded-md py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2">
                        Or Similar
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Madinah Hotel Section */}
              <tr>
                <td className="p-4 border border-gray-200 bg-white sticky left-0">
                  <div className="font-medium">Madinah Hotel</div>
                </td>
                {packages.map((pkg) => (
                  <td
                    key={pkg.type}
                    className="p-4 border border-gray-200 transition-all duration-300 hover:bg-gray-50 relative cursor-default"
                    onMouseEnter={() => setActiveTooltip(`madinah-${pkg.type}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="space-y-2">
                      <div className="font-medium text-gray-800 flex items-center gap-2">
                        {pkg.madinahHotel}
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        <MapPin className="w-3 h-3" />
                        {pkg.madinahDistance} from Masjid al-Nabawi
                      </span>
                    </div>
                    {activeTooltip === `madinah-${pkg.type}` && (
                      <div className="absolute z-20 bg-black text-white text-sm rounded-md py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2">
                        Or Similar
                      </div>
                    )}
                  </td>
                ))}
              </tr>


              {/* Pricing Section */}
              <tr className="bg-gray-50">
                <td colSpan={4} className="p-4 border border-gray-200 sticky left-0">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5" />
                    <span className="font-bold text-lg">Room Pricing</span>
                  </div>
                </td>
              </tr>
              {['quad', 'triple', 'double'].map((roomType) => (
                <tr key={roomType} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border border-gray-200 bg-white sticky left-0">
                    <div className="font-medium capitalize">{roomType} Sharing</div>
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.type} className="p-4 border border-gray-200">
                      <div className={`text-${pkg.color}-600 font-bold text-lg`}>
                        ₹{pkg.sharedRoomPrices[roomType]}
                        <span className="text-xs text-gray-500 ml-1">/person</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}

              {/* Inclusions Section */}
              <tr className="bg-gray-50">
                <td colSpan={4} className="p-4 border border-gray-200 sticky left-0">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-lg">Package Inclusions</span>
                  </div>
                </td>
              </tr>
              {Array.from(new Set(packages.flatMap(pkg => pkg.inclusions))).map((inclusion) => (
                <tr key={inclusion} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border border-gray-200 bg-white sticky left-0">
                    <div className="font-medium">{inclusion}</div>
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.type} className="p-4 border border-gray-200 text-center">
                      {pkg.inclusions.includes(inclusion) ? (
                        <div className="flex items-center justify-center">
                          <div className="p-1 rounded-full bg-green-100">
                            <Check className="text-green-600" size={16} />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <div className="p-1 rounded-full bg-red-100">
                            <X className="text-red-600" size={16} />
                          </div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Exclusions Section */}
              <tr className="bg-gray-50">
                <td colSpan={4} className="p-4 border border-gray-200 sticky left-0">
                  <div className="flex items-center gap-2 text-gray-700">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="font-bold text-lg">Package Exclusions</span>
                  </div>
                </td>
              </tr>
              {Array.from(new Set(packages.flatMap(pkg => pkg.exclusions))).map((exclusion) => (
                <tr key={exclusion} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border border-gray-200 bg-white sticky left-0">
                    <div className="font-medium">{exclusion}</div>
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.type} className="p-4 border border-gray-200 text-center">
                      {pkg.exclusions.includes(exclusion) ? (
                        <div className="flex items-center justify-center">
                          <div className="p-1 rounded-full bg-red-100">
                            <X className="text-red-600" size={16} />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <div className="p-1 rounded-full bg-green-100">
                            <Check className="text-green-600" size={16} />
                          </div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UmrahPackages;