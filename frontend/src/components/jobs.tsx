import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/listings');
        console.log('Response data:', response.data);
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getListings();
  }, []);

  return (
    <div className='pt-2 mx-4 my-2'>
      {listings.length === 0 ? (
        <div>No listings available</div>
      ) : (
        <div>
          {listings.map((listing: any, index:any) => {
            return (
              <div key={index} className='my-2 mx-4 p-4 bg-slate-700 rounded-lg w-full'>
                <h1 className='text-white'>{listing.title}</h1>
                <h3>{listing.subtitle}</h3>
                <p className='text-white'>{listing.description}</p>
                <Link to={{ pathname: '/createApplication', search: `?title=${listing.title}&description=${listing.description}` }}>
                  <button className='bg-blue-500 text-white p-1 px-6 rounded-lg'>Apply</button>
                </Link>
              </div>
            )
          })}        
        </div>
      )}
    </div>
  );
};

export default Jobs;