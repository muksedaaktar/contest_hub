import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/Authcontext';
import logo from '../../../assets/winner.jpg';


const Navbar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar bg-base-200 relative ">
      <div className="navbar-start container mx-auto px-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Home</NavLink></li>
            <li><NavLink to="/all-contests" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>All Contest</NavLink></li>
            <li><NavLink to="/extra" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Extra Section</NavLink></li>
          </ul>
        </div>
        <div className='flex gap-2 items-center mb-2'>
          <img className='w-14 h-14 rounded-2xl' src={logo} alt="Logo" />
          <a className="text-2xl md:text-4xl text-blue-500 font-extrabold">
            <i>Con<span className='text-orange-400'>T</span>est<span className='text-orange-400'>Hub</span></i>
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Home</NavLink></li>
          <li><NavLink to="/all-contests" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>All Contest</NavLink></li>
          <li><NavLink to="/extra" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Extra Section</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end container mx-auto px-5 flex flex-col sm:flex-row gap-2 relative">
        {!user ? (
          <>
            <NavLink 
              to="/login" 
              className="btn bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Login
            </NavLink>
            <NavLink 
              to="/registration" 
              className="btn bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Register
            </NavLink>
          </>
        ) : (
          <div className="relative">
            {/* Profile picture */}
            <img 
              src={user.photoURL || "https://i.ibb.co.com/zVH6VWx6/profile.jpg"} 
              alt={user.displayName || "Profile"} 
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20 py-2">
                <p className="px-4 py-2 font-semibold border-b">{user.displayName || "User"}</p>
                <NavLink 
                  to="/profile" 
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Dashboard
                </NavLink>
                <button 
                  onClick={() => { logout(); setDropdownOpen(false); }} 
                  className="w-full text-left px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
