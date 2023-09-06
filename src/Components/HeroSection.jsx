import React from 'react'

function HeroSection() {
  return (
    <>
        <div id='hero' className='flex flex-col items-center justify-center py-20'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold'>This is Kuldeep Singh Rathore</h1>
                <p className='text-md md:text-xl max-w-md mb-3 dark:text-gray-300 text-gray-600'>From Lines of Code to Digital Masterpieces</p>
                <a href="#works" className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700'>See work</a>
            </div>
        </div>
    </>
  )
}

export default HeroSection
