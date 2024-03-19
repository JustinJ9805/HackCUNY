import React, { useState } from 'react';
import Nav from './shared/navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Jobs from './pages/jobs';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import CreateApplication from './pages/createApplication';
import CreatePost from './pages/createPost';
import RightSideMenu from './shared/rightSideMenu';
import CoverLetter from './pages/Products/CoverLetter';
import Resume from './pages/Products/Resume';
import Footer from './shared/footer';
import Landing from './components/landingPage';

function App() {
  const [column, setColumn] = useState(false);

  const toggleColumn = () => {
    setColumn(prevState => !prevState);
    // keep open for testing
    // setColumn(true);
  };


  return (
    <BrowserRouter>
      <Nav toggleColumn={toggleColumn}/>
      <RightSideMenu hidden={!column}/>
      <div className={`transition-all duration-500 ease-in-out ${column ? 'w-5/6' : 'w-full'}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path='/landing' element={<Landing />} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/createApplication" element={<CreateApplication/>} />
          <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/coverLetter" element={<CoverLetter/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;