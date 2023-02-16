import React from 'react';
import ReactPlayer from 'react-player';

function Detail({ detail }) {
  // console.log(detail);
  let ids = new Array(detail.genre?.length).fill().map((_, i) => i);
  console.log(ids);
  return (
    <div className='flex justify-center flex-col'>
      <div className='rounded flex justify-center'>
        {/* <ReactPlayer url={detail.trailer} playing controls loops /> */}
      </div>
      <div className='flex space-x-4 justify-center py-5'>
        <div>
          <h1 className='text-white'>Description</h1>
          <p className='text-white max-w-md'>{detail.description}</p>
        </div>
        <div>
          <p className='text-white'>Director: {detail.director}</p>
          <div className='text-white'>
            Genre:
            {detail.genre?.map((item, index) => {
              return <span key={index}>{(index ? ', ' : ' ') + item} </span>;
            })}
          </div>
          <div className='text-white'>
            Writters:
            {detail.writers.map((writer, index) => {
              return <span key={index}>{(index ? ', ' : ' ') + writer}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
