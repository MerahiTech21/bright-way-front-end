'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Spinner from './Spinner'
import url from '../app/url'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getDestinations = async () => {
    const res = await axios.get(`${url}/destinations`).then((response) => response.data)
    return res
}
async function Packages() {
    
    const { data, isLoading, isFetching, error, isSuccess } = useQuery({
        queryKey: ["destinations"],
        queryFn: () => getDestinations(),
      });
      useEffect(() => {
        if(isSuccess && data) {
          console.log(data)
        }
      }, [isSuccess, data])
    return (
        <div className='min:w-screen bg-[url(/whobg.jpg)] flex flex-col justify-center items-center'>
            <div className='text-center text-3xl text-white font-mono font-bold py-10'>Study Abroad Packages</div>
            <div className='grid grid-cols-2 gap-4 py-4 px-4 md:grid-cols-4 md:gap-10 md:px-28 md:py-10'>
                {isLoading? <Spinner />:
                     data?  data?.map((destination) => (
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
                    :<div className='text-center text-lg text-red-500'>No countries found</div>
                }
            </div>
        </div>
    )
}

export default Packages