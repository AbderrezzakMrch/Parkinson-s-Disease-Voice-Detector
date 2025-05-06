import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="container flex items-center justify-center p-4 mx-auto">
        <Link 
          to="/" 
          className=" text-white px-3 py-2 mx-1 sm:mx-3 border-b-2 hover:text-amber-100 font-bold border-blue-500 text-sm sm:text-base"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-white px-3 py-2 mx-1 sm:mx-3 border-b-2 hover:text-amber-100 font-bold border-blue-500 text-sm sm:text-base"
        >
          About
        </Link>
        <Link 
          to="/login" 
          className="text-white px-3 py-2 mx-1 sm:mx-3 border-b-2 hover:text-amber-100 font-bold border-blue-500 text-sm sm:text-base"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;