import React from 'react'

const TopBar = () => {
  return (
    <div className='bg-primary flex justify-center items-center h-16 sticky top-0 z-50'>
      <p className='text-white text-xs md:text-lg'>1000+ Scholarships are waiting for you in {new Date().getFullYear()}</p>
      <button className='border-white border-2 text:xs text-white m-2 px-2 py-1 lg:px-10 lg:m-4 rounded-md lg:text-xl'>Apply Now</button>
    </div>
  )
}

export default TopBar