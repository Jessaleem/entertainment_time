import Searcher from './Searcher';

function Header() {
  return (
    <>
      <h1 className='text-white bg-black text-2xl ml-14 pt-10'>
        <span className='text-amber-900 font-bold'>Entertaintment</span> Time
      </h1>
      <Searcher />
    </>
  );
}

export default Header;
