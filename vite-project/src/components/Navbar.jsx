import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-black text-white py-5 px-6 flex justify-between items-center shadow-md">
    <h1 className="text-3xl font-bold text-lime-400">Untold India</h1>
    <div className="space-x-6 text-2xl font-light">
      <Link to="/" className="hover:text-lime-300">Home</Link>
      <Link to="/topics" className="hover:text-lime-300">Explore Stories</Link>
      <Link to="/feedback" className="hover:text-lime-300">Share Your Thoughts</Link>
     
    </div>
  </nav>
);

export default Navbar;
