import React from 'react'

const RightSideMenu: React.FC<{hidden: boolean}> = ({hidden}) => {
  return (
    <div className={`fixed mt-1 top-12 h-full bg-white w-1/6 p-4 border-l-2 border-gray-200 transition-all duration-500 ease-in-out ${hidden ? '-right-full' : 'right-0'}`}>
      <div className='flex justify-end'>
      </div>
      <h3>Hi</h3>
    </div>
  );
}

export default RightSideMenu