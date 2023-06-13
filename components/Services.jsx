import React from 'react'
import Image from 'next/image'
import { fetchData } from '../app/url/fetch'

const Services = async () => {
  const services = await fetchData('services')
    return (
      <div className='bg-primary p-0 lg:px-0'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-10  lg:py-0 w-11/12 mx-auto'>
          {
            services && services.map((service) => (
            <section key={service.id} className='py-5 flex flex-col justify-start items-center text-center'>
              <Image src={service.icon} alt="honest icon"  width= {70} height={70} className='transition ease-in-out delay-150  hover:scale-150  duration-1000' />
              <div className='lg:mt-5 text-lg text-white text-center'>{service.title}</div>
            </section>
            ))
          }    
        </div>
      </div>
  )
}

export default Services