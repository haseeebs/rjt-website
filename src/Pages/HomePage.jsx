import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import WhyChooseUs from '../components/WhyChooseUs';
import authService from '../services/authService';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        }
    };

    useEffect(() => {
        init();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
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