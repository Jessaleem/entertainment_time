function Card({ image, title, year }) {
  return (
    <div className='flex flex-col bg-gray-900 border rounded border-amber-700 m-8'>
      <div className='flex w-80 h-96'>
        <img src={image} alt='movie official poster' />
      </div>
      <div className='py-5 px-2'>
        <h2 className='text-white'>
          <strong>{title}</strong> ({year})
        </h2>
      </div>
    </div>
  );
}
export default Card;
