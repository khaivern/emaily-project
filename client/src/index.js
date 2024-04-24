import { configureStore } from '@reduxjs/toolkit';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import authReducer from './reducers/authReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
