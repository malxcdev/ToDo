import React from 'react'

function TodoList({children}) {
  return (
    <ul className='space-y-2 w-full'>
        {children}
    </ul>
  )
}

export default TodoList