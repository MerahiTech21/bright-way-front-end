import React from 'react'
import Link from 'next/link'

const TopBar = () => {
  return (
    <div className='bg-primary flex justify-center items-center h-16 sticky top-0 z-50'>
      <p className='text-white text-xs pl-2 md:text-lg'>1000+ Scholarships are waiting for you in {new Date().getFullYear()}</p>
       <Link href='/applay'><button className='border-white border-2 text:xs text-white m-2 py-1 lg:px-10 lg:m-4 rounded-md lg:text-xl'>Apply Now</button></Link>
    </div>
  )
}

export default TopBar