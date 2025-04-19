import React from 'react';
import Home from './pages/Home';
import { PosterProvider } from './context/PosterContext';
import SearchFields from './components/SearchFields';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <PosterProvider>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/topics" element={<SearchFields/>}/>
      </Routes>
      </BrowserRouter>
      
    </PosterProvider>
  );
};

export default App;
