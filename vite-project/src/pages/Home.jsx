import React from "react";
import Navbar from "../components/Navbar";

import HomePosterShowcase from "../components/HomePosterShowcase";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-serif">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[45vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('/images/india-heritage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold text-lime-400 drop-shadow-lg">
            Untold India
          </h1>
          <p className="mt-6 text-2xl md:text-3xl italic text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            "What is not taught in books must be told by voices."
          </p>
          <Link
            to="/topics"
            className="mt-10 inline-block bg-lime-500 hover:bg-lime-600 text-3xl text-black font-semibold px-25 py-5 rounded-full transition transform hover:scale-105"
          >
            Explore Stories
          </Link>
        </div>
      </section>

      {/* Mission Statement with Three Pillars - Enhanced Design */}
      <section className="px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
          {/* Left Side - Mission */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
              Our Mission
            </h2>
            <p className="text-3xl leading-relaxed text-gray-300">
              <span className="text-yellow-300 font-semibold">
                Untold India
              </span>{" "}
              brings forward the struggles, sacrifices, and glory of a
              civilization that stood resilient through centuries. From
              forgotten warriors to unspoken revolutions, this platform revives
              what history chose to omit. These are stories of spirit, strength,
              and soil — voices that deserve to be heard and remembered.
            </p>
          </div>

          {/* Right Side - Three Pillars */}
          <div className="lg:w-1/2 grid gap-6">
            {/* Pillar 1 */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-yellow-500/30 transition duration-300 hover:scale-[1.02] border border-yellow-500/10">
              <h3 className="text-3xl font-semibold text-yellow-400 mb-2">
                Truthful Storytelling
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                We uncover hidden truths — stories of resistance, courage, and
                identity that mainstream history often ignores.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/30 transition duration-300 hover:scale-[1.02] border border-cyan-500/10">
              <h3 className="text-3xl font-semibold text-cyan-400 mb-2">
                Knowledge & Media
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                From books and films to archives and research, we connect each
                story with authentic sources and credible narratives.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/30 transition duration-300 hover:scale-[1.02] border border-pink-500/10">
              <h3 className="text-3xl font-semibold text-pink-400 mb-2">
                Community Voices
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                We invite every voice — historians, citizens, and families — to
                contribute and preserve the heritage of our nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Poster */}
      <HomePosterShowcase />

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-8 text-center text-sm text-gray-400">
        © 2025 Untold India | Preserving Bharat’s Forgotten Truths 🇮🇳
      </footer>
    </div>
  );
};

export default Home;
