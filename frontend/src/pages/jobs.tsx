// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);
  const [clicked, setClicked] = useState<number | null>(null);
  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/listings');
        console.log('Response data:', response.data);
        setListings(response.data);
        if(response.data.length > 0) setClicked(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getListings();
  }, []);
  const handleClicked = (index:any) => {
    setClicked(index);
  }
  
  return (
    <div className="grid grid-cols-2">
      <div className='pt-2 mx-4 my-2'>
          <div>
            {listings.map((listing: any, index:any) => {
              return (
                <button key={index} onClick={() => handleClicked(index)} className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full hover:bg-blue-200 '>
                  <h1 className='text-white'>{listing.title}</h1>
                  <h3>{listing.subtitle}</h3>
                  <p className='text-white'>{listing.description}</p>
                  <div className="flex">
                    {listing.tags.split(',').map((tag: string, index: number) => {
                      return (
                        <p key={index} className='text-white bg-slate-600 px-4 mx-1 rounded-xl'>{tag}</p>
                      )
                    })}
                  </div>
                  {/* <Link to={{ pathname: '/createApplication', search: `?title=${listing.title}&description=${listing.description}` }}>
                    <button className='bg-blue-500 text-white p-1 px-6 mt-2 rounded-lg'>More Info</button>
                  </Link> */}
                </button>
              )
            })}        
          </div>
      </div>
      <div className='pt-2 mx-4 my-2'>
        {clicked !== null  && (
          <div className="my-2 mx-4 p-4 bg-slate-700 rounded-lg ">
            <h1>{listings[clicked].title}</h1>
            <p>{listings[clicked].description}</p>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Jobs;