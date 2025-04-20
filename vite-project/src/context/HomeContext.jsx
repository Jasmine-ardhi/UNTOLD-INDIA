import React, { createContext, useState, useEffect } from 'react';
import postersData from '../data/posters.json';

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [homePosters, setHomePosters] = useState([]);

  useEffect(() => {
    setHomePosters(postersData);
  }, []);

  return (
    <HomeContext.Provider value={{ homePosters }}>
      {children}
    </HomeContext.Provider>
  );
};
