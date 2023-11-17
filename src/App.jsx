import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Layout from './components/layouts';
import FoodDetail from './pages/FoodDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path='/food-detail' element={<FoodDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
