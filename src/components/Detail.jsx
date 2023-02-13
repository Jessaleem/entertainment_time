import React from 'react';
import ReactPlayer from 'react-player';

function Detail({ detail }) {
  console.log(detail);
  return (
    <div className='flex justify-center flex-col'>
      <div className='rounded flex justify-center'>
        <ReactPlayer url={detail.trailer} playing controls loops />
      </div>
      <div className='flex space-x-4 justify-center py-5'>
        <div>
          <h1 className='text-white'>Description</h1>
          <p className='text-white max-w-md'>{detail.description}</p>
        </div>
        <div>
          <p className='text-white'>Director:</p>
          <p className='text-white'>Genre:</p>
          <p className='text-white'>Writters:</p>
        </div>
      </div>
    </div>
  );
}
export default Detail;
