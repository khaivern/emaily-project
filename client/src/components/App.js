import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchUser } from '../reducers/authReducer';
import Header from './Header';
import Landing from './Landing';
import Root from '../layouts/root';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Landing />,
            },
            {
                path: '/surveys',
                element: <Dashboard />,
            },
            {
                path: '/surveys/new',
                element: <SurveyNew />,
            },
        ],
    },
]);

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return <RouterProvider router={router} />;
}
