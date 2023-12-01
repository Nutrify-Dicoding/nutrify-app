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
<<<<<<< HEAD
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
=======
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
>>>>>>> a7977f8286c79f3552225de8600db9ceb87a2bf5
}

export default App;
