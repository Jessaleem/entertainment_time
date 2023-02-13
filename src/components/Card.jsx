import { useEffect, useState } from 'react';
// import { getDescription } from '../services/data';

function Card({ image, title, year, id, description }) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick((prev) => prev + 1);
    // console.log(click);
  };

  useEffect(() => {
    console.log(click);
  }, [click]);

  return (
    <div className='flex flex-col bg-gray-900 border rounded border-amber-700 m-8 relative'>
      <div className='flex border rounded border-green-700'>
        <img className='object-cover' src={image} alt='movie official poster' />
      </div>
      <div className='py-5 px-5 flex justify-between items-center'>
        <h2 className='text-white'>
          <strong>{title}</strong> ({year})
        </h2>
        <br></br>
        <button
          className='text-white text-2xl font-extrabold'
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <div
        className={`absolute bg-black/70 p-6 ${
          click ? 'h-full block' : 'h-0 hidden'
        } bottom-0`}
      >
        <div className='flex items-center justify-between'>
          <h2 className='text-white'>
            <strong>{title}</strong> ({year})
          </h2>
          <button
            className='text-white text-2xl font-extrabold'
            onClick={handleClick}
          >
            -
          </button>
        </div>
        <h2 className='text-white font-bold py-5'>Sinopsis</h2>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  );
}
export default Card;
