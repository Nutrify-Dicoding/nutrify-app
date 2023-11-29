import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Layout from './components/layouts';
import FoodDetail from './pages/FoodDetail';
import Tracking from './pages/Tracking';
import AllTrack from './pages/AllTrack';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Advice from './pages/Advice';
import LoginExample from './pages/LoginExample';
import NotFound from './pages/NotFound';

function App() {
	const auth = useSelector((state) => state.auth)
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={
						auth.isAuthenticated ? <Home /> : <LandingPage />
					} />
					<Route path="/landing-page" element={<LandingPage />} />
					<Route path="/food-detail" element={<FoodDetail />} />
					<Route path="/track" element={<Tracking />} />
					<Route path="/alltrack" element={<AllTrack />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile/edit" element={<EditProfile />} />
					<Route path='/auth/signin' element={<LoginExample />} />
					<Route path="/foods/:food_id" element={<FoodDetail />} />
					<Route path="/advice" element={<Advice />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
