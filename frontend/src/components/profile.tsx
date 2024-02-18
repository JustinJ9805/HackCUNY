import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='p-8 py-2 bg-slate-800 rounded-lg mt-2'>
    {/* account settings */}
    <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
      <h1 className='text-white'>Profile Picture</h1>
      <div className="flex justify-between items-center">
        {/* Image box */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
          <img
            src="path_to_your_image.jpg"
            alt="Profile Picture"
            className="object-cover w-full h-full"
          />
        </div>
        {/* File input */}
        <label htmlFor="profile-picture" className="cursor-pointer bg-blue-500 text-white p-1 px-6 rounded-lg">
          Select a photo
          <input type="file" id="profile-picture" className="hidden" />
        </label>
        <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
          Update
        </button>
      </div>

        </div>
        
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>First Name</h1>
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none'
            placeholder='Type your First name'
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Update
            </button>
        </div>
        {/* last name text box */}
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Last Name</h1>
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none'
            placeholder='Type your Last name'
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Update
            </button>
        </div>
        {/* Bio */}
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Bio </h1>
          <textarea
            className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
            placeholder='Write a little about yourself & interests'
            rows={4} // Adjust the number of rows as needed
          ></textarea>
            <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Update
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Education</h1>
          {/* textbox for schools */}
          <textarea
            className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
            placeholder='Enter your school name'
            rows={1} // Adjust the number of rows as needed
          ></textarea>
            <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Update
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Position </h1>
          <textarea
            className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
            placeholder='Current position at your current workplace'
            rows={2} // Adjust the number of rows as needed
          ></textarea>
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Update
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Skills </h1>
          <textarea
            className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
            placeholder='List your skills and separate them with a ,'
            rows={4} // Adjust the number of rows as needed
          ></textarea>
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Update
            </button>
        </div>
      </div>
  );
};

export default Profile;
