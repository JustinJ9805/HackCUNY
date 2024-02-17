import React from 'react';
import Nav from './shared/navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Jobs from './components/jobs';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import CreateApplication from './components/createApplication';
import CreatePost from './components/createPost';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/createApplication" element={<CreateApplication/>} />
        <Route path="/createPost" element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
