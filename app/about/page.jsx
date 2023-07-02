/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Section from '../../components/Section'
import OurTeams from '../../components/OurTeams'
import Testimonials from "../../components/Testimonials"
import WhyChooseUs from '../../components/WhyChooseUs'
import image1 from '../../public/experience.png'
import image2 from '../../public/collaboration.jpg'
import Image from 'next/image'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import url from '../url'
const getVedioAddress = async () => {
  const res = await axios.get(`${url}/get_vedio`)
  return res.data
}
const AboutPage = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["vedio"],
    queryFn: () => getVedioAddress(),
  });
  return (
    
     
      <div>
      <div className='bg-gray'>
      <Section>
      <div className='pt-32 text-2xl md:text-3xl text-slate-900 px-14 font-mono font-bold'>About Bright way Education consultancy</div>
      </Section>
      <div className='md:grid md:grid-cols-2 md:gap-4 pb-5 w-11/12 lg:pb-20 mx-auto text-slate-900'>
        <div>      
        
        <Section>
          <div className="md:pe-10 text-base leading-relaxed text-gray-600 mt-7">            
              <p>
              BrightPath Consultancy is a leading education consulting firm that helps students from around the world achieve their academic goals. Since our founding in May 2018, we have been providing expert guidance and support to students remotely. Our services are designed to make the complex and challenging process of studying abroad as smooth and stress-free as possible. Whether you're interested in studying in the United States, Canada, Europe, or elsewhere, our experienced consultants have the expertise and experience to help you find the right program, navigate the admissions process, and secure funding
              </p>
              <p>At BrightPath, we pride ourselves on providing a high level of service to each and every client. Our commitment to excellence has helped us earn a reputation as one of the few consulting firms for students interested in studying abroad. So if you're looking for expert guidance and support on your academic journey, look no further than BrightPath Consultancy. </p>
        </div>
          </Section>
          </div>
          <div className='mt-5 rounded-lg self-center'>
          <iframe width="100%" height="400"
            src={data.path+'?controls=0'} className='rounded-md'>
          </iframe>
         
          </div>
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='w-11/12 mx-auto'>
        <img src='/vision.png' alt='vision-mission image' />
        </div>
      </div>
      <div className='p-5 md:p-10 lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
        <div className='border border-secondary rounded-lg p-5'>
          <div className='text-center text-secondary'>MISSION</div>
        <div>Our mission is to empower individuals and institutions in their pursuit of educational excellence by providing comprehensive consultancy services. We strive to support our clients in making informed decisions and implementing effective strategies that unlock their full potential, enabling them to achieve their educational goals</div>
        </div>
        <div className='border border-secondary rounded-lg p-5 mt-5 sm:mt-0'>
          <div className='text-center text-secondary'>VISION</div>
        <div>Our vision is to be the leading provider of educational consultancy services, recognized for our expertise, integrity and commitment to transforming lives through education. We aspire to foster  a global community where every individual has access high quality education and can unleash their talents shaping a brighter future for themselves and society </div>
        </div>
        <div className='border border-secondary rounded-lg p-5 mt-5 sm:mt-0'>
        <div className='text-center text-secondary'>VALUES</div>
      <div>We belive in the power of collaboration and actively seek partnerships with clients, educational institutions and relevant stakeholders. By working together we can laverage collective expertise and resources to drive positive change and maximize impact </div>
      </div>
      </div>
      <div className='bg-gray py-5 md:py-10'>
      <div className='grid col-span-1 lg:grid-cols-2  items-center w-11/12 mx-auto mt-5'>
      <Section>
      <div className='hidden md:block mt-14'>
      <Image  src={image1} alt='experience image' style={{minWidth:'80%'}} className='shadow-2xl rounded-lg'  />
      </div>
      </Section>
        <div className='self-start'>
          <Section>
            <div className='text-xl md:text-2xl lg:3xl font-mono font-bold pb-5 md:pb-10 text-secondary'>
            Kuraz Educational Consultancy: 8 Years of Empowering Students
            </div>
          </Section>
        <Section>    
            <p>At Kuraz Educational Consultancy, we are proud to have spent the last 8 years empowering students on their educational journeys. Our dedicated team of experts has guided countless individuals to achieve their academic dreams by providing personalized consultancy services.Here's a glimpse into our remarkable experience:</p>       
          </Section>
          <Section>    
          <p>We began our mission of bridging the gap between students and their aspirations, assisting them with university admissions, course selection, and scholarship opportunities. Our services expanded, encompassing a wider range of educational opportunities. We established partnerships with prestigious universities to offer comprehensive advice to students. ‘We extended our impact to international students, offering guidance on visa processes, cultural adaptation, and post graduation opportunities. Witnessing numerous success stories, we continue to evolve our services, staying updated with educational trends and forging new partnerships.</p>       
          </Section>
          <Section>    
          <p>As we embark on the next phase, our dedication to empowering students remains unwavering. Join
          us at Kuraz Educational Consultancy to shape a future brimming with educational possibilities. Short, concise, and impactful, this summary highlights the key aspects of Kuraz Educational
          Consultancy's journey over the past 8 years.
          </p>       
      </Section>
        </div>
        <div className='block md:hidden mt-10'>
        <Image  src={image1} alt='experience image' style={{minWidth:'100%'}} className='shadow-2xl rounded-lg'  />
        </div>
      </div>

      <div className='grid col-span-1 lg:grid-cols-2 items-center mt-10 md:mt-14 w-11/12 mx-auto'>
      <div className='self-start md:pr-16'>
        <Section>       
        <div className='text-xl md:text-2xl lg:3xl font-mono font-bold pb-5 md:py-10 text-secondary mt-5 lg:mt-0'>Join our team and embark on a transformative journey towards educational excellence!</div>
              
          </Section>
          <Section>
          <p>At Kuraz Educational Consultancy, we firmly believe that collaboration is the key to unlocking the full potential of education. We invite you to be a part of our dynamic team, where passion meets purpose and innovation meets impact.</p>
          </Section>
          <Section>
          <p>With a shared vision of empowering learners and educators alike, we strive to create a supportive and inclusive community. Through collaboration, we leverage our collective expertise, experience, and diverse perspectives to drive positive change in the education landscape.</p>
          </Section>
          <Section>
          <p>As a member of our team, you will have the opportunity to engage in meaningful projects, contribute to cutting-edge research, and develop groundbreaking solutions that address the evolving needs of students and institutions. Together, we will redefine what's possible in education.</p>
          </Section>
          <Section>
          <p>Whether you are an educator, researcher, administrator, or industry professional, your unique talents and insights are valued here. Join forces with like-minded individuals who are committed to making a difference. Together, we will shape the future of education and create transformative learning experiences that empower individuals and enrich communities.
          Seize this chance to be a part of something extraordinary. Together, let's ignite a passion for learning, nurture talent, and build a brighter future through collaborative educational consultancy.
          </p>
          </Section>
          <Section>
          <p>Join our team today and let's make a lasting impact, one educational success story at a time.</p>
          </Section>
        </div>
      <Section>
          <div className='mt-5 md:mt-20'>
          <Image  src={image2} style={{minWidth:'100%'}} className='shadow-2xl rounded-lg'  alt='experience image' />
          </div>
      </Section>
      
    </div>
      </div>
    
      <Section>
      <div className='text-center text-2xl md:text-3xl font-mono font-bold py-7 md:py-10'>
        Why Choose Us
        
        </div>
        </Section>
      <WhyChooseUs />
      <div className='min:w-screen bg-[#4BAA96] bg-repeat bg-cover bg-[url(/bgall.jpg)]'>
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