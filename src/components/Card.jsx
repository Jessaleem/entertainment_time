import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { getDescription } from '../services/data';

function Card({ image, title, year, id, description }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col bg-gray-900 rounded m-8 relative'>
      <div className='flex rounded'>
        <Link to={`/movie-detail/${id}`}>
          <img
            className='object-cover rounded cursor-pointer'
            src={image}
            alt='movie official poster'
          />
        </Link>
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
