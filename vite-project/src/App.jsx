import React from 'react';
import Home from './pages/Home';

import { PosterProvider } from './context/PosterContext'; 
import SearchFields from './components/SearchFields';
import TopicDetail from './components/TopicDetail'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  return (
    
      <PosterProvider> 
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<SearchFields />} />
            <Route path="/topic/:id" element={<TopicDetail />} />
            <Route path="/feedback" element={<FeedbackForm />} />
          </Routes>
        </BrowserRouter>
      </PosterProvider>
   
  );
};

export default App;
