import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/landingPage';
import Layout from './components/layouts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing-page" element={<LandingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
