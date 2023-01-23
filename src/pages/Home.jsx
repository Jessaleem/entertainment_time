import { useEffect, useState } from 'react';
import { getAllData } from '../services/data';

function Home() {
  const [showData, setShowData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData();
        setShowData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(showData);

  return <h1>Hola Mundo</h1>;
}

export default Home;
