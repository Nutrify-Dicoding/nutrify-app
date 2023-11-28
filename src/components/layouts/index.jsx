import { useDispatch, useSelector } from 'react-redux';
import AppbarAfterLogin from '../appbar/AppbarAfterLogin';
import AppbarBeforeLogin from '../appbar/AppbarBeforeLogin';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { removeMessage } from '../../redux/slices/authSlice';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const messages = useSelector((state) => state.auth.messages)
	useEffect(() => {
		if (messages.length > 0) {
			messages.forEach((message) => {
				if (message.type === 'success') {
					toast.success(message.text)
				} else if (message.type === 'error') {
					toast.error(message.text)
				} else {
					toast(message.text)
				}
				dispatch(removeMessage(message.text))
			})
		}
	}, [messages, dispatch])
	return (
		<>
			{isAuthenticated ? <AppbarAfterLogin /> : <AppbarBeforeLogin />}
			{children}
			<ToastContainer />
			<Footer />
		</>
	);
};

export default Layout;
