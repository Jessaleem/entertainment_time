import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movie-detail/:id' element={<MovieDetail />}></Route>
    </Routes>
  );
}

export default App;
