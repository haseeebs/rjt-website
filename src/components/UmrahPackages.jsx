import { useState } from 'react';
import { Phone, Mail, Star } from 'lucide-react';

const UmrahPackages = () => {
    const [selectedPackage, setSelectedPackage] = useState('economy');

    const packages = {
        economy: {
            title: 'Economy Package',
            price: '2,999',
            features: ['15 Days Trip', '3 Star Hotel', 'Basic Transport', 'Visa Processing', 'Basic Meals']
        },
        standard: {
            title: 'Standard Package',
            price: '3,999',
            features: ['15 Days Trip', '4 Star Hotel', 'Private Transport', 'Visa Processing', 'Full Board Meals']
        },
        premium: {
            title: 'Premium Package',
            price: '4,999',
            features: ['15 Days Trip', '5 Star Hotel', 'Luxury Transport', 'Express Visa', 'Premium Dining']
        }
    };

    return (
        <div className="min-h-screen bg-lime-400">
            {/* Hero Section */}
            <div className="relative">
                <div className="bg-black/50 absolute inset-0" />
                <div className="relative container mx-auto px-4 py-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Begin Your Sacred Journey
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-2xl">
                        Experience a blessed Umrah journey with our carefully curated packages designed for your spiritual fulfillment
                    </p>
                    <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition">
                        Book Your Package
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">10,000+</h3>
                        <p className="text-gray-600">Satisfied Pilgrims</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">15+</h3>
                        <p className="text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">24/7</h3>
                        <p className="text-gray-600">Support Available</p>
                    </div>
                </div>
            </div>

            {/* Package Selection */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(packages).map(([key, pack]) => (
                        <div
                            key={key}
                            className={`bg-white rounded-lg p-6 shadow-lg transition-transform hover:scale-105 ${selectedPackage === key ? 'ring-2 ring-black' : ''
                                }`}
                            onClick={() => setSelectedPackage(key)}
                        >
                            <h3 className="text-2xl font-bold mb-4">{pack.title}</h3>
                            <p className="text-4xl font-bold mb-6">${pack.price}</p>
                            <ul className="space-y-3">
                                {pack.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <Star className="w-5 h-5 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                                Select Package
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="bg-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                        <button className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>WhatsApp</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg">
                            <Phone className="w-5 h-5" />
                            <span>Call Us</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg">
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UmrahPackages;