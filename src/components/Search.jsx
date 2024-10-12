import React from 'react'

function Search() {
  return (
    <div className='flex w-full'>
      <input className='flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-gray-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2' type="text" placeholder='Nueva Tarea' />
      <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary hover:bg-primary/90 h-10 px-4 py-2'>Agregar</button>
    </div>
  )
}

export default Search