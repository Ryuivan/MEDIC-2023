import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/HOME/Navbar/Navbar';
import Home from './Components/HOME/Home';
import About from './Components/ABOUT/About';
import Footer from './Components/HOME/Footer/Footer';
import Proker from './Components/PROKER/Proker';
import Gallery from './Components/GALLERY/Gallery';
import ScrollToTop from './utils/ScrollToTop';
import Sertijab from './Components/GALLERY/Sertijab/Sertijab';
import Makaroni from './Components/GALLERY/Makaroni/Makaroni';
import Tofu1 from './Components/GALLERY/TOFU 1/Tofu1';
import Tofu2 from './Components/GALLERY/TOFU 2/Tofu2';
import TofuPmi from './Components/GALLERY/TOFU PMI/TofuPmi';
import Tropicana from './Components/GALLERY/Tropicana/Tropicana';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/proker' element={<Proker />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/Sertijab' element={<Sertijab />} />
        <Route path='/gallery/Makaroni' element={<Makaroni />} />
        <Route path='/gallery/TOFU 1' element={<Tofu1 />} />
        <Route path='/gallery/TOFU 2' element={<Tofu2 />} />
        <Route path='/gallery/Beat Hypertension' element={<Tropicana />} />
        <Route path='/gallery/TOFU PMI' element={<TofuPmi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
