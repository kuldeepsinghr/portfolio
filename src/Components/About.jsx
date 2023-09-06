import React from 'react'
import SerctionTitle from './SerctionTitle'
import Me from '../image/me.jpeg'

function About() {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center md:justify-between gap-10 py-20 md:gap-20'>
        <div className='w-full md:w-6/12'>
            <SerctionTitle>About Me</SerctionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>From frontend to backend, I've honed my skills in an array of technologies, including HTML, CSS, JavaScript, React, Node.js, and various other frameworks and libraries. I am well-versed in responsive design principles, ensuring that the websites I create are not only visually stunning but also accessible across devices.</p>
            <a href="mailto:rathorekuldeeprajendrasingh932@gmail.com" className='block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'>rathorekuldeeprajendrasingh932@gmail.com</a>
        </div>
        <div>
            <img src={Me} alt="Profile" className='w-full md:w-6/12 rounded-lg object-cover m-auto mr-0' />
        </div>
    </div>
    </>
  )
}

export default About