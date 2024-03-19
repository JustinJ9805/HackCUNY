import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const SignIn = () => {
    return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-8 bg-slate-800 rounded-lg'>
        <h1 className='text-4xl font-bold text-white flex justify-center'>Sign In</h1>
        <div className='flex flex-col'>
          <input type='text' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Username' />
          <input type='password' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Password' />
          <button className='bg-blue-500 text-white p-1 px-6 rounded-lg my-2'>Sign In</button>
          {/* link to signup */}
        </div>

        <div className='mt-8'>
          <Link to='/signUp'>
            <p className='text-white text-center'>Dont have an account?
              <button className='bg-blue-500 text-white p-1 px-6 rounded-lg my-2 ml-4'>Sign Up</button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn