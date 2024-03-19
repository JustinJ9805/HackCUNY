import React from 'react'

const createPost = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className='p-8 bg-slate-800 rounded-lg'>
        <h1 className='text-4xl font-bold text-white flex justify-center'>Create Job Posting</h1>
        <br></br>
        <h2 className='text-2xl font-bold text-white flex justify-center '>Job Details</h2>
        <br></br>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <div className='flex justify-between items-center'>
            <h1 className='text-white'>Employer</h1>
          </div>
          <div className='flex'>
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='Employer Name'
            required
          />
           <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>

          </div>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Job Title</h1>
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='Job Title'
            required
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Job Location</h1>
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none w-1/4 mr-2'
            placeholder='State'
            required
          />
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none w-1/4 mr-2'
            placeholder='City'
            required
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Workplace Type</h1>
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='Hybrid, Remote, In-person'
            required
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Employement Type</h1>
          <input
            type='text'
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='Full-time, Part-time, Internship'
            required
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Company Description</h1>
          <textarea
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='A brief overview of your company, its mission, and its values.'
            required
            rows={4} // Adjust the number of rows as needed
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Job Description</h1>
          <textarea
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='A detailed summary of the role and its purpose.'
            rows={4} // Adjust the number of rows as needed
            required
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Key Responsibilities</h1>
          <textarea
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='A brief overview of the main tasks and duties the position requires.'
            rows={5} // Adjust the number of rows as needed
            required
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Required & Preferred Qualifications</h1>
          <textarea
            className='bg-white-500 text-black p-1 px-6 rounded-lg cursor-text outline-none mr-2'
            placeholder='Lists necessary skills, experience, and educational background. &#10; Additionally, add skills and experiences that are beneficial but not essential.'
            rows={6} // Adjust the number of rows as needed
            required
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">
              Save
            </button>
        </div>
        </div>
        </div>
  )
}

export default createPost