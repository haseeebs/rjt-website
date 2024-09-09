import { MadinahImage2, MadinahImage3, MadinahImage4, MakkahImage } from '../assets/images';
import Card from './Card';

const Packages = () => {
    return (
        <div className="mx-auto max-w-7xl p-1 bg-gradient-to-b from-lime-500 to-lime-400 rounded-3xl">
            <div className="bg-white rounded-3xl p-8">
                <h2 className="text-lime-600 text-3xl font-bold text-center mb-12">Our Popular Packages for every budget</h2>
                <div className='grid grid-col-1 md:grid-cols-3 gap-8'>
                    <Card
                        badge="Economy"
                        image={MadinahImage4}
                        title="Luxury Hajj Package 2024"
                        price="₹78,600"
                        makkahLocation="Makkah - Lulu Al Sharq or Similar"
                        madinahLocation="Madinah - Durrat Al Madinah or Similar"
                    />
                    <Card
                        badge="Deluxe"
                        image={MadinahImage2}
                        title="Luxury Hajj Package 2024"
                        price="₹78,600"
                        makkahLocation="Makkah - Lulu Al Sharq or Similar"
                        madinahLocation="Madinah - Durrat Al Madinah or Similar"
                    />
                    <Card
                        badge="5 Star"
                        image={MadinahImage3}
                        title="Luxury Hajj Package 2024"
                        price="₹78,600"
                        makkahLocation="Makkah - Lulu Al Sharq or Similar"
                        madinahLocation="Madinah - Durrat Al Madinah or Similar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Packages