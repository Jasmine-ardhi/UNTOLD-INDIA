import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-black text-white py-4 flex justify-center space-x-10 text-lg font-light">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/topics" className="hover:underline">Topics</Link>
    <Link to="/submit" className="hover:underline">Submit Story</Link>
    <Link to="/media" className="hover:underline">Media Recommendation</Link>
  </nav>
);

export default Navbar;
