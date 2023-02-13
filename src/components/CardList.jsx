import Card from './Card';

function CardList({ showData }) {
  const movies = showData.map((movie) => <Card key={movie.id} {...movie} />);
  return (
    <main className='flex flex-wrap justify-around bg-black'>{movies}</main>
  );
}

export default CardList;
