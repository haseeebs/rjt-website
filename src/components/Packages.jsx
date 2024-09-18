import { useEffect, useState } from 'react';
import { hotels } from '../data/packages';
import Card from './Card';
import packageServices from '../services/packageService';
import PackagesSkeleton from './skeleton/CardSkeleton';

const Packages = () => {
    const [uniquePackages, setUniquePackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // Function to get hotel name by ID
    const getHotelName = (hotelId) => {
        const hotel = hotels.find(h => h.id === hotelId);
        return hotel ? hotel.name : 'Hotel name not found';
    };

    const fetchPackages = async () => {
        try {
            const fetchedPackages = await packageServices.fetchUniqueTypePackages();
            setUniquePackages(fetchedPackages);
        } catch (error) {
            console.error('Failed to fetch packages:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPackages();
    }, [])

    if (isLoading) {
        return <PackagesSkeleton />;
    }

    return (
        <div className="mx-auto max-w-7xl p-1 bg-gradient-to-b from-lime-500 to-lime-400 rounded-3xl">
            <div className="bg-white rounded-3xl p-8">
                <h2 className="text-lime-600 text-3xl font-bold text-center mb-12">Our Popular Packages for Every Budget</h2>
                <div className="grid grid-col-1 md:grid-cols-3 gap-8">
                    {uniquePackages.map((pkg) => (
                        <Card
                            key={pkg.id}
                            packageId={pkg.id}
                            badge={pkg.type}
                            image={pkg.image}
                            title={`${pkg.type} Package ${pkg.date ? ` - ${pkg.date}` : ""}`}
                            price={`₹${pkg.durations[15].basePrice.toLocaleString()}`}
                            makkahLocation={`Makkah - ${getHotelName(pkg.makkahHotelId)}`}
                            madinahLocation={`Madinah - ${getHotelName(pkg.madinahHotelId)}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;