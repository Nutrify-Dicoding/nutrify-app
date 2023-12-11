import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './styles/index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
