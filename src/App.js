import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Appoinment from './Page/Appoinment/Appoinment';
import ContactUs from './Page/ContactUs/ContactUs';
import Home from './Page/Home/Home';
import Reviews from './Page/Reviews/Reviews';
import Navbar from './Page/Sheard/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
