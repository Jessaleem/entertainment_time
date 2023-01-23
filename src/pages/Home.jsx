import { useEffect, useState } from 'react';
import { getAllData } from '../services/data';

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

  // const movies = showData.map((movie) => ( key= movie.id movie));
  console.log(showData);
  // console.log(movies);

  return <h1>Hola Mundo!</h1>;
}

export default Home;
