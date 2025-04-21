import React, { createContext, useState, useEffect } from 'react';

export const PosterContext = createContext();

export const PosterProvider = ({ children }) => {
  const [topicsPosters, setTopicsPosters] = useState([]);

  useEffect(() => {
    
    fetch('/posterData.json')
      .then(response => response.json())
      .then(data => setTopicsPosters(data))
      .catch(error => console.error('Error fetching poster data:', error));
  }, []);

  return (
    <PosterContext.Provider value={{ topicsPosters }}>
      {children}
    </PosterContext.Provider>
  );
};
