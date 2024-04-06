import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white px-4 py-1 flex justify-center">
      <div className="max-w-none mx-4 lg:mx-0"> 
        {/* <div className="flex justify-center items-center">
          <div className="w-full lg:w-1/3 px-2 mb-2 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Column 1</h3>
            <ul>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link1 col1</a></li>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link2 col1</a></li>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link3 col1</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Column 2</h3>
            <ul>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link1 col2</a></li>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link2 col2</a></li>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link3 col2</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Column 3</h3>
            <ul>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link1 col3</a></li>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link2 col3</a></li>
              <li><a className="block text-white hover:text-slate-300 transition duration-300" href="#">Link3 col3</a></li>
            </ul>
          </div>
        </div> */}
        <div className="mt-4">
          <button className="text-sm text-gray-400 hover:text-white mr-4">Privacy Policy</button>
          <button className="text-sm text-gray-400 hover:text-white ml-4">Terms & Conditions</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
