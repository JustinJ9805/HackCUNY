import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {BellIcon, BellAlertIcon} from '@heroicons/react/24/outline'
import { useMsal } from '@azure/msal-react';

interface NavbarProps {
  toggleColumn: () => void;
}

const navigation = [
  { name: 'Products & Services', href: '',  current: false },
  { name: 'Tools', href: '',  current: false },
  { name: 'Jobs', href: '/jobs', current: false },
]
const ProductsServicesMenu = [
  { name: 'Resume Builder', href: '/resume' },
  { name: 'Cover Letter Generation', href: '/coverLetter' },
]
const ToolsMenu = [
  { name: 'Resume.Ai', href: '/resumeTool' },
  { name: 'CoverLetter.Ai', href: '/coverLetterTool' },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar: React.FC<NavbarProps> = ({ toggleColumn }) => {
  const [column, setColumn] = useState(false);
  const [itemHover, setItemHover] = useState('');
  const { instance, accounts, inProgress } = useMsal();
  
  useEffect(() => {
    if (accounts.length > 0) {
      const currentUser = accounts[0]; // Assuming only one account is logged in
      console.log('User is authenticated');
      console.log('Username:', currentUser.username);
      console.log('Email:', currentUser.username); // Assuming you have email in the claims
    } else {
      console.log('User is not authenticated');
    }
  }, [accounts]);
  //unused currently
  const [notifications, setNotifications] = useState();
  if( inProgress === 'login'){
    return <div>Logging in...</div>
  }; 

  return (
    <div className='sticky top-0 z-10 border-b-2 shadow-md rounded-none px-4 bg-white'>
      <nav className='flex pb-2 pt-1 w-full justify-between'>
        <div className='flex justify-center align-center mx-8 mt-1 '>
          <Link to="/">
            <button>
              <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" className='h-8 w-8'/>
            </button>
          </Link>
          <ul className='flex items-center ml-4'>
          {navigation.map((item) => (
            <li key={item.name} className='hover:bg-gray-200 px-4 rounded-lg relative'
            onMouseEnter={() => {
              setItemHover(item.name);
              }}
              onMouseLeave={() => {setItemHover('')}}>
              <Link to={item.href} onClick={(e) => {
                if(item.name === 'Products & Services') {
                  e.preventDefault();
                }
              } } className='text-gray-400'>
                <span>{item.name}</span>
              </Link>
              {itemHover === item.name && item.name === 'Products & Services' && (
                <ul className='absolute top-6 left-0 bg-white rounded-lg shadow-lg border-gray-200 border-2 w-60'>
                  {ProductsServicesMenu.map((item) => (
                    <li key={item.name} className='hover:bg-gray-200 px-4 py-1'>
                      <Link to={item.href} className='text-gray-400'>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {itemHover === item.name && item.name === 'Tools' && (
                <ul className='absolute top-6 left-0 bg-white rounded-lg shadow-lg border-gray-200 border-2 w-60'>
                  {ToolsMenu.map((item) => (
                    <li key={item.name} className='hover:bg-gray-200 px-4 py-1'>
                      <Link to={item.href} className='text-gray-400'>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          </ul>
        </div>
        <div className='flex items-center'>
          <ul className='flex pr-8'>
            
            <li className='bg-blue-400 rounded-lg text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
              <Link to="/signIn">
                <button className=' px-4  text-lg'>Sign In</button>
              </Link>
            </li>
            
          </ul>
            {accounts.length > 0 ? ( 
              
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
                        href="/profile"
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
            ) : (
              <Link to="/signUp">
                <button className='bg-blue-500 text-white p-1 px-6 rounded-lg my-2 ml'>Sign Up</button>
              </Link>
            )}
          <button onClick={() => setColumn(!column) } className={`flex ml-6 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ${column ? 'text-blue-400' : ''} `}>
            {/* <Bars4Icon className='h-5 w-5' aria-hidden="true" onClick={toggleColumn}/> */}
            {notifications && <BellAlertIcon className='h-5 w-5' aria-hidden="true" onClick={toggleColumn}/> || !notifications && <BellIcon className='h-5 w-5' aria-hidden="true" onClick={toggleColumn}/> }
          </button>
        </div>
        
      </nav>
    </div>

    
  );
};

export default Navbar;
