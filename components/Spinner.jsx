import React from 'react'
import Image from 'next/image'
const Spinner = () => {
  return (
      <div className='w-screen h-screen fixed'>
      <div className="w-screen h-screen bg-gray flex justify-center items-center">
      
      <Image src="/loading.gif" width={50} height={50} alt="spinner" />
    </div>
      </div>
  )
}

export default Spinner