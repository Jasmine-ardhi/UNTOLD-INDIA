import React from 'react';
import Navbar from '../components/Navbar';
import PosterGrid from '../components/PosterGrid';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-serif">
      <Navbar />

      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold">Untold India</h1>
        <p className="mt-6 text-xl italic">
          What is not taught in books must be told by voices.
        </p>
      </div>

      <PosterGrid />
    </div>
  );
};

export default Home;
