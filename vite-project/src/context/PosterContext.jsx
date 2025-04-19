import React, { createContext, useState, useEffect } from 'react';
import postersData from '../data/posters.json';

export const PosterContext = createContext();

export const PosterProvider = ({ children }) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    setPosters(postersData);
  }, []);

  return (
    <PosterContext.Provider value={{ posters }}>
      {children}
    </PosterContext.Provider>
  );
};
