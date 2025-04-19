import React, { useContext } from 'react';
import { PosterContext } from '../context/PosterContext';

const PosterGrid = () => {
  const { posters } = useContext(PosterContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-4">
      {posters.map((poster, idx) => (
        <div
          key={idx}
          className="text-center text-white bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-[500px]"
        >
          {/* Image container */}
          <div className="w-full h-[400px] bg-black flex items-center justify-center">
            <img
              src={poster.image}
              alt={poster.title}
              className="w-full h-full object-contain p-4"
            />
          </div>

          {/* Quote */}
          <div className="flex-1 flex items-center justify-center bg-[#0f172a] px-4 py-2">
            <p className="italic text-xs text-gray-300">{poster.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PosterGrid;
