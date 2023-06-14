/* eslint-disable react/no-unescaped-entities */

"use client"
import {useState} from "react"
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Packages from "../components/Packages"
import OurTeams from '../components/OurTeams'
import Section from '../components/Section'
import ApplicationStatus from '../components/ApplicationStatus'
import Link from 'next/link'
export default function Home() {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
    return (
      <div>
    <main className="bg-[url('/newhome.jpg')] bg-cover bg-fixed" >    
    <div className="lg:w-3/5 lg:ps-20 p-10">              
        <h1 className="flex flex-col text-2xl lg:text-2xl leading-8 font-mono font-bold text-gray-800 uppercase  dark:text-white">
         STUDY ABROAD & ENHANCE  YOUR CAREER PROSPECTS
         </h1>
       
        <p className="text-sm text-gray-700 sm:text-base mt-5 dark:text-white">
        Welcome to BrightPath Consultancy, your trusted partner in higher education. We believe that every student has unique goals, interests, and challenges, which is why we offer personalized guidance and support tailored to your needs. From college admissions to scholarship applications, test preparation, and career counseling, our experienced consultants have the expertise and experience to help you succeed. We've helped countless students achieve their dreams of attending top universities and pursuing rewarding careers, and we're committed to helping you achieve your full potential. At BrightPath, we're dedicated to providing the highest level of service to students and families seeking to navigate the complex world of higher education. Contact us today to learn how we can help you take the first step towards a bright and successful future.
        </p>
        <div className="flex mt-8 pb-10 lg:pb-0">
            <Link href="/applicationStatus" className="px-2 md:px-4 text-md  py-2 mr-4 bg-dark-gray uppercase  text-black  rounded-lg text-md hover:bg-indigo-200">
                YOUR APPLICATION STATUS
            </Link>
            <Link href="/programs" className="px-2 lg:px-4 py-2 text-white bg-primary uppercase rounded-lg dark:text-white hover:bg-indigo-200 hover:text-primary text-md">
                Find Programs
            </Link>
        </div>
    </div>

 <Packages />

            </main>
            <Services />
            <WhyChooseUs />
            {
                <div className='bg-primary py-10 lg:py-20'>
                <div className='text-center text-3xl text-white font-mono font-bold pb-10'>Our Teams</div>
                <OurTeams />
            </div>
           }
            <div className='bg-dark-gray py-10'>
                <Section>
                    <div className='text-center text-3xl font-mono font-bold pb-10 '>
                        Testimonials
                </div>
                </Section>
                <Testimonials />
            </div>
            {
                // view status
                <ApplicationStatus show={isOpen} setShow={closeModal} />
            }

           
            </div>
  )
}
