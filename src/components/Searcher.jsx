function Searcher() {
  return (
    <div className='input-group relative flex w-full rounded my-5 mx-14'>
      <label className='relative block'>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <svg className='h-5 w-5 fill-slate-300' viewBox='0 0 20 20'></svg>
        </span>
        <input
          className='placeholder:italic placeholder:text-slate-400 block bg-gray-900 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Search'
          type='search'
          name='search'
        />
      </label>
    </div>
  );
}

export default Searcher;
