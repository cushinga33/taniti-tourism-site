import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import LodgingDining from './pages/LodgingDining';
import Planning from './pages/Planning';
import Transit from './pages/Transit';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/explore"        element={<Explore />} />
          <Route path="/lodging-dining" element={<LodgingDining />} />
          <Route path="/planning"       element={<Planning />} />
          <Route path="/transit"        element={<Transit />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}