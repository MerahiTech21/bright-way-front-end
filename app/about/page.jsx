"use client"
import React from 'react'
import Section from '@components/Section'
import MultipleCarousel from '@components/MultipleCarousel'
import OurTeams from '@components/OurTeams'
import Testimonials from "@components/Testimonials"
import WhyChooseUs from '@components/WhyChooseUs'
import Image from 'next/image'
import aboutImage from '@public/about.webp'
 const AboutPage = () => {
  return (
    <div className='relative'>
    <div className='py-10 lg:pt-10 lg:pb-20 bg-transparent h-auto relative'>
   <Image src="/about1.webp" fill alt='' />
    
</div>  
     
      <div className="bg-light">
      <Section>
      <div className='text-center pt-20 text-4xl text-slate-900'>About Bright way Education consultancy</div>
      </Section>
        <div className='md:grid md:grid-cols-2 pt-5 pb-5 lg:pt-20 lg:pb-20 lg:w-4/5 lg:mx-auto text-slate-900'>
        <Section>
        <div className=''>
        The consulting firm Line Addis was founded in June 2017 in Addis Ababa, Ethiopia, to provide the best available service by assisting Ethiopian students to pursue Bachelors and Masters degrees in countries like Poland, Turkey, Italy, Canada, Russia, and more.

        We work in partnership with various international higher education institutions and Assist students in counseling, admission, visa application, and post-departure services, thus students can experience the simplicity and ease in the process of studying abroad more than ever.
        
        Over the past few years, we have helped hundreds of students achieve their goals. we have witnessed successful stories, Obtains local and international accreditation from renowned universities across the world. As a result, we have successfully distinguished ourselves in the industry.
        
        We can imagine that as an aspirant to international education planning further study proceedings can be tedious and stressful for many young people. Besides, it is also not easy to select an educational consulting firm or agency and invest time, money, and, above all, their future. many are looking for a professional adviser who helps them build their tomorrow.
        
        Ethos Line is built on is the notion that our educational consulting firm is only a facilitator and assistant. We are empathetic towards students, utterly respectful to their commentaries, and focuses on their welfare.
        
        The Motto that defines us is Results, Not Reports because we value your time and vouch for keeping up with our promises to deliver what we signed up for, therefore you can rely on us to plan your follow-up learning activities.
        
        When aspiring for international education, your journey begins here! We are here to help you choose the right program and college at your interest, assist you on admission and visa process, further more to post-departure services and support you may need during your studies.
        
        Today Line Addis has helped hundreds students and is considered one of the best and trusted agencies/consultants in Ethiopia.
        </div>
          </Section>
          <div>
          <Section>
              <div className='relative'>
                <Image src={aboutImage}  alt="" />
              </div>
          </Section>
          </div>
        </div>
       
       
        </div>
      
      <Section>
      <div className='text-center text-4xl font-mono py-10'>
        Why Choose Us
        
        </div>
        </Section>
      <WhyChooseUs />
      <div className='bg-primary text-4xl lg:mt-5 my-10 pb-10'>
        <Section>
        <div className='text-center font-mono pt-10 pb-10 text-white'>Our Study Abroad Destinations</div>
        </Section>
      <MultipleCarousel />
      </div>
      <div className='w-11/12 lg:w-4/5 mx-auto my-10 pb-10'>
        <Section>
          <div className='text-center text-4xl font-mono py-10'> Our Teams</div>
          </Section>
      <OurTeams />
      </div>
      <div className='pt-10 pb-10 bg-dark-gray'>
        <div className='w-11/12 lg:w-4/5 mx-auto'>
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