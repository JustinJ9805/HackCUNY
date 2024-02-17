import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [hover, setHover] = useState('')
  return (
    <nav className='border-b-2 shadow-sm pb-2 pt-1'>
      <ul className='flex justify-end pr-8'>
        <li onMouseEnter={() => setHover('home')} onMouseLeave={() => setHover('')} className={hover === 'home' ? 'bg-gray-200 px-4 rounded-lg':'px-4'}>
          <Link to="/" onClick={() => setActive('home')} className={active === 'home' ? 'text-purple-400' : 'text-gray-400'}>
            <HomeIcon className={active === 'home' ? 'text-purple-400' : 'text-gray-400'}/>
            <span>Home</span>
          </Link>
        </li>
        <li onMouseEnter={() => setHover('profile')} onMouseLeave={() => setHover('')} className={hover === 'profile' ? 'bg-gray-200 px-4 rounded-lg':'px-4'}>
          <Link to="/profile" onClick={() => setActive('profile')} className={active === 'profile' ? 'text-purple-400' : 'text-gray-400'}>
            <AccountCircleIcon className={active === 'profile' ? 'text-purple-400' : 'text-gray-400'} />
            <span>Profile</span>
          </Link>
        </li>
        <li onMouseEnter={() => setHover('jobs')} onMouseLeave={() => setHover('')} className={hover === 'jobs' ? 'bg-gray-200 px-4 rounded-lg':'px-4'}>
          <Link to="/jobs" onClick={() => setActive('jobs')} className={active === 'jobs' ? 'text-purple-400' : 'text-gray-400'}>
            <WorkIcon className={active === 'jobs' ? 'text-purple-400' : 'text-gray-400'}/>
            <span>Jobs</span>
          </Link>
        </li>
        <span className='border-r-2'></span>
        <li className='ml-2'>
          <Link to="/signIn">
            <button className='rounded-lg px-4 text-gray-200 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 '>Sign In</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
