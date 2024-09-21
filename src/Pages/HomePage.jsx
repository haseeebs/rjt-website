import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import WhyChooseUs from '../components/WhyChooseUs';
import HeroSkeleton from '../components/skeleton/HeroSkeleton';

const HomePage = () => {
    const isLoading = useSelector((state) => state.package.loading);

    if (isLoading) {
        return <HeroSkeleton />;
    }

    return (
        <div>
            <Hero />
            <Packages />
            <WhyChooseUs />
        </div>
    );
};

export default HomePage;