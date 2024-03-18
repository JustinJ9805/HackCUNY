import React, { useState } from 'react';
import Nav from './shared/navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Jobs from './components/jobs';
import Landing from './components/landingPage'
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import CreateApplication from './components/createApplication';
import CreatePost from './components/createPost';
import RightSideMenu from './shared/rightSideMenu';

function App() {
  const [column, setColumn] = useState(false);

  const toggleColumn = () => {
    setColumn(prevState => !prevState);
  };

  const closeColumn = () => {
    setColumn(false);
  }

  return (
    <BrowserRouter>
      <Nav toggleColumn={toggleColumn}/>
      <RightSideMenu hidden={!column}/>
      <div className={`transition-all duration-500 ease-in-out ${column ? 'w-3/4' :'w-full'}`}>
        <Routes>
          <Route path="/" element={<Home columnStatus={column} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path='/landing' element={<Landing />} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/createApplication" element={<CreateApplication/>} />
          <Route path="/createPost" element={<CreatePost/>} />
        </Routes>
      </div>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;