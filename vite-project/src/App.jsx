import React from 'react';
import Home from './pages/Home';
import { PosterProvider } from './context/PosterContext';

const App = () => {
  return (
    <PosterProvider>
      <Home />
    </PosterProvider>
  );
};

export default App;
