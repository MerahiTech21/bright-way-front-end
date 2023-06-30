/* eslint-disable react/no-unescaped-entities */
"use client"
import {useState} from "react"
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Packages from "../components/Packages"
import HomeTeams from '../components/HomeTeam'
import Section from '../components/Section'
import ApplicationStatus from '../components/ApplicationStatus'
import Link from 'next/link'
import HomeTestimonilas from '../components/HomeTestimonilas'
export default function Home() {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
    return (

       <div>
        <main className="">    
            <div className="h-auto lg:h-screen bg-[#E4F1FA]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:mb-auto justify-center lg:justify-between items-center pt-12 lg:pl-20">
                    <div className="flex flex-col lg:flex-[.3] text-center lg:text-left">
                        <h1 className="leading-loose text-5xl lg:text-7xl text-[#F48E20] font-[900] uppercase tracking-wider">
                            Your Trusted
                        </h1>
                        <h1 className="leading-loose text-5xl lg:text-7xl text-[#4BAA96] font-[900] uppercase tracking-wider">
                            Partner
                        </h1>
                        <p className="text-3xl font-[500] mt-5 text-[#F48E20]">
                        Study abroad & enhance your career prospects.
                        </p>
                        <p className="text-xl font-[400] mt-5 text-[#000000] text-justify">
                        We've helped countless students achieve their dreams of attending top universities and pursuing rewarding careers, and we're committed to helping you achieve your full potential.
                        </p>
                        <div className="flex mt-8 pb-0 lg:pb-0">
                            <Link href="/applicationStatus" className="px-2 md:px-4 text-md  py-2 mr-4 bg-[#FFFFFF] border-[#FCB102] uppercase text-[#FCB102]  rounded-lg text-md hover:bg-indigo-200">
                                YOUR APPLICATION STATUS
                            </Link>
                            <Link href="/programs" className="px-2 lg:px-4 py-2 text-[#FFFFFF] font-black bg-[#FCB102] uppercase rounded-lg dark:text-white hover:bg-indigo-200 hover:text-primary text-md">
                                Find Programs
                            </Link>
                        </div>
                    </div> 
                    <div className="w-full h-full lg:flex-[.7]">
                        <img src="/asset/hero.svg"/>
                    </div> 
                </div>
            </div>
            <Packages />
        </main>
        <div className="py-10 bg-[#E4F1FA]">
            <p className="text-3xl text-[#F48E20] text-center font-[700]">WHY CHOOSE US?</p>
            <WhyChooseUs />
        </div>
        <HomeTeams />
        <div className='bg-dark-gray py-10'>
        <HomeTestimonilas />
        </div>
        {
        // view status
        <ApplicationStatus show={isOpen} setShow={closeModal} />
        }
       </div>
  )
}