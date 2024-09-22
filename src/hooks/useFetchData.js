import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setHotels, setLoading, setPackages } from '../store/packageSlice';
import packageServices from '../services/packageService';
import hotelServices from '../services/hotelService';

const useFetchData = () => {
    const dispatch = useDispatch();
    const { packages, hotels } = useSelector(store => store.package);

    useEffect(() => {
        if (packages.length > 0 && hotels.length > 0) {
            console.log("Data already exists, no need to fetch...");
            return;
        }
        // return console.log("Data nahi hai ree, we need to fetch...");

        const fetchData = async () => {
            dispatch(setLoading(true));
            try {
                const [packagesResponse, hotelsResponse] = await Promise.all([
                    packageServices.fetchPackages(),
                    hotelServices.fetchHotels(),
                ]);

                // Parse and structure the data
                const parsedPackages = packagesResponse.documents.map(pkg => {
                    try {
                        return {
                            ...pkg,
                            durations: pkg.durations.map(duration => JSON.parse(duration)),
                            inclusions: pkg.inclusions.map(inc => JSON.parse(inc).description),
                            exclusions: pkg.exclusions.map(exc => JSON.parse(exc).description),
                        };
                    } catch (error) {
                        console.error('Error parsing package data:', error);
                        return pkg;
                    }
                });

                dispatch(setPackages(parsedPackages));
                dispatch(setHotels(hotelsResponse.documents));
            } catch (error) {
                console.error('Error fetching home data:', error);
                dispatch(setError(error.message));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchData();
    }, [dispatch]);
};

export default useFetchData;