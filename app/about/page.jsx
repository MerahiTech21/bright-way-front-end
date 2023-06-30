/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Section from '../../components/Section'
import OurTeams from '../../components/OurTeams'
import Testimonials from "../../components/Testimonials"
import WhyChooseUs from '../../components/WhyChooseUs'
import SingleCarousel from '../../components/SingleCarousel'
import image1 from '../../public/scholar.jpeg'
import image2 from '../../public/collaboration.jpeg'
import Image from 'next/image'
 const AboutPage = () => {
  return (
    
     
      <div className='min-h-screen'>
      
      <div className='md:grid md:grid-cols-2 md:gap-4 pb-5 w-11/12 lg:min-h-full lg:pb-20 lg:mx-auto text-slate-900'>
        <div>
        <Section>
        <div className='text-center pt-10 text-2xl md:text-3xl text-slate-900 px-5 font-mono font-bold'>About Bright way Education consultancy</div>
        </Section>
        
        <Section>
          <div className='px-5 md:pe-20 pt-5 font-mono'>            
              <p>
              BrightPath Consultancy is a leading education consulting firm that helps students from around the world achieve their academic goals. Since our founding in May 2018, we have been providing expert guidance and support to students remotely. Our services are designed to make the complex and challenging process of studying abroad as smooth and stress-free as possible. Whether you're interested in studying in the United States, Canada, Europe, or elsewhere, our experienced consultants have the expertise and experience to help you find the right program, navigate the admissions process, and secure funding
              </p>
              <p>At BrightPath, we pride ourselves on providing a high level of service to each and every client. Our commitment to excellence has helped us earn a reputation as one of the few consulting firms for students interested in studying abroad. So if you're looking for expert guidance and support on your academic journey, look no further than BrightPath Consultancy. </p>
        </div>
          </Section>
          </div>
          <div className='lg:min-h-screen'>
                <SingleCarousel/>
              
         
          </div>
        </div>
        <div className='text-center text-2xl md:text-3xl font-mono font-bold py-10'>Experience</div>
      <div className='grid col-span-1 md:grid-cols-2 justify-center items-center'>
      <div className='px-10 md:px-20 align-top'>
        <Section>    
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
       
        </Section>
        </div>
        <Section>
          <div className='mt-10'>
          <Image  src={image1} alt='experience image' style={{minWidth:'80%'}} className='shadow-lg'  />
          </div>
          </Section>
      </div>

      <div className='grid col-span-1 md:grid-cols-2 justify-center items-center px-10 md:px-20 mt-10 md:mt-14'>
      <Section>
          <div className='relative'>
          <Image  src={image2} style={{minWidth:'80%'}} className='shadow-lg'  alt='experience image' />
          </div>
      </Section>
      <div className=''>
        <Section>       
        <div className='text-center text-2xl md:text-3xl font-mono font-bold py-10'>Collaboration</div>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
           
        </Section>
        </div>
    </div>
      <Section>
      <div className='text-center text-2xl md:text-3xl font-mono font-bold py-10'>
        Why Choose Us
        
        </div>
        </Section>
      <WhyChooseUs />
      <div className='bg-primary'>
      <div className='w-11/12 mx-auto py-10 '>
      <Section>
        <div className='text-center text-2xl md:text-3xl font-mono font-bold py-10 text-white'> Our Teams</div>
        </Section>
    <OurTeams />
    </div>
      </div>
      <div className='pb-10 bg-dark-gray'>
        <div className='w-11/12 mx-auto'>
        <Section>
        <div className='text-center text-2xl md:text-3xl font-mono font-bold py-10'> Testimonials</div>
          </Section>
          <Testimonials />
        </div>
      
      </div>
    </div>
  )
}
export default AboutPage