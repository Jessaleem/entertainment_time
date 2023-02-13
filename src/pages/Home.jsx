import { useEffect, useState } from 'react';
import { getAllData } from '../services/data';
// import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';
import CardList from '../components/CardList';

function Home() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData();
        const filteredData = data.slice(0, 6);
        setShowData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Content.Movies>
          <CardList showData={showData} />
        </Content.Movies>
        <Content.Comentaries>
          <p className='text-white'>Comentaries</p>
        </Content.Comentaries>
      </Content>
    </>
  );
}

export default Home;
