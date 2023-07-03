import React from 'react';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { ImTelegram} from '@react-icons/all-files/im/ImTelegram'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { SiTiktok} from '@react-icons/all-files/si/SiTiktok'
import { IoLogoYoutube } from '@react-icons/all-files/io/IoLogoYoutube'
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { GoLocation } from '@react-icons/all-files/go/GoLocation'
import { FiPhoneIncoming } from '@react-icons/all-files/fi/FiPhoneIncoming'

const Footer = () => {        
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24 bg-primary">
            <div className="lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-[5%]">
                    <div className="px-4 flex-[.2] my-3 lg:px-0">
                        <img className="w-auto h-28" src="/asset/logoo.png" alt="" />
                        <p className="text-base leading-relaxed text-gray-600 mt-7 text-white">We have helped countless students achieve their dreams of attending top universities and pursuing rewarding careers, and we are committed to helping you achieve your full potential.</p>
                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100094126005686&mibextid=ZbWKwL" title="" className="rounded-full bg-blue-800 transition ease-in-out delay-150  hover:rotate-12  duration-1000 flex items-center justify-center text-white w-10 h-10">
                                 <FaFacebookSquare/>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/kurazeduconsultancy" title="" className="rounded-full bg-blue-400 transition ease-in-out delay-150  hover:rotate-12  duration-1000 flex items-center justify-center text-white w-10 h-10">
                                 <ImTelegram/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/kurazeducationalconsultancy/" title="" className="rounded-full bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000 flex items-center justify-center text-white w-10 h-10">
                                 <FaInstagramSquare/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@kuraz.educational" title="" className="rounded-full bg-black transition ease-in-out delay-150  hover:rotate-12  duration-1000 flex items-center justify-center text-white w-10 h-10">
                                 <SiTiktok/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@kurazeduconsultancy" title="" className="rounded-full bg-red-600 transition ease-in-out delay-150  hover:rotate-12  duration-1000 flex items-center justify-center text-white w-10 h-10">
                                 <IoLogoYoutube/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className='lg:hidden my-3 text-white'/>
                    <div className='text-white flex-[.1] my-3 px-4 lg:px-0'>
                        <p className="uppercase my-3 text-2xl">Company</p>
                        <ul className="mt-6 space-y-4 text-black">
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
                            </li>
                            <li>
                                <a href="/about" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                            </li>

                            <li>
                                <a href="/blog" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Blog </a>
                            </li>

                            <li>
                                <a href="/services" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Services</a>
                            </li>
                            <li>
                                <a href="/contact" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact</a>
                            </li>
                            <li>
                                <a href="/agreements" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                    <hr className='lg:hidden my-3 text-white'/>
                    <div className='text-white flex-[.4] my-3 px-4 lg:px-0'>
                        <div className='my-3 text-2xl uppercase'>Contacts</div>
                        <div className='my-2 font-bold'>Ethiopia Addis Ababa contact</div>
                        <div className='flex items-center p-1'>
                            <GoLocation />
                        <span className='ml-2 text-sm'>Addis Ababa,Ethiopia 22 Beside Golagol Bldg, Noah 2nd floor #17</span>
                        </div>
                        <div className='flex items-center p-1'>
                        <FiPhoneIncoming />
                            <span className='ml-2  text-sm pt-1'>+251977380909, +251910813571, +251920907878</span>
                        </div>
                        <div className='my-2 font-bold'>USA,Seattle contact</div>
                        <div className='flex items-center p-1'><GoLocation />
                        <span className='ml-2 text-sm'>11708 Ambaum Blvd SW.City:Burien State: Washington ZipCode: 98146</span>
                        </div>
                        <div className='flex items-center p-1'>
                        <FiPhoneIncoming />
                            <span className='ml-2 text-sm'>+12404239006, +12063535373</span>
                        </div>
                        <div className='my-2 font-bold'>Email Address</div>
                        <div className='flex items-center p-1'>
                            <HiOutlineMail/>
                            <span className='ml-2  text-sm'>info@kurazeduconsultancy.com, kurazeduconsultancy@gmail.com</span>
                        </div>
                    </div>
                </div>
                <hr className="mt-16 mb-10 border-white" />
                <p className="text-sm text-center text-white">© Copyright {new Date().getFullYear()}, All Rights Reserved by Kuraz Consultancy</p>
            </div>
        </section>

    )
}
export default Footer;