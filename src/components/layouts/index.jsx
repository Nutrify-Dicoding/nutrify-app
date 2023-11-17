import AppbarAfterLogin from "../appbar/AppbarAfterLogin";
import AppbarBeforeLogin from "../appbar/AppbarBeforeLogin";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	const isLogin = true;
	return (
		<>
			{isLogin ? <AppbarAfterLogin /> : <AppbarBeforeLogin />}
			{children}
		</>
	);
};

export default Layout;
