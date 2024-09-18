import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import UmrahPackage from '../pages/UmrahPackage';
import CustomizePackage from '../pages/CustomizePackage';
import PackageDetail from '../pages/PackageDetail';
import PackageForm from '../pages/PackageForm';
import HotelForm from '../pages/HotelForm';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/create-package',
                element: <PackageForm />
            },
            {
                path: '/create-hotel',
                element: <HotelForm />
            },
            {
                path: '/umrah-packages',
                element: <UmrahPackage />
            },
            {
                path: '/packages/:id',
                element: <PackageDetail />
            },
            {
                path: '/customize-package',
                element: <CustomizePackage />
            },
            {
                path: '/signup',
                element: <SignupPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
        ]
    }
]);

export default router;