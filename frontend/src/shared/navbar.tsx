import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
interface NavbarProps {
  toggleColumn: () => void;
}
const navigation = [
  { name: 'Home', href: '/',  current: true },
  { name: 'Profile', href: '/profile',  current: false },
  { name: 'Jobs', href: '/jobs', current: false },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Navbar: React.FC<NavbarProps> = ({ toggleColumn }) => {
  const [active, setActive] = useState('home')
  const [hover, setHover] = useState('')
  return (
    <div className='flex'>
      <nav className='flex pb-2 pt-1 w-full justify-between'>
        <div className='flex justify-center align-center mx-4 mt-1 '>
          <img src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' alt='logo' className='rounded-full' />
          <ul className='flex'>
            {navigation.map((item) => (
              <li key={item.name} onMouseEnter={() => setHover(item.name)} onMouseLeave={() => setHover('')} className={hover === item.name ? 'bg-gray-200 px-4 rounded-lg':'px-4'}>
                <Link to={item.href} onClick={() => setActive(item.name)} className={active === item.name ? 'text-purple-400' : 'text-gray-400'}>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center'>
          <ul className='flex pr-8'>
            <li className='ml-2'>
              <Link to="/signIn">
                <button className='rounded-lg px-4 text-gray-200 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 '>Sign In</button>
              </Link>
            </li>
          </ul>
          <button className='flex mx-2'>
            <NotificationsIcon className='text-2xl'/>
          </button>
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className='flex'>
            <DensityMediumIcon onClick={toggleColumn} className='text-2xl'/>
          </button>
        </div>
        
      </nav>
    </div>

    
  );
};

export default Navbar;
