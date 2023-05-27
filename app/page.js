import { Fragment } from 'react'
import Image from 'next/image'
import Services from '@components/Services'
import WhyChooseUs from '@components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import DestinationCards from '@components/DestinationCards'
import Section from '@components/Section'
export default function Home() {
    return (
      <Fragment>
    <main className="flex w-full flex-col items-center justify-between bg-light px-24 pt-5 lg:pt-24">    
      
<div className="relative  flex items-center overflow-hidden">
    <div className="container relative lg:flex px-3 lg:py-16 mx-auto">
    <div className="relative   sm:hidden sm:w-1/3 lg:w-3/5">
    <Image src="/homeimg.jpg" width={400} height={600} className="max-w-xs m-auto md:max-w-sm" alt='home page image'/>
</div>              
    <div className="relative z-20 flex flex-col mt-5 sm:mt-0 sm:w-2/3 lg:w-2/5">
              
        <h1 className="flex flex-col text-3xl font-mono font-extrabold leading-none text-gray-800 uppercase font-bebas-neue sm:text-4xl dark:text-white">
         STUDY ABROAD & ENHANCE YOUR CAREER PROSPECTS
        </h1>
        <p className="text-sm text-gray-700 sm:text-base dark:text-white">
            Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
        </p>
        <div className="flex mt-8 pb-10 lg:pb-0">
            <a href="#" className="px-4 py-2 mr-4 bg-dark-gray uppercase border text-black  rounded-lg text-md hover:bg-indigo-200">
                YOUR APPLICATION STATUS
            </a>
            <a href="#" className="px-4 py-2 text-white bg-slate-500 uppercase  border-2 border-prmary rounded-lg dark:text-white hover:bg-primary hover:text-white text-md">
                APPLAY
            </a>
        </div>
    </div>
    <div className="relative hidden  sm:block sm:w-1/3 lg:w-3/5">
        <Image src="/homeimg.jpg" width={400} height={600} className="max-w-xs m-auto md:max-w-sm" alt='home page image'/>
    </div>
</div>
</div>

            </main>
            <Services />
            <div className='py-10 lg:pt-10 lg:pb-20'
                style={{ backgroundImage: 'url("/scholar.jpeg")', backgroundSize: "contain",backgroundRepeat:"repeat" }}>
                <div className='text-center text-3xl font-mono font-bold pb-10 lg:pb-20'>Study Abroad Packages</div>
                
            <DestinationCards />  
            </div>          
            <WhyChooseUs />
            <div className='bg-dark-gray py-10'>
                <Section>
                    <div className='text-center text-3xl font-mono font-bold pb-10 '>
                        Testimonials
                </div>
                </Section>
                <Testimonials />
            </div>
            </Fragment>
  )
}
