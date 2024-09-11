import { useState, useEffect } from 'react';
import { Phone, ArrowLeft, Check, X } from 'lucide-react';
import HotelCard from '../components/HotelCard';
import { useParams } from 'react-router-dom';
import { hotels, packages, commonInclusions } from '../data/packages';

const PackageDetail = () => {
  const { id } = useParams();
  const packageData = packages.find((pkg) => pkg.id === Number(id));
  const makkahHotel = hotels.find((hotel) => hotel.id === packageData.makkahHotelId);
  const madinahHotel = hotels.find((hotel) => hotel.id === packageData.madinahHotelId);

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('15');

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300 ${isHeaderSticky ? 'py-2' : 'py-4'
        }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Wapas Jao
          </a>
          <h1 className={`font-bold transition-all duration-300 ${isHeaderSticky ? 'text-xl' : 'text-2xl'
            }`}>
            {packageData.type} Umrah Package
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8 pb-24">
        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <HotelCard hotel={makkahHotel} />
          <HotelCard hotel={madinahHotel} />
        </div>

        {/* Duration Tabs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex space-x-2 mb-6">
            {Object.keys(packageData.durations).map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedDuration === duration
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
                  }`}
              >
                {duration} Days
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              {selectedDuration} Din ka Package
            </h3>
            <div className="text-3xl font-bold text-blue-600">
              ₹{packageData.durations[selectedDuration].basePrice.toLocaleString('en-IN')}
            </div>
            <p className="text-gray-600">Base Price (Quad Sharing)</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-semibold">Triple Sharing</div>
                <div className="text-lg">
                  ₹{packageData.durations[selectedDuration].sharedRoomPrices.triple.toLocaleString('en-IN')}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-semibold">Double Sharing</div>
                <div className="text-lg">
                  ₹{packageData.durations[selectedDuration].sharedRoomPrices.double.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Specific Package Inclusions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Exclusive Benefits for the {packageData.type} Package</h3>
            {packageData.inclusions.length > 0 ? (
              <>
                <p className="text-gray-600 mb-4">
                  Along with the common features, this package includes the following exclusive benefits:
                </p>
                <ul className="space-y-3">
                  {packageData.inclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-600 mb-4">
                This package doesn’t have any additional inclusions apart from the common features. It’s designed to be budget-friendly while still covering the essentials for a fulfilling Umrah experience.
              </p>
            )}
          </div>

          {/* Specific Package Exclusions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">What’s Not Covered in the {packageData.type} Package</h3>
            {packageData.exclusions.length > 0 ? (
              <>
                <p className="text-gray-600 mb-4">
                  The following services and features are not included in this package:
                </p>
                <ul className="space-y-3">
                  {packageData.exclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <X className="w-5 h-5 text-red-500 mr-3" />
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-600 mb-4">
                Good news! This package doesn’t have any exclusions, meaning you get a complete experience with no hidden surprises.
              </p>
            )}
          </div>
          
        </div>
        {/* Common Inclusions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4">What’s Included in Every Package</h3>
          <p className="text-gray-600 mb-4">
            Every package we offer comes with the following essentials to ensure a smooth and memorable Umrah journey:
          </p>
          <ul className="space-y-3">
            {commonInclusions.map((item) => (
              <li key={item.id} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-3xl font-bold text-blue-600">
              ₹{packageData.durations[selectedDuration].basePrice.toLocaleString('en-IN')}
            </p>
            <p className="text-gray-600">Starting Price</p>
          </div>
          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors">
            <Phone className="w-5 h-5 mr-2" />
            WhatsApp par Puchho
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
