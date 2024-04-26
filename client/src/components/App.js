import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../layouts/root';
import { fetchUser } from '../reducers/authReducer';
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './Surveys/SurveyNew';


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
