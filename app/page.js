/* eslint-disable react/no-unescaped-entities */

import { Fragment } from 'react'
import Image from 'next/image'
import Services from '@components/Services'
import WhyChooseUs from '@components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import DestinationCards from '@components/DestinationCards'
import Section from '@components/Section'
// import OurTeams from '@components/OurTeams'
export default function Home() {
    return (

        <Fragment>
            <main className="min:h-screen">    
                <div className="bg-[url(/la.jpg)] bg-no-repeat bg-cover h-screen">
                    <div className='relative backdrop-brightness-0 backdrop-opacity-0 h-screen'>
                        <div className="absolute top-[25%] w-full flex flex-col items-center justify-center">           
                            <h1 className="flex flex-col text-3xl lg:text-4xl leading-8 font-satoshi font-bold text-white uppercase shadow-10xl">
                            STUDY ABROAD & ENHANCE  YOUR CAREER PROSPECTS
                            </h1>
                            <p className="text-md text-white sm:text-base mt-5 dark:text-white">
                            Lorem ipsum dolor sit amet , consectetur adipscing elit. Nam
                            quis felis bibendum felis iaculis commodo quis vel nibh. Nulla
                            faucibus ut lectus
                            </p>
                            <div className="flex">
                                <a href="#" className="bg-dark-gray uppercase  text-black  rounded-lg text-md hover:bg-indigo-200">
                                    YOUR APPLICATION STATUS
                                </a>
                                <a href="#" className="text-white bg-primary uppercase rounded-lg dark:text-white hover:bg-indigo-200 hover:text-primary text-md">
                                    APPLAY
                                </a>
                            </div>
                        </div>
                        <div  className="absolute bottom-0 w-full">
                            <Services/>
                        </div>
                    </div>
                </div>
            </main>
            {/* <div 
            className='py-10 lg:pt-10 lg:pb-20'
            style={{ 
                backgroundImage: 'url("/scholar.jpeg")',
                backgroundSize: "cover",
                backgroundRepeat:"repeat"
            }}
            >
                <div className='text-center text-3xl font-mono font-bold pb-10 lg:pb-20'>Study Abroad Packages</div>
            <DestinationCards />
            </div>           */}
            <WhyChooseUs />
            {
            //     <div className='py-10 lg:py-20'>
            //     <div className='text-center text-3xl font-mono font-bold pb-10'>Our Teams</div>
            //     <OurTeams />
            // </div>
           }
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
