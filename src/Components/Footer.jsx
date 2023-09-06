import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
      <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Me</a>
      <a href="mailto:rathorekuldeeprajendrasingh932@gmail.com" className='block mt-3 text-sm md:text-md font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'>rathorekuldeeprajendrasingh932@gmail.com</a>
      <p className='text-xs font-regular mt-2 text-gray-500'>Copyright © {new Date().getFullYear()} . All rights reserved</p>
    </div>
  )
}

export default Footer
