"use client"
import React from 'react'
import Section from '@components/Section'
import MultipleCarousel from '@components/MultipleCarousel'
import OurTeams from '@components/OurTeams'
import Testimonials from "@components/Testimonials"
 const AboutPage = () => {
  return (
    <div className='lg:w-11/12 lg:mx-auto px-10 lg:px-0 relative text-white'>
      <Section>
      <div className='text-center pt-20 text-4xl font-mono font-black'>About Bright way Education consultancy</div>
      </Section>
      <Section>
      <div className="pt-5 lg:pt-20 lg:w-4/5 lg:mx-auto">
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
      <Section>
      <div className='text-center text-4xl font-mono py-10'>
        Why Choose Us
        
        </div>
        </Section>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-20  lg:pt-20 w-11/12 lg:w-4/5 mx-auto'>
        <div className='flex justify-center'>
        <Section>          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className='lg:mt-5 text-lg'>Punctuality</div>
         
          </Section>
        </div>
        <div className='flex justify-center'>
          <Section>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap={1.5} stroke="currentColor" className="w-20 h-20">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
     </svg>
          <div className='lg:mt-5 text-lg'>Honesty</div>
          </Section>
          </div>
          <div className='flex justify-center'>
        <Section className='mt-10 lg:mt-0'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg>

          <div className='lg:mt-5'>Affordable</div>
            </Section>
          </div>
          <div className='flex justify-center'>
        <Section className='mt-10 lg:mt-0'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

          <div className='lg:mt-5 text-lg'>Accessible</div>
            </Section>
          </div>
          <div className='flex justify-center'>
      <Section>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

        <div className='lg:mt-5 text-lg'>Experts</div>
            </Section>
          </div>
          <div className='flex justify-center'>
      <Section>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
</svg>


        <div className='lg:mt-5 text-lg'>Variety</div>
            </Section>
          </div>
          <div className='flex justify-center'>
      <Section className='mt-10 lg:mt-0'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

        <div className='lg:mt-5 text-lg'>Accredited</div>
            </Section>
          </div>
          <div className='flex justify-center'>
      <Section className='mt-10 lg:mt-0'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>

        <div className='lg:mt-5 text-lg'>Convenience</div>
            </Section>
          </div>
          
      </div>
      <div className=' text-4xl lg:mt-5 my-10'>
        <Section>
        <div className='text-center font-mono pt-10 pb-10'>Our Study Abroad Destinations</div>
        </Section>
      <MultipleCarousel />
      </div>
      <div className='w-full my-10'>
        <Section>
          <div className='text-center text-4xl font-mono py-10'> Our Teams</div>
          </Section>
      <OurTeams />
      </div>
      <div className='my-10'>
        <Section>
          <div className='text-center text-4xl font-mono py-10'> Testimonials</div>
          </Section>
      <Testimonials />
      </div>
    </div>
  )
}
export default AboutPage