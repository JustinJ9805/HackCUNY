import React from 'react';
import Nav from './shared/navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Jobs from './components/jobs';
import SignIn from './components/signIn';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signIn" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
