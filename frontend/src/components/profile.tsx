import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='p-8 py-2 bg-slate-800 rounded-lg mt-2'>
    <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg'>
      <div className="flex justify-between items-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
          <img src="https://via.placeholder.com/150" alt="profile" className=" h-full object-cover" />
        </div>
        <label htmlFor="profile-picture" className="bg-blue-400 hover:bg-blue-600 font-bold text-white p-1 px-6 rounded-lg">
          Select a photo
          <input type="file" id="profile-picture" className="hidden" />
        </label>
      </div>
    </div>

    <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg  '>
      <h1 className='text-white'>Name</h1>
      <div className='flex justify-between items-center'>
        <input
          type='text'
          className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none'
          placeholder='Name?'
        />
      </div>
    </div>
        
    <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg'>
      <h1 className='text-white'>Bio</h1>
      <textarea
        className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
        placeholder='Write a little about yourself & interests'
        rows={4}
      ></textarea>
    </div>

    <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg'>
      <h1 className='text-white'>Education</h1>
      <textarea
        className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
        placeholder='Enter your school name'
        rows={1} 
      ></textarea>
    </div>

    <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg'>
      <h1 className='text-white'>Position </h1>
      <textarea
        className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
        placeholder='Current position at your current workplace'
        rows={2} 
      ></textarea>
    </div>

    <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg '>
      <h1 className='text-white'>Skills </h1>
      <textarea
        className='bg-white-500 text-black p-3 px-6 rounded-lg cursor-text outline-none resize-none'
        placeholder='List your skills and separate them with a ,'
        rows={4} 
      ></textarea>
    </div>
    <div className='my-2 mx-4'>
      <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold p-1 px-6 rounded-lg mx-2">
          Update
      </button>
    </div>
  </div>
  );
};

export default Profile;
