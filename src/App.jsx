import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Layout from './components/layouts';
import FoodDetail from './pages/FoodDetail';
import Tracking from './pages/Tracking';
import AllTrack from './pages/AllTrack';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Advice from './pages/Advice';
import ChangePassword from './pages/ChangePassword';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Favorite from './pages/Favorite';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPassword from './pages/ForgetPassword';

function App() {
	const auth = useSelector((state) => state.auth);
	return (
		<BrowserRouter>
			<ToastContainer />
			<Routes>
				<Route
					path="/"
					element={
						auth.isAuthenticated ? (
							<Layout>
								<Home />
							</Layout>
						) : (
							<Layout>
								<LandingPage />
							</Layout>
						)
					}
				/>
				<Route
					path="/food-detail"
					element={
						<Layout>
							<FoodDetail />
						</Layout>
					}
				/>
				<Route
					path="/track"
					element={
						<Layout>
							<Tracking />
						</Layout>
					}
				/>
				<Route
					path="/alltrack"
					element={
						<Layout>
							<AllTrack />
						</Layout>
					}
				/>
				<Route
					path="/profile"
					element={
						<Layout>
							<Profile />
						</Layout>
					}
				/>
				<Route
					path="/profile/edit"
					element={
						<Layout>
							<EditProfile />
						</Layout>
					}
				/>
				<Route
					path="/profile/ubah-password"
					element={
						<Layout>
							<ChangePassword />
						</Layout>
					}
				/>
				<Route
					path="/foods/:food_id"
					element={
						<Layout>
							<FoodDetail />
						</Layout>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route
					path="/advice"
					element={
						<Layout>
							<Advice />
						</Layout>
					}
				/>
				<Route
					path="/favorite"
					element={
						<Layout>
							<Favorite />
						</Layout>
					}
				/>
				<Route
					path="/reset-password"
					element={
							<ForgetPassword />
					}
				/>
				<Route
					path="*"
					element={
						<Layout>
							<NotFound />
						</Layout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
