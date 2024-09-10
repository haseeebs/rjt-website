import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout';
import HomePage from '../Pages/HomePage';
import UmrahPackage from '../Pages/UmrahPackage';
import CustomizePackage from '../Pages/CustomizePackage';
import PackageDetail from '../Pages/PackageDetail';

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
        ]
    }
]);

export default router;