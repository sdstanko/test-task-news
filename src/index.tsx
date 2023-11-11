import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import MainPage from './pages/MainPage/MainPage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
