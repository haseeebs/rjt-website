import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import WhyChooseUs from '../components/WhyChooseUs';
import authService from '../services/authService';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';
import HeroSkeleton from '../components/skeleton/HeroSkeleton';

const HomePage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const init = async () => {
        try {
            const userData = await authService.getCurrentUser();
            if (userData) {
                dispatch(login(userData));
            } else {
                dispatch(logout());
            }
        } catch (error) {
            console.error("Auth check failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        init();
    }, []);

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