import { useEffect, useState } from 'react';
import { getAllData } from '../services/data';
import Card from '../components/Card';

function Home() {
  const [showData, setShowData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData();
        setShowData(data.items.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const movies = showData.map((movie) => (
    <Card
      key={movie.id}
      image={movie.image}
      title={movie.title}
      year={movie.year}
    />
  ));

  return <article>{movies}</article>;
}

export default Home;
