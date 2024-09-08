import { MakkahImage } from '../assets/images';
import Card from './Card';

const Packages = () => {
    return (
        <div className="flex-row lg:flex justify-evenly bg-lime-50 items-center px-6 py-32 sm:py-40 lg:px-8">
            <Card
                badge="Economy"
                image={MakkahImage}
                title="Luxury Hajj Package 2024"
                price="₹78,600"
                makkahLocation="Makkah - Lulu Al Sharq or Similar"
                madinahLocation="Madinah - Durrat Al Madinah or Similar"
            />
            <Card
                badge="Deluxe"
                image={MakkahImage}
                title="Luxury Hajj Package 2024"
                price="₹78,600"
                makkahLocation="Makkah - Lulu Al Sharq or Similar"
                madinahLocation="Madinah - Durrat Al Madinah or Similar"
            />
            <Card
                badge="5 Star"
                image={MakkahImage}
                title="Luxury Hajj Package 2024"
                price="₹78,600"
                makkahLocation="Makkah - Lulu Al Sharq or Similar"
                madinahLocation="Madinah - Durrat Al Madinah or Similar"
            />
        </div>
    )
}

export default Packages