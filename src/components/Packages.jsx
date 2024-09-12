// import { MadinahImage2, MadinahImage3, MadinahImage4 } from '../assets/images';
// import { packages } from '../data/packages';
// import Card from './Card';

// const packageImages = {
//     Budget: MadinahImage4,
//     Deluxe: MadinahImage2,
//     "5-Star": MadinahImage3,
// };

// const Packages = () => {
//     // Use reduce to create a unique set of packages by type
//     const uniquePackages = packages.reduce((acc, pkg) => {
//       // If this type doesn't exist in accumulator, add it
//       if (!acc.some(existingPkg => existingPkg.type === pkg.type)) {
//         acc.push(pkg);
//       }
//       return acc;
//     }, []);

//     return (
//         <div className="mx-auto max-w-7xl p-1 bg-gradient-to-b from-lime-500 to-lime-400 rounded-3xl">
//             <div className="bg-white rounded-3xl p-8">
//                 <h2 className="text-lime-600 text-3xl font-bold text-center mb-12">Our Popular Packages for Every Budget</h2>
//                 <div className="grid grid-col-1 md:grid-cols-3 gap-8">
//                     {uniquePackages.map((pkg) => (
//                         <Card
//                             key={pkg.id}
//                             badge={pkg.type}
//                             image={packageImages[pkg.type]}
//                             title={`${pkg.type} Package ${pkg.date ? ` - ${pkg.date}` : ""}`}
//                             price={`₹${pkg.durations[15].basePrice.toLocaleString()}`}
//                             makkahLocation={`Makkah - Hotel ID: ${pkg.makkahHotelId}`}
//                             madinahLocation={`Madinah - Hotel ID: ${pkg.madinahHotelId}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Packages;

import { Link } from 'react-router-dom';
import { MadinahImage2, MadinahImage3, MadinahImage4 } from '../assets/images';
import { packages } from '../data/packages';
import Card from './Card';

const packageImages = {
    Budget: MadinahImage4,
    Deluxe: MadinahImage2,
    "5-Star": MadinahImage3,
};

const Packages = () => {
    // Use reduce to create a unique set of packages by type
    const uniquePackages = packages.reduce((acc, pkg) => {
        // If this type doesn't exist in accumulator, add it
        if (!acc.some(existingPkg => existingPkg.type === pkg.type)) {
            acc.push(pkg);
        }
        return acc;
    }, []);

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
                            image={packageImages[pkg.type]}
                            title={`${pkg.type} Package ${pkg.date ? ` - ${pkg.date}` : ""}`}
                            price={`₹${pkg.durations[15].basePrice.toLocaleString()}`}
                            makkahLocation={`Makkah - Hotel ID: ${pkg.makkahHotelId}`}
                            madinahLocation={`Madinah - Hotel ID: ${pkg.madinahHotelId}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;
