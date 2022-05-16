import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Appoinment from './Page/Appoinment/Appoinment';
import ContactUs from './Page/ContactUs/ContactUs';
import Home from './Page/Home/Home';
import Reviews from './Page/Reviews/Reviews';
import Navbar from './Page/Sheard/Navbar';
import Login from './Page/userLogin/Login';
import RequireAuth from './Page/userLogin/RequireAuth';
import SignUp from './Page/userLogin/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppoinment from './Page/Dashboard/MyAppoinment';
import MyReview from './Page/Dashboard/MyReview';
import Users from './Page/Dashboard/Users';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoinment" element={<RequireAuth><Appoinment /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppoinment></MyAppoinment>}> </Route>
          <Route path='review' element={<MyReview></MyReview>}> </Route>
          <Route path='users' element={<Users></Users>}> </Route>
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
