/* eslint-disable react/no-unescaped-entities */
"use client"
import {useState} from "react"
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Packages from "../components/Packages"
import HomeTeams from '../components/HomeTeam'
import Link from 'next/link'
export default function Home() {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
    return (

       <div>
        <main className="">    
            <div className="h-auto xl:h-auto bg-[#E4F1FA]">
                <div className="w-full h-full flex flex-col pt-20 justify-start items-center md:pt-32 lg:pt-32 xl:flex-row xl:justify-between">
                    <div className="flex flex-col items text-center px-[5%] xl:flex-[.35] xl:text-left">
                        <h1 className="leading-relaxed text-5xl text-[#F48E20] font-[900] uppercase tracking-wider xl:text-5xl lg:leading-relaxed">
                            Your Trusted
                        </h1>
                        <h1 className="leading-relaxed text-5xl text-[#4BAA96] font-[900] uppercase tracking-wider lg:text-5xl lg:leading-relaxed">
                            Partner
                        </h1>
                        <p className="leading-relaxed text-3xl font-[500] text-[#F48E20] lg:leading-relaxed">
                        Study abroad & enhance your career prospects.
                        </p>
                        <p className="text-xl font-[400] text-[#000000] px-5 mt-3 md:px-10 lg:leading-relaxed xl:px-0">
                        We've helped countless students achieve their dreams of attending top universities and pursuing rewarding careers, and we're committed to helping you achieve your full potential.
                        </p>
                        <div className="flex justify-center items-center mt-8 pb-1 lg:pb-2 xl:justify-start xl:items-start">
                            <Link href="/programs" className="px-4  py-2 text-[#FFFFFF] font-black bg-[#FCB102] uppercase rounded-lg hover:bg-primary text-md md:px- 8 md:py-2 md:text-lg lg:px-4 lg:py-3">
                                Find Programs
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-full xl:flex-[.65]">
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
        <Testimonials />
        </div>
       
       </div>
  )
}