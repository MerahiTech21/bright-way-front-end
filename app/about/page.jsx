/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Section from '../../components/Section'
import OurTeams from '../../components/OurTeams'
import Testimonials from "../../components/Testimonials"
import WhyChooseUs from '../../components/WhyChooseUs'
import SingleCarousel from '../../components/SingleCarousel'
import Packages from '../../components/Packages'
 const AboutPage = () => {
  return (
    
     
      <div className='min-h-screen'>
      
      <div className='md:grid md:grid-cols-2 md:gap-4 pb-5 w-11/12 lg:min-h-full lg:pb-20 lg:mx-auto text-slate-900'>
        <div>
        <Section>
        <div className='text-center pt-10 text-3xl text-slate-900'>About Bright way Education consultancy</div>
        </Section>
        
        <Section>
          <div className='md:pe-20 pt-5'>            
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
       
       <Packages />
        
      
      <Section>
      <div className='text-center text-4xl font-mono py-10'>
        Why Choose Us
        
        </div>
        </Section>
      <WhyChooseUs />
      <div className='bg-primary'>
      <div className='w-11/12 mx-auto py-10 '>
      <Section>
        <div className='text-center text-4xl font-mono py-10 text-white'> Our Teams</div>
        </Section>
    <OurTeams />
    </div>
      </div>
      <div className='pb-10 bg-dark-gray'>
        <div className='w-11/12 mx-auto'>
        <Section>
        <div className='text-center text-4xl font-mono py-10'> Testimonials</div>
          </Section>
          <Testimonials />
        </div>
      
      </div>
    </div>
  )
}
export default AboutPage