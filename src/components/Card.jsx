function Card({ image, title, year }) {
  return (
    <div className='flex flex-col bg-gray-900 border rounded border-amber-700 m-8'>
      <div className='flex w-80 h-96'>
        <img src={image} alt='movie official poster' />
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
