import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout';
import HomePage from '../Pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
        ]
    }
]);

export default router;