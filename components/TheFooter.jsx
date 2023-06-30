import React from 'react'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { ImTelegram} from '@react-icons/all-files/im/ImTelegram'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { SiTiktok} from '@react-icons/all-files/si/SiTiktok'
import { IoLogoYoutube } from '@react-icons/all-files/io/IoLogoYoutube'
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { GoLocation } from '@react-icons/all-files/go/GoLocation'
import { FiPhoneIncoming } from '@react-icons/all-files/fi/FiPhoneIncoming'

import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/logo.png"
import Section from './Section'
 const TheFooter = () => {
  return (   
    <footer className="max-w-full bg-primary bg-contain bg-[url('/bgall.jpg')] backdrop-brightness-0">
        <div className='min:w-screen h-full bg-[#4BAA96] bg-opacity-75 py-10'>
          <Section>
              <div className='text-center text-white text-2xl md:text-3xl font-mono font-bold'>Follow Us On</div>
              <div className='flex flex-row justify-center gap-3 lg:mt-10' id="contactarea">
              <a href="/" className='rounded-full p-2 lg:p-3 bg-blue-800 transition ease-in-out delay-150  hover:rotate-12  duration-1000 '> <FaFacebookSquare size={20}  className='text-white' /></a>                  
              <a href="/" className='rounded-full p-2 lg:p-3 bg-blue-400 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <ImTelegram size={20} className='text-white' /></a>                  
              <a href="/" className='rounded-full p-2 lg:p-3 bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <FaInstagramSquare size={20} className='text-white' /></a>                    
             <a href="/" className='rounded-full p-2 lg:p-3 bg-red-500 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <HiOutlineMail size={20} className='text-white' /></a>                
            <a href="/" className='rounded-full p-2 lg:p-3 bg-blue-600 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <FaLinkedinIn size={20} className='text-white' /></a>                  
            <a href="/" className='rounded-full p-2 lg:p-3 bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <SiTiktok size={20} className='text-white' /></a>
            <a href="/" className='rounded-full p-2 lg:p-3 bg-red-600 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <IoLogoYoutube size={20} className='text-white' /></a>
                  
              </div>                
          </Section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full mx-auto px-5 lg:px-20 mt-10 lg:mt-14 ">
              <div>
                  <Image src={logo} alt='logo' style={{ width: "200px",height:'200px' }}/>
              </div>
              <div className='flex justify-center'>
              <div className='text-white'>
              <div className='mb-3 text-2xl'>Services</div>
              <div>
                  <Link href={`services/${1}`} className='text-sm hover:underline hover:text-secondary'>Family-Based Immigration Visas</Link></div>
              <div><Link href={`services/${1}`} className='text-sm hover:underline hover:text-secondary'>Employment-Based Immigration Visas</Link></div>
              <div><Link href={`services/${1}`} className='text-sm hover:underline hover:text-secondary'>Diversity Visa Program</Link></div>
              <div><Link href={`services/${1}`} className='text-sm hover:underline hover:text-secondary'>Family-Based Immigration Visas</Link></div>
              <div><Link href={`services/${1}`} className='text-sm hover:underline hover:text-secondary'>Family-Based Immigration Visas</Link>
              </div>
          </div>
              </div>
              <div className='flex justify-center'>
              <div className='text-white'>
                  <div className='mb-3 text-2xl'>Contacts</div>
                  <div>Address One</div>
                  <div className='flex items-center pt-1'>
                      <GoLocation />
                  <span className='ml-2 text-sm'>Bole Street Addis Ababa, Ethiopia</span>
                  </div>
                  <div className='flex items-center'>
                  <FiPhoneIncoming />
                      <span className='ml-2  text-sm pt-1'>+251920907878 +251910813571</span>
                  </div>
                  <div className='pt-1'>Address Two</div>
                  <div className='flex items-center pt-1'><GoLocation />
                  <span className='ml-2 text-sm'>7523 24th Ave SW Seattle, Washington</span>
                  </div>
                  <div className='flex items-center pt-1'>
                  <FiPhoneIncoming />
                      <span className='ml-2 text-sm'>206-353-5373</span>
                  </div>
                  </div>
              </div>
          </div>
          {/* <div className='w-full bg-white text-center mt-14 pt-6 pb-6 font-mono'>Copyright © 2023 | Developed by Merahi Technologies</div> */}
        </div>
    </footer>

  )
}
export default TheFooter