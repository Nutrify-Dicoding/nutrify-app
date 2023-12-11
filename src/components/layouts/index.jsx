import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { errorInterceptor } from '../../utils/axiosInterceptor';
import AppbarAfterLogin from '../appbar/AppbarAfterLogin';
import AppbarBeforeLogin from '../appbar/AppbarBeforeLogin';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        axios.interceptors.response.use(null, (err) => errorInterceptor(err, { navigate }));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [navigate]);
    return (
        <>
            {isAuthenticated ? <AppbarAfterLogin /> : <AppbarBeforeLogin />}
            {children}
            <ToastContainer />
            <Footer />
        </>
    );
}

export default Layout;
