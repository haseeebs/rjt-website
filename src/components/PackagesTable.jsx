import { useState } from 'react';
import { Check, X, Users, Building } from 'lucide-react';
import packages from '../data/packages';
import HotelSection from './HotelSection';

const PackagesTable = () => {
    const [activeTooltip, setActiveTooltip] = useState(null);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                        <div className="font-bold text-lg text-gray-700">Package Features</div>
                                    </th>
                                    {packages.map((pkg) => (
                                        <th
                                            key={pkg.type}
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 backdrop-blur backdrop-filter"
                                        >
                                            <div className="space-y-4 group transition-all duration-300">
                                                <h3 className="text-xl font-bold">{pkg.type}</h3>
                                                <div className={`text-3xl font-bold text-${pkg.color}-600 group-hover:text-${pkg.color}-700`}>
                                                    ₹{pkg.price}
                                                </div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {/* Hotels Section Header */}
                                <tr className="bg-gray-50">
                                    <td colSpan={4} className="sticky left-0 border-b border-gray-300 py-3.5 pl-4 pr-3 text-left sm:pl-6 lg:pl-8">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Building className="w-5 h-5" />
                                            <span className="font-bold text-lg">Hotels</span>
                                        </div>
                                    </td>
                                </tr>

                                {/* Render Makkah Hotel Section */}
                                <HotelSection
                                    title="Makkah Hotel"
                                    hotelKey="makkahHotel"
                                    distanceKey="makkahDistance"
                                    packages={packages}
                                    activeTooltip={activeTooltip}
                                    setActiveTooltip={setActiveTooltip}
                                />

                                {/* Render Madinah Hotel Section */}
                                <HotelSection
                                    title="Madinah Hotel"
                                    hotelKey="madinahHotel"
                                    distanceKey="madinahDistance"
                                    packages={packages}
                                    activeTooltip={activeTooltip}
                                    setActiveTooltip={setActiveTooltip}
                                />

                                {/* Pricing Section */}
                                <tr className="bg-gray-50">
                                    <td colSpan={4} className="sticky left-0 border-b border-gray-300 py-3.5 pl-4 pr-3 text-left sm:pl-6 lg:pl-8">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Users className="w-5 h-5" />
                                            <span className="font-bold text-lg">Room Pricing</span>
                                        </div>
                                    </td>
                                </tr>
                                {['quad', 'triple', 'double'].map((roomType) => (
                                    <tr key={roomType} className="hover:bg-gray-50 transition-colors">
                                        <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            <div className="font-medium capitalize">{roomType} Sharing</div>
                                        </td>
                                        {packages.map((pkg) => (
                                            <td key={pkg.type} className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
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
                                    <td colSpan={4} className="sticky left-0 border-b border-gray-300 py-3.5 pl-4 pr-3 text-left sm:pl-6 lg:pl-8">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Check className="w-5 h-5 text-green-500" />
                                            <span className="font-bold text-lg">Package Inclusions</span>
                                        </div>
                                    </td>
                                </tr>
                                {Array.from(new Set(packages.flatMap(pkg => pkg.inclusions))).map((inclusion) => (
                                    <tr key={inclusion} className="hover:bg-gray-50 transition-colors">
                                        <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            <div className="font-medium">{inclusion}</div>
                                        </td>
                                        {packages.map((pkg) => (
                                            <td key={pkg.type} className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 text-center">
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
        </div>
    );
};

export default PackagesTable;