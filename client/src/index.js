import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';

import axios from 'axios';
import store from './reducers';
window.axios = axios;

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
