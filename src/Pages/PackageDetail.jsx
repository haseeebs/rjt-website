import { ArrowLeft, Calendar, Check, Phone, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import { commonInclusions, hotels, packages } from '../data/packages';
import { getWhatsappUrl } from '../utils/whatsappUtils';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const packageData = packages.find((pkg) => pkg.id === Number(id));
  const makkahHotel = hotels.find((hotel) => hotel.id === packageData.makkahHotelId);
  const madinahHotel = hotels.find((hotel) => hotel.id === packageData.madinahHotelId);

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('15');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  console.log(packageData.date);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full bg-white shadow-md transition-all duration-300 
        ${isHeaderSticky ? 'py-2' : 'py-4'}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)} // Navigate to previous page
            className="flex items-center text-lime-600 hover:text-lime-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1
            className={`font-bold text-gray-800 transition-all duration-300 
            ${isHeaderSticky ? 'text-xl' : 'text-2xl'}`}
          >
            {packageData.type} Umrah Package
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8 pb-24">
        {/* Package Summary */}
        <div className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-6 text-white shadow-lg">
          <div className={`grid ${packageData.date ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"} gap-6`}>
            <div className="space-y-2">
              <div className="text-lime-100">Starting From</div>
              <div className="text-4xl font-bold">
                ₹{packageData.durations[selectedDuration].basePrice.toLocaleString('en-IN')}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-lime-100">Duration</div>
              <div className="text-2xl font-semibold flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                {selectedDuration} Days
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-lime-100">Base Occupancy</div>
              <div className="text-2xl font-semibold flex items-center gap-2">
                <Users className="w-6 h-6" />
                Quad Sharing
              </div>
            </div>
            {packageData.date && <div className="space-y-2">
              <div className="text-lime-100">Date</div>
              <div className="text-2xl font-semibold flex items-center gap-2">
                <Users className="w-6 h-6" />
                {packageData.date}
              </div>
            </div>}
          </div>
        </div>
        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <HotelCard hotel={makkahHotel} />
          <HotelCard hotel={madinahHotel} />
        </div>

        {/* Duration Tabs */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Choose Your Duration</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.keys(packageData.durations).map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-6 py-3 rounded-xl font-medium transition-all 
                  ${selectedDuration === duration
                    ? 'bg-lime-500 text-white shadow-lg scale-105'
                    : 'bg-lime-50 text-lime-700 hover:bg-lime-100'
                  }`}
              >
                {duration} Days
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-lime-50 p-4 ronded-xl">
              <div className="font-semibold text-gray-700">Quad Sharing</div>
              <div className="text-xl font-bold text-lime-700">
                ₹{packageData.durations[selectedDuration].basePrice.toLocaleString('en-IN')}
              </div>
            </div>
            <div className="bg-lime-50 p-4 rounded-xl">
              <div className="font-semibold text-gray-700">Triple Sharing</div>
              <div className="text-xl font-bold text-lime-700">
                ₹{packageData.durations[selectedDuration].sharedRoomPrices.triple.toLocaleString('en-IN')}
              </div>
            </div>
            <div className="bg-lime-50 p-4 rounded-xl">
              <div className="font-semibold text-gray-700">Double Sharing</div>
              <div className="text-xl font-bold text-lime-700">
                ₹{packageData.durations[selectedDuration].sharedRoomPrices.double.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Specific Package Inclusions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Package Benefits</h3>
            <p className="text-gray-600 mb-4">
              Along with the common features, this package includes the following exclusive benefits:
            </p>
            {packageData.inclusions.length > 0 ? (
              <ul className="space-y-4">
                {packageData.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-lime-500" />
                    </div>
                    <span className="ml-3 text-gray-600">{item.description}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">
                This package includes all common features for a budget-friendly Umrah experience.
              </p>
            )}
          </div>

          {/* Specific Package Exclusions */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Not Included</h3>
            <p className="text-gray-600 mb-4">
              The following services and features are not included in this package:
            </p>
            {packageData.exclusions.length > 0 ? (
              <ul className="space-y-4">
                {packageData.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="ml-3 text-gray-600">{item.description}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">
                All essential services are included in this comprehensive package.
              </p>
            )}
          </div>
        </div>

        {/* Common Inclusions */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Standard Features</h3>
          <p className="text-gray-600 mb-4">
            Every package we offer comes with the following essentials to ensure a smooth and memorable Umrah journey:
          </p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            {commonInclusions.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-lime-500" />
                </div>
                <span className="ml-3 text-gray-600">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-3xl font-bold text-lime-600">
              ₹{packageData.durations[selectedDuration].basePrice.toLocaleString('en-IN')}
            </p>
            <p className="text-gray-600">Starting Price</p>
          </div>
          <button className="w-full sm:w-auto bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
            <Phone className="w-5 h-5 mr-2" />
            <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp par Puchho</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
