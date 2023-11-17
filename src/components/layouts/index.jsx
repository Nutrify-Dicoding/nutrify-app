import AppbarAfterLogin from '../appbar/AppBarAfterLogin';
import AppbarBeforeLogin from '../appbar/AppBarBeforeLogin';

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
