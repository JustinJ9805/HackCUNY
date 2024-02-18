import React from 'react'
import { GoogleLogin } from 'react-google-login'


const SignIn = () => {
  const responseGoogle = (response: any) => {
    console.log(response)
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-8 bg-slate-800 rounded-lg'>
        <h1 className='text-4xl font-bold text-white flex justify-center'>Sign In</h1>
        <div className='flex flex-col'>
          <input type='text' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Username' />
          <input type='password' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white my-2' placeholder='Password' />
          <button className='bg-blue-500 text-white p-1 px-6 rounded-lg my-2'>Sign In</button>
        </div>

        <div className='flex justify-center'>
          <GoogleLogin
            clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn