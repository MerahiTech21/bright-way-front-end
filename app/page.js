/* eslint-disable react/no-unescaped-entities */

import { Fragment } from 'react'
import Image from 'next/image'
import Services from '@components/Services'
import WhyChooseUs from '@components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import DestinationCards from '@components/DestinationCards'
import Section from '@components/Section'
// import TeamCard from '@components/TeamCard'
import OurTeams from '@components/OurTeams'
export default function Home() {
    return (
      <Fragment>
    <main className="flex w-full flex-col items-center justify-between px-24 pt-5 lg:pt-24">    
      
<div className="relative  flex items-center overflow-hidden">
    <div className="container relative lg:flex px-3 lg:py-16 mx-auto">
    <div className="relative   sm:hidden sm:w-1/3 lg:w-3/5">
    <Image src="/homeimg.jpg" width={400} height={600} className="max-w-xs m-auto md:max-w-sm" alt='home page image'/>
</div>              
    <div className="relative z-20 flex flex-col mt-5 sm:mt-0 sm:w-2/3 lg:w-2/5">
              
        <h1 className="flex flex-col text-2xl lg:text-3xl leading-8 font-mono font-bold text-gray-800 uppercase  dark:text-white">
         STUDY ABROAD & ENHANCE  YOUR CAREER PROSPECTS
         </h1>
       
        <p className="text-sm text-gray-700 sm:text-base mt-5 dark:text-white">
        Welcome to BrightPath Consultancy, your trusted partner in higher education. We believe that every student has unique goals, interests, and challenges, which is why we offer personalized guidance and support tailored to your needs. From college admissions to scholarship applications, test preparation, and career counseling, our experienced consultants have the expertise and experience to help you succeed. We've helped countless students achieve their dreams of attending top universities and pursuing rewarding careers, and we're committed to helping you achieve your full potential. At BrightPath, we're dedicated to providing the highest level of service to students and families seeking to navigate the complex world of higher education. Contact us today to learn how we can help you take the first step towards a bright and successful future.
        </p>
        <div className="flex mt-8 pb-10 lg:pb-0">
            <a href="#" className="px-4 py-2 mr-4 bg-dark-gray uppercase  text-black  rounded-lg text-md hover:bg-indigo-200">
                YOUR APPLICATION STATUS
            </a>
            <a href="#" className="px-4 py-2 text-white bg-primary uppercase rounded-lg dark:text-white hover:bg-indigo-200 hover:text-primary text-md">
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
