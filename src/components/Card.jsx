import { useState, useEffect } from 'react';
import { getDescription } from '../services/data';

function Card({ image, title, year, id }) {
  const [description, setDescription] = useState();
  // const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const desc = await getDescription(id);
        setDescription(desc);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDescription();
  }, [id]);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  // setClick(true);
  // };

  console.log(description);

  return (
    <div className='flex flex-col bg-gray-900 border rounded border-amber-700 m-8 w-64 h-96'>
      <div className='flex  w-64 h-80 border rounded border-slate-700'>
        <img className='m-auto' src={image} alt='movie official poster' />
      </div>
      <div className='py-5 px-2 flex justify-between'>
        <h2 className='text-white'>
          <strong>{title}</strong> ({year})
        </h2>
        <br></br>
        <button className='text-white'>+</button>
      </div>
    </div>
  );
}
export default Card;
