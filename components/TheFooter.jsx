import React from 'react'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { ImTelegram} from '@react-icons/all-files/im/ImTelegram'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { SiTiktok} from '@react-icons/all-files/si/SiTiktok'
import { IoLogoYoutube } from '@react-icons/all-files/io/IoLogoYoutube'
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'

// import { BsFacebook, BsTelegram, BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs'
// import { HiOutlineMail,FaLinkedinIn } from 'react-icons/ai'


import Section from './Section'
import Link from 'next/link'
 const TheFooter = () => {
  return (   
    <footer className="max-w-full bg-primary pt-10 lg:pt-20">
          <Section>
              <div className='text-center text-white text-xl lg:text-3xl font-bold'>Follow Us On</div>
              <div className='hidden lg:flex flex-row justify-center gap-10 mt-14 lg:mt-20' id="contactarea">
              <a href="/" className='rounded-full p-2 lg:p-5 bg-blue-800 transition ease-in-out delay-150  hover:rotate-12  duration-1000 '> <FaFacebookSquare size={50}  className='text-white' /></a>                  
              <a href="/" className='rounded-full p-2 lg:p-5 bg-blue-400 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <ImTelegram size={50} className='text-white' /></a>                  
              <a href="/" className='rounded-full p-2 lg:p-5 bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <FaInstagramSquare size={50} className='text-white' /></a>                    
             <a href="/" className='rounded-full p-2 lg:p-5 bg-red-500 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <HiOutlineMail size={50} className='text-white' /></a>                
            <a href="/" className='rounded-full p-2 lg:p-5 bg-blue-600 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <FaLinkedinIn size={50} className='text-white' /></a>                  
            <a href="/" className='rounded-full p-2 lg:p-5 bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <SiTiktok size={50} className='text-white' /></a>
            <a href="/" className='rounded-full p-2 lg:p-5 bg-red-600 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <IoLogoYoutube size={50} className='text-white' /></a>

                  
              </div>
              
              <div className='w-full flex flex-row justify-center lg:hidden gap-2 mt-5' id="contactarea">
              <a href="/" className='rounded-full p-2 lg:p-5 bg-blue-800 transition ease-in-out delay-150  hover:rotate-12  duration-1000 '> <FaFacebookSquare size={20}  className='text-white' /></a>
              <a href="/" className='rounded-full p-2 lg:p-5 bg-blue-400 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <ImTelegram size={20} className='text-white' /></a>
              <a href="/" className='rounded-full p-2 lg:p-5 bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <FaInstagramSquare size={20} className='text-white' /></a>
              <a href="/" className='rounded-full p-2 lg:p-5 bg-red-500 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <HiOutlineMail size={20} className='text-white' /></a>
              <a href="/" className='rounded-full p-2 lg:p-5 bg-blue-600 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <FaLinkedinIn size={20} className='text-white' /></a>
              <a href="/" className='rounded-full p-2 lg:p-5 bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <SiTiktok size={20} className='text-white' /></a>
              <a href="/" className='rounded-full p-2 lg:p-5 bg-red-600 transition ease-in-out delay-150  hover:rotate-12  duration-1000'> <IoLogoYoutube size={20} className='text-white' /></a>
              </div>
                
          </Section>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 w-full mx-auto px-5 lg:px-20 mt-10 lg:mt-14'>
              <Section>
                  <div className='text-white text-2xl'>Address One</div>
                  <div className='text-white text-xl'>1. Bole Street Addis Ababa, Ethiopia</div>
                  <div className='text-white text-xl'>+251920907878    +251910813571</div>
                  <div className='mt-10 lg:mt-14'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252226.0134836966!2d38.4836695395734!3d8.969248113153492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84f21691961f%3A0x822a438ed5adcc15!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2snl!4v1684613347486!5m2!1sen!2snl" className='w-full h-96' style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              </Section>
               <Section>
                  <div className='text-white text-2xl'>Address Two</div>
                  <div className='text-white text-xl'>2. 7523 24th Ave SW Seattle, Washington</div>
                  <div className='text-white text-xl'>206-353-5373</div>

                  <div className='mt-10 lg:mt-14'>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.6958103715006!2d-122.36837650829688!3d47.53478491864081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490417277c8cbf3%3A0x4ff6934b6aa5dfaa!2s7523%2024th%20Ave%20SW%2C%20Seattle%2C%20WA%2098106%2C%20USA!5e0!3m2!1sen!2sca!4v1687348006478!5m2!1sen!2sca" className='w-full h-96' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  
              </Section>
              
          </div>
          <div className='w-full bg-white text-center mt-14 pt-6 pb-6'>Copyright © 2023 | Developed by Merahi Technologies</div>
</footer>

  )
}
export default TheFooter