import React from 'react';
import { useLocation } from 'react-router-dom';

const CreateApplication = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get('title');
  const description = params.get('description');

  return (
    <div className='pt-2 mx-4 my-2 bg-slate-800 rounded-lg'>
      <div className='px-4 py-2'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CreateApplication;
