import React from 'react';
import Nav from './shared/navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Jobs from './components/jobs';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
