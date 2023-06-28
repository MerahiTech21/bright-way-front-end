'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { fetchData } from '../app/url/fetch'
import { useQuery } from '@tanstack/react-query'

const Services = async () => {
  const {data, isSuccess, isFetching, error} = useQuery({
    queryKey: ['services'],
    queryFn: () => fetchData('services')
  })
  useEffect(() => {
    if(isSuccess && data) {
      console.log(data)
    }
  }, [isSuccess, data])
    return (
      <div className='bg-primary p-0 lg:px-0'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-10  lg:py-10 w-11/12 mx-auto'>
          {
            data && data.map((service) => (
            <section key={service.id} className='py-5 flex flex-col justify-start items-center text-center'>
              <Image src={service.icon} alt="service icon"  width= {100} height={100} className='rounded-md' />
              <div className='lg:mt-5  text-white text-center font-mono'>{service.title}</div>
            </section>
            ))
          }    
        </div>
      </div>
  )
}

export default Services