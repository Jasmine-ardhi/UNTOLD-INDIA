import React from 'react';

const Navbar = () => (
  <nav className="bg-black text-white py-4 flex justify-center space-x-10 text-lg font-light">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">Search Fields</a>
    <a href="#" className="hover:underline">Submit Story</a>
    <a href="#" className="hover:underline">Media Recommendation</a>
  </nav>
);

export default Navbar;