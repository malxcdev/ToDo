import React from 'react'

function Search({
  inputSearch,
  setInputSearch
}) {

  return (
      <input
      className='flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-gray-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2'
      placeholder='Buscar Todo'
      value={inputSearch}
      onChange={(e)=>{
        setInputSearch(e.target.value);
      }}
      />
  )
}

export default Search