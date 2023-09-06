import React from 'react'

function SerctionTitle({children, id}) {
  return (
    <h1 id={id} className='text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500'>{children}</h1>
  )
}

export default SerctionTitle