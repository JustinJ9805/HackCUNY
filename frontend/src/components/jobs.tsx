import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';

let testPost  = {
  title: 'test',
  description: 'testing this out'
}

const Jobs: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try{
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }
  , []);

  console.log(posts);
  
  return (
    <div className='pt-2 mx-4 my-2'>
      <div className='flex justify-around'>
        <div className='flex justify-center items-center'>
          <input type='text' className='border-2 bg-gray-600 border-gray-300 p-2 px-4 rounded-lg text-white' placeholder='Search' />
        </div>
        <div className='flex justify-center items-center'>
          <div className='mx-2'>
            <select className='border-2 bg-gray-400 border-gray-300 p-2 rounded-lg'>
              <option value=''>Type</option>
            </select>
          </div>
          <div className='mx-2'>
            <select className='border-2 bg-gray-400 border-gray-300 p-2 rounded-lg'>
              <option value=''>Type</option>
            </select>
          </div>
          <button className='bg-blue-500 text-white p-1 px-6 rounded-lg ml-2'>Search</button>
          </div>
          </div>
          <div className='p-8 py-2 bg-slate-800 rounded-lg mt-2'>
          {posts.map((post: any, index) => {
            return (
              <div key={index} className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
                <h1 className='text-white'>{post.title}</h1>
                <p className='text-white'>{post.description}</p>
                <Link to={{ pathname: '/createApplication', search: `?title=${post.title}&description=${post.description}` }}>
            <button className='bg-blue-500 text-white p-1 px-6 rounded-lg'>Apply</button>
          </Link>
              </div>
            )
          })}
        <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
          <h1 className='text-white'>Title</h1>
          <p className='text-white'>Description</p>
          <Link to={{ pathname: '/createApplication', search: `?title=${testPost.title}&description=${testPost.description}` }}>
            <button className='bg-blue-500 text-white p-1 px-6 rounded-lg'>Apply</button>
          </Link>
        </div>
        
      </div>
  </div>
  )
}

export default Jobs