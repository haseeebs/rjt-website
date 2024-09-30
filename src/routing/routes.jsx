import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const PackageDetail = lazy(() => import('../pages/PackageDetail'));
const UmrahPackage = lazy(() => import('../pages/Packages'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const ExtraDataFormPage = lazy(() => import('../pages/Admin/ExtraDataFormPage'));
const PackageForm = lazy(() => import('../pages/Admin/PackageForm'));
const HotelForm = lazy(() => import('../pages/Admin/HotelForm'));
const LoginPage = lazy(() => import('../pages/Admin/LoginPage'));
const HotelList = lazy(() => import('../pages/Admin/HotelList'));
const ImageList = lazy(() => import('../pages/Admin/ImageList'));
import AdminNotifications from '../pages/Admin/AdminNotifications';

// Imports for core components
import Layout from '../pages/Layout';
import PrivateRoute from '../pages/PrivateRoute';
import LazyWrapper from '../components/LoadingFallback';

import UmrahPackageSkeleton from '../components/skeleton/UmrahPackageSkeleton';
import HeroSkeleton from '../components/skeleton/HeroSkeleton';
import UmrahPackageCustomizationSkeleton from '../components/skeleton/UmrahPackageCustomizationSkeleton';
import HajjUmrahPackageSkeleton from '../components/skeleton/HajjUmrahPackageSkeleton';

const CustomizePackage = lazy(() => import('../pages/Customize/CustomizePackage'));
import CustomizePackageRequests from '../pages/Customize/CustomizePackageRequests';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: (<Suspense fallback={<HeroSkeleton />}>
                    <HomePage />
                </Suspense>)
            },
            {
                path: 'packages',
                element: (<Suspense fallback={<UmrahPackageSkeleton />}>
                    <UmrahPackage />
                </Suspense>)
            },
            {
                path: 'customize-package',
                element: (<Suspense fallback={<UmrahPackageCustomizationSkeleton />}>
                    <CustomizePackage />
                </Suspense>)
            },
            {
                path: 'packages/:id',
                element: (<Suspense fallback={<HajjUmrahPackageSkeleton />}>
                    <PackageDetail />
                </Suspense>)
            },
            {
                path: 'login',
                element: <LazyWrapper><LoginPage /></LazyWrapper>
            },
            {
                path: '',
                element: <PrivateRoute />,
                children: [
                    {
                        path: 'create-package',
                        element: <LazyWrapper><PackageForm /></LazyWrapper>
                    },
                    {
                        path: 'edit-package/:id',
                        element: <LazyWrapper><PackageForm /></LazyWrapper>
                    },
                    {
                        path: 'create-hotel',
                        element: <LazyWrapper><HotelForm /></LazyWrapper>
                    },
                    {
                        path: 'edit-hotel/:id',
                        element: <LazyWrapper><HotelForm /></LazyWrapper>
                    },
                    {
                        path: 'hotel-lists',
                        element: <LazyWrapper><HotelList /></LazyWrapper>
                    },
                    {
                        path: 'add-extra-details',
                        element: <LazyWrapper><ExtraDataFormPage /></LazyWrapper>
                    },
                    {
                        path: 'image-lists',
                        element: <LazyWrapper><ImageList /></LazyWrapper>
                    },
                    {
                        path: 'customize-package-requests',
                        element: <LazyWrapper><CustomizePackageRequests /></LazyWrapper>
                    },
                    {
                        path: 'add-notification',
                        element: <LazyWrapper><AdminNotifications /></LazyWrapper>
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

export default router;