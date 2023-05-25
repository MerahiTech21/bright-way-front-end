import React from 'react'
import Image from 'next/image'
import Section from './Section'
import image1 from '@public/image-1.png'
import image2 from '@public/image-2.png'
import image3 from '@public/image-3.png'
import image4 from '@public/image-4.png'
import image5 from '@public/image-5.png'
import image6 from '@public/image-6.png'
import Link from 'next/link'
const Services = () => {
    return (
      <div className='bg-primary p-5 lg:px-0'>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-10  lg:py-20 w-11/12 mx-auto'>
        
    <Link href='/blog/1' className='flex justify-center'>
      <Section>
    <Image src={image1} alt="honest icon" style={{maxWidth:100,maxHeight:100}} className='transition ease-in-out delay-150  hover:scale-150  duration-1000' />
      <div className='lg:mt-5 text-lg text-white'>Educational Counseling</div>
      </Section>
    </Link>
    <Link href='/blog/1' className='flex justify-center'>
    <Section>          
       <Image src={image2} alt="accountability icon" style={{maxWidth:100}} />
      <div className='lg:mt-5 text-lg text-white'>Admission to University</div>
     
      </Section>
    </Link>
      <Link href='/blog/1' className='flex justify-center'>
    <Section className='mt-10 lg:mt-0'>
        <Image src={image3} alt="affordable icon" style={{maxWidth:100}} />
        <div className='lg:mt-5 text-white'>Visa Application</div>
        </Section>
      </Link>
      <Link href='/blog/1' className='flex justify-center'>
    <Section className='mt-10 lg:mt-0'>
    <Image src={image4} alt="accessibility icon" style={{maxWidth:100}} />
      <div className='lg:mt-5 text-lg text-white'>Exam Assistant</div>
        </Section>
      </Link>
      <Link href='/blog/1' className='flex justify-center'>
  <Section>
  <Image src={image5} alt="panctual icon" style={{maxWidth:100}} />

    <div className='lg:mt-5 text-lg text-white'>Immigration Assistant</div>
        </Section>
      </Link>
      <Link href='/blog/1' className='flex justify-center'>
  <Section>
  <Image src={image6} alt="convenence icon" style={{maxWidth:100}} />


    <div className='lg:mt-5 text-lg text-white'>Others Services</div>
        </Section>
      </Link>      
            </div>
            </div>
  )
}

export default Services