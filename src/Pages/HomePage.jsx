import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import UniquePackages from '../components/UniquePackages';
import HeroSkeleton from '../components/skeleton/HeroSkeleton';
import ReelCarousel from './ReelCarousel';
import CTA from '../components/CTA';

const HomePage = () => {
    const isLoading = useSelector((state) => state.package.loading);

    if (isLoading) {
        return <HeroSkeleton />;
    }

    return (
        <div className='-mt-20'>
            <Hero />
            <UniquePackages />
            <ReelCarousel />
            <CTA />
        </div>
    );
};

export default HomePage;