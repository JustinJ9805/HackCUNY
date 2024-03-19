import React from 'react'

const signUp = () => {
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: "first_name",
          last_name: "last_name",
          email: "email",
          password: "password"
        })
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-8 bg-slate-800 rounded-lg'>
        <h1 className='text-4xl font-bold text-white flex justify-center'>Sign Up</h1>
        <div className='flex flex-col'>
          <input type='text' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='First Name' />
          <input type='text' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Last Name' />
          <input type='text' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Email' />
          <input type='password' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Password' />
          <input type='password' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Confirm Password' />
          <button className='bg-blue-500 text-white p-1 px-6 rounded-lg my-2' onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    </div>      
  )
}

export default signUp