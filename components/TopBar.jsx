import React from 'react'

const TopBar = () => {
  return (
    <div className='bg-primary-green flex justify-center items-center h-16 sticky top-0 z-50'>
      <p className='text-white text-xl'>1000+ Scholarships are waiting for you in {new Date().getFullYear()}</p>
      <button className='border-white border-2 text-white m-4 py-1 px-10 rounded-md text-xl'>Apply Now</button>
    </div>
  )
}

export default TopBar