import React from 'react'

const Home = () => {
  return (
    //create 2 columns the first should be smaller than the 2nd
    <div className='grid grid-cols-4 gap-4 pt-2 mx-4 my-2'>
      <div className='col-span-1 bg-slate-800 rounded-lg px-4 py-2 '>
        <h3>Hey</h3>
      </div>

      {/* need to add scrollbar  */}
      <div className='col-span-2 h-screen'>
        {/* <p>Recommendations</p> */}
        <div className="sticky top-0 overflow-y-auto bg-slate-800 rounded-lg px-4 py-2">
          <div className="bg-slate-900 rounded-lg shadow-md p-4 mb-4">
            <p>Post 1</p>
          </div>
          <div className="bg-slate-900 rounded-lg shadow-md p-4 mb-4">
            <p>Post 2</p>
          </div>
        </div>
      </div>
      
      <div className='col-span-1 bg-slate-800 rounded-lg px-4 py-2'> 
        <h3>column</h3>
      </div>
    </div>
  )
}

export default Home