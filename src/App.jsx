import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Layout from './components/layouts';
import FoodDetail from './pages/FoodDetail';
import Tracking from './pages/Tracking';
import AllTrack from './pages/AllTrack';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Advice from './pages/Advice';
import ChangePassword from './pages/changePassword';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Favorite from './pages/Favorite';

function App() {
	const auth = useSelector((state) => state.auth);
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={auth.isAuthenticated ? <Home /> : <LandingPage />} />
					<Route path="/home" element={auth.isAuthenticated ? <Home /> : <LandingPage />} />
					<Route path="/landing-page" element={<LandingPage />} />
					<Route path="/food-detail" element={<FoodDetail />} />
					<Route path="/track" element={<Tracking />} />
					<Route path="/alltrack" element={<AllTrack />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile/edit" element={<EditProfile />} />
					<Route path="/foods/:food_id" element={<FoodDetail />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/profile/ubah-password" element={<ChangePassword />} />
					<Route path="/advice" element={<Advice />} />
					<Route path="/favorite" element={<Favorite />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
