import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import { getMovie } from '../services/data';

function MovieDetail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const detail = await getMovie(id);
        setDetail(detail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, [id]);

  return <Detail detail={detail} />;
}

export default MovieDetail;
