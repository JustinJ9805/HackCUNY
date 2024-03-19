import React from 'react'

interface HomePageProps {
  columnStatus : boolean
}
const Home: React.FC<HomePageProps> = ({columnStatus}) => {
  return (
    <div className={columnStatus ? 'shrink grid grid-cols-4 gap-4 pt-2 mx-4 my-2': 'grid grid-cols-4 gap-4 pt-2 mx-4 my-2'}>
      <div className='border-r-2 px-4'>
        <div className='col-span-1 bg-slate-800 rounded-lg px-4 py-2 '>
          <div>
            <div className='flex justify-center items-center pt-4'>
              <img src='https://via.placeholder.com/125' alt='profile' className='rounded-full' />
            </div>
            <div>
              <div className='flex flex-col justify-center items-center mt-4'>
                <div>
                  <h3>Name</h3>
                </div>
                <div>
                  <h3>Title</h3>
                </div> 
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center pt-4'>
            <div className='grid grid-cols-1 pt-4'>
              <div className='flex flex-col items-center'>
                <h3 className='px-4'>Waiting</h3>
                <h3 className='px-4'>1</h3>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='px-4'>Applied</h3>
                <h3 className='px-4'>2</h3>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='px-4'>Open</h3>
                <h3 className='px-4'>3</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* need to add scrollbar  */}
      <div className='col-span-2 h-screen'>
        {/* <p>Recommendations</p> */}
        <div className="sticky top-0 overflow-y-scroll h-full bg-slate-800 rounded-lg px-4 py-2">
          <div className="bg-slate-900 rounded-lg shadow-md p-4 mb-4">
            <h4>Post 1</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero fugit molestias, autem, veritatis consequuntur quidem officia eum est quos corrupti cupiditate quod nam tenetur! Reprehenderit, esse qui? Praesentium, est.</p>
          </div>
          <div className="bg-slate-900 rounded-lg shadow-md p-4 mb-4">
            <h4>Post 2</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero fugit molestias, autem, veritatis consequuntur quidem officia eum est quos corrupti cupiditate quod nam tenetur! Reprehenderit, esse qui? Praesentium, est.</p>
          </div>
          <div className="bg-slate-900 rounded-lg shadow-md p-4 mb-4">
            <h4>Post 3</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero fugit molestias, autem, veritatis consequuntur quidem officia eum est quos corrupti cupiditate quod nam tenetur! Reprehenderit, esse qui? Praesentium, est.</p>
          </div>
          <div className="bg-slate-900 rounded-lg shadow-md p-4 mb-4">
            <h4>Post 4</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero fugit molestias, autem, veritatis consequuntur quidem officia eum est quos corrupti cupiditate quod nam tenetur! Reprehenderit, esse qui? Praesentium, est.</p>
          </div>
          <div className="bg-slate-900 rounded-lg shadow-md p-4 mb-4">
            <h4>Post 5</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero fugit molestias, autem, veritatis consequuntur quidem officia eum est quos corrupti cupiditate quod nam tenetur! Reprehenderit, esse qui? Praesentium, est.</p>
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <div className='bg-slate-800 rounded-lg px-4 py-2 mx-4'> 
          <h3>column</h3>
        </div>
      </div>
    </div>
  )
}

export default Home