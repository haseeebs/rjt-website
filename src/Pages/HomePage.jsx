import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import WhyChooseUs from '../components/WhyChooseUs';
import authService from '../services/authService';
import { login, logout } from '../store/authSlice';
import HeroSkeleton from '../components/skeleton/HeroSkeleton';
import { setError, setHotels, setLoading, setPackages } from '../store/packageSlice';
import packageServices from '../services/packageService';
import hotelServices from '../services/hotelService';

const HomePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.package.loading);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(setLoading(true));
            try {
                const [packagesResponse, hotelsResponse] = await Promise.all([
                    packageServices.fetchPackages(),
                    hotelServices.fetchHotels()
                ]);
                dispatch(setPackages(packagesResponse.documents));
                dispatch(setHotels(hotelsResponse.documents));
            } catch (error) {
                dispatch(setError(error.message));
            } finally {
                dispatch(setLoading(false));
            }
        };
        fetchData();
    }, [dispatch]);

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
        }
    };

    useEffect(() => {
        init();
    }, [dispatch]);

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