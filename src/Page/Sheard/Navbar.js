import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)

    const handelSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate('/')
    }

    const manuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appoinment'>Appoinment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contactUs'>Contact Us</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button onClick={handelSignOut} className='btn btn-ghost'>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className=" max-w-7xl mx-auto navbar bg-base-100 flex justify-between px-12">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-Sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;