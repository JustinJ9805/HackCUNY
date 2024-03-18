import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-none mx-4 lg:mx-0"> 
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-1/3 px-2 mb-2 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Column 1</h3>
            <ul>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 1 for column 1</a></li>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 2 for column 1</a></li>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 3 for column 1</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Column 2</h3>
            <ul>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 1 for column 2</a></li>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 2 for column 2</a></li>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 3 for column 2</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Column 3</h3>
            <ul>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 1 for column 3</a></li>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 2 for column 3</a></li>
              <li><a className="block text-gray-400 hover:text-white transition duration-300" href="#">Link 3 for column 3</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-400 mr-4">Privacy Policy</span>
          <span className="text-sm text-gray-400">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
