import { useEffect, useState } from 'react';
import { getAllData } from '../services/data';
import Card from '../components/Card';
import Header from '../components/Header';

function Home() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData();
        const filteredData = data.items.slice(0, 12);
        setShowData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const movies = showData.map((movie) => (
    <Card
      key={movie.id}
      id={movie.id}
      image={movie.image}
      title={movie.title}
      year={movie.year}
    />
  ));

  // console.log(showData);

  return (
    <>
      <Header />
      <main className='flex flex-wrap justify-around bg-black'>{movies}</main>
    </>
  );
}

export default Home;
