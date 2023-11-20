import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/landingPage';
import Layout from './components/layouts';
import FoodDetail from './pages/FoodDetail';
import Tracking from './pages/Tracking';

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/landing-page" element={<LandingPage />} />
						<Route path="/food-detail" element={<FoodDetail />} />
						<Route path="track" element={<Tracking />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
