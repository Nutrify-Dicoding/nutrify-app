import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/landingPage';
import Layout from './components/layouts';
import FoodDetail from './pages/FoodDetail';
import Tracking from './pages/Tracking';
import AllTrack from './pages/AllTrack';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Advice from './pages/Advice';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/landing-page" element={<LandingPage />} />
					<Route path="/food-detail" element={<FoodDetail />} />
					<Route path="track" element={<Tracking />} />
					<Route path="alltrack" element={<AllTrack />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/edit-profile" element={<EditProfile />} />
					<Route path="/advice" element={<Advice />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
