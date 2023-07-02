/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect } from 'react'
import Spinner from './Spinner'
import url from '../app/url'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'

const getDestinations = async () => {
    const res = await axios.get(`${url}/destinations`).then((response) => response.data)
    return res
}
async function Packages() {
    
    const { data, isLoading, isFetching, error, isSuccess } = useQuery({
        queryKey: ["countries"],
        queryFn: () => getDestinations(),
      });
    return (
        <div className='min:w-screen bg-contain bg-[url(/bgall.jpg)] flex flex-col items-center'>
            <div className='min:w-screen h-full bg-primary bg-opacity-75 pb-8'>
                <div className='text-center text-4xl text-white font-mono font-bold py-10'>Study Abroad Packages</div>
                <div className='grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 xl:px-28 xl:py-8'>
                    {isLoading? <Spinner />:
                        data?  data?.map((destination) => (
                            <div key={destination.id} className='bg-[#E4F1FA] flex flex-col justify-start items-center shadow-2xl rounded-md'>
                                <img
                                className="rounded-t-lg w-full h-auto"
                                src={destination.photo}
                                alt="team photo" />
                                <h5
                                className="mb-2 text-xl mt-5 text-center text-primary font-mono font-bold leading-tight">
                                {destination.title}
                                </h5>
                                <p className='text-lg text-primary font-mono font-medium my-3 px-6 pb-1'>
                                Poland is attracting ever more students from abroad. The country offers world-class 
                                education at modest tuition fees. Apply and study now.
                                </p>
                                <Link href={`/destination/${destination.id}`} className='text-[#F48E20] text-xl font-bold py-6 hover:bg-[#F48E20] hover:text-[#FFFFFF] hover:font-normal hover:text-md hover:p-2 hover:my-2 hover:rounded'>SEE MORE</Link>
                            </div>
                        ))
                        :<div className='text-center text-lg text-red-500'></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Packages