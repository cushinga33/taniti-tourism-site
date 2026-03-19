import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import LodgingDining from './pages/LodgingDining';
import Planning from './pages/Planning';
import Transit from './pages/Transit';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/explore"        element={<Explore />} />
          <Route path="/lodging-dining" element={<LodgingDining />} />
          <Route path="/planning"       element={<Planning />} />
          <Route path="/transit"        element={<Transit />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}