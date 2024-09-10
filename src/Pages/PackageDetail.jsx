import { useState, useEffect } from 'react';
import { ArrowLeft, Star, MapPin, Clock, Bus, Check, X, Phone } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { inclusions, packages } from '../data/packages';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [packageData, setPackageData] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState('15');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPackage = packages.find(pkg => pkg.id === parseInt(id, 10));
    setPackageData(foundPackage || null);
    setLoading(false);
  }, [id]);

  const handleBack = () => navigate(-1);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Salaam, mujhe ${packageData?.type} Umrah Package ke baare mein jankari chahiye.`
    );
    window.open(`https://wa.me/9340341878?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading package details...</p>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Package Not Found</h2>
          <p className="text-gray-600 mb-4">Sorry, we couldn't find the package you're looking for.</p>
          <button
            onClick={handleBack}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Wapas Jao
          </button>
          <h1 className="text-xl font-bold">{packageData.type} Umrah Package</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Hotel Details */}
        {packageData.makkahHotel && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-2">{packageData.makkahHotel.name}</h2>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{packageData.makkahHotel.city}, {packageData.makkahHotel.distance} from Haram</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span>{packageData.makkahHotel.category}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-500 mr-2" />
                <span>{packageData.makkahHotel.walkingTime} walk to Haram</span>
              </div>
              {packageData.makkahHotel.hasShuttle && (
                <div className="flex items-center">
                  <Bus className="w-4 h-4 text-gray-500 mr-2" />
                  <span>{packageData.makkahHotel.transport}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Duration Tabs */}
        {packageData.durations && (
          <div className="bg-white rounded-lg shadow">
            <div className="grid grid-cols-3">
              {Object.keys(packageData.durations).map(duration => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`py-3 text-center ${selectedDuration === duration
                      ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {duration} Din
                </button>
              ))}
            </div>
            <div className="p-6">
              <p className="text-2xl font-bold">
                ₹{packageData.durations[selectedDuration]?.basePrice.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-500 mt-1">Base Price (Quad Sharing)</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-sm">
                  Triple Sharing: ₹{packageData.durations[selectedDuration]?.sharedRoomPrices?.triple.toLocaleString('en-IN')}
                </div>
                <div className="text-sm">
                  Double Sharing: ₹{packageData.durations[selectedDuration]?.sharedRoomPrices?.double.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Inclusions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-4">Isme Kya Kya Milega?</h3>
            <ul className="space-y-3">
              {packageData.inclusions.map(item => (
                <li key={item?.id || Math.random()} className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>{item?.description || 'Details not available'}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-4">Isme Kya Nahi Milega?</h3>
            <ul className="space-y-3">
              {packageData.exclusions.map(item => (
                <li key={item?.id || Math.random()} className="flex items-center">
                  <X className="w-4 h-4 text-red-500 mr-2" />
                  <span>{item?.description || 'Details not available'}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      {packageData.durations && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold">
                ₹{packageData.durations[selectedDuration]?.basePrice.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-500">Starting Price</p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp par Puchho
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetail;
