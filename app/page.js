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
        <main className="relative">    
            <div className="relative h-screen bg-[#E4F1FA]">
                <div className="absolute top-0 left-0 w-full h-full flex justify-between py-12 pl-20">
                    <div className="flex flex-col flex-[.25] mt-[10%]">
                        <h1 className="leading-loose text-5xl lg:text-6xl text-[#F48E20] font-[900] uppercase tracking-wider">
                            Your Trusted
                        </h1>
                        <h1 className="leading-loose text-5xl lg:text-6xl text-[#4BAA96] font-[900] uppercase tracking-wider">
                            Partner
                        </h1>
                        <p className="text-2xl font-[400] mt-5 text-[#000000]">
                        Your trusted partner in higher education
                        </p>
                        <p className="text-lg font-[400] mt-5 text-[#000000]">
                        We've helped countless students achieve their dreams of attending top universities and pursuing rewarding careers, and we're committed to helping you achieve your full potential
                        </p>
                        <div className="flex mt-8 pb-10 lg:pb-0">
                            <Link href="/applicationStatus" className="px-2 md:px-4 text-md  py-2 mr-4 bg-[#FFFFFF] border-[#FCB102] uppercase text-[#FCB102]  rounded-lg text-md hover:bg-indigo-200">
                                YOUR APPLICATION STATUS
                            </Link>
                            <Link href="/programs" className="px-2 lg:px-4 py-2 text-[#FFFFFF] font-black bg-[#FCB102] uppercase rounded-lg dark:text-white hover:bg-indigo-200 hover:text-primary text-md">
                                Find Programs
                            </Link>
                        </div>
                    </div> 
                    <div className="w-full h-full flex-[.7]">
                        <img src="/asset/hero.svg"/>
                    </div> 
                </div>
            </div>
            <Packages />
        </main>
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