import React from 'react'
import Image from 'next/image'
// import { fetchData } from '@app/url/fetch'
import url from '../app/url'
const getDestinatins = async() =>{
    const res = await fetch(`${url}/destinations`,{cache:"no-store"})
   return await res.json();
  
  }
const Packages = async () => {
    const destinations = await getDestinatins()
    return (
        <div className='min:w-screen bg-[url(/whobg.jpg)] flex flex-col justify-center items-center'>
            <div className='text-center text-3xl text-white font-mono font-bold py-10'>Study Abroad Packages</div>
            <div className='grid grid-cols-2 gap-4 py-4 px-4 md:grid-cols-4 md:gap-10 md:px-28 md:py-10'>
                {
                    destinations && destinations.map((destination) => (
                        <div key={destination.id} className='flex flex-col justify-start items-center shadow-2xl rounded-md'>
                            <Image
                            className="rounded-t-lg my-3"
                            src={destination.photo}
                            width={150}
                            height={80}
                            alt="team photo" />
                            <h5
                            className="mb-2 text-lg text-center text-white font-medium leading-tight">
                            {destination.title}
                            </h5>
                            <p className='text-md text-center text-white font-medium leading-tight my-3 px-5 pb-1'>
                            Poland is attracting ever more students from abroad. The country offers world-class 
                            education at modest tuition fees. Apply and study now.
                            </p>
                            <button className='text-primary-green text-lg font-medium p-2'>See More</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Packages