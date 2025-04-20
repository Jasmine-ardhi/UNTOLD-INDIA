import React, { createContext, useState, useEffect } from 'react';
import posterData from '../data/posterData.json';

export const PosterContext = createContext();

export const PosterProvider = ({ children }) => {
  const [topicsPosters, setTopicsPosters] = useState([]);

  useEffect(() => {
    setTopicsPosters(posterData);
  }, []);

  return (
    <PosterContext.Provider value={{ topicsPosters }}>
      {children}
    </PosterContext.Provider>
  );
};
