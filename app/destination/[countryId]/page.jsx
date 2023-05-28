/* eslint-disable react/no-unescaped-entities */
import Section from '@components/Section'
import React from 'react'
import { TiStarFullOutline } from '@react-icons/all-files/ti/TiStarFullOutline'

const DestinationPage = () => {
  return (
    <div>
      <Section>
        <div className='text-center text-2xl lg:text-4xl text-primary py-10 lg:pt-20 font-extrabold'>Study your Bachelor's or Master's degree in Canada</div>
      </Section>
      <Section>
        <div className='text-center text-3xl text-primary pb-5 lg:pb-10'>About Canada</div>        
      </Section>
      <div className='w-11/12 lg:w-4/5 mx-auto pb-10 lg:pb-20' >
      <Section>
      <div className='text-primary'>
      Canada consistently ranks as one of the best countries in the world and is currently the #1 country for quality of life. Study in Canada, and you’ll receive an internationally recognized education from some of the top educators and academics in the world.
      </div>
        </Section>
        <Section>
          <div className='w-fit'>
            
            Canada fast facts
            -36.3 million people
            -250 ethnic origins
            -6.4 million people speak an immigrant language
            -60+ Aboriginal languages
            -10 provinces and 3 territories
            -243,000 km of coastline – the world’s longest
            -3 oceans surrounding 
          </div>
        </Section>
      </div>
      {
        // appli
      }
      <div className='py-10 lg:py-20 bg-dark-gray'>
        <div className='w-11/12 lg:w-4/5 mx-auto'>
        <Section>
        <div className='text-center text-2xl lg:text-4xl font-extrabold pt-0 lg:py-10'>
        Application Documents
        </div>
      </Section>
      <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
            <div>
            <Section>
                <div className='text-2xl lg:text-3xl font-bold mt-5 lg:mt-0'>Undergraduate  Requirements</div>
                </Section>
              <Section>
              <p className='py-2 flex items-center'> <TiStarFullOutline />  High School Transcript</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> 10th and 12th National Examination</p>
              <p className='py-2 flex items-center'><TiStarFullOutline className='self-stretch' /> English Proficiency ( TOEFL, IELTS, Doulingo, Letter of Medium of Instruction )</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> SAT ( Scholastic Aptitude Test )</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> Bank Statement ( Bank Letter, Declaration of Finance Form, and other)</p>
              </Section>
              
            </div>
        <div className=''>
             <Section>
              <div className='text-2xl lg:text-3xl font-bold mt-5 lg:mt-0'> Masters Requirement</div>
              </Section>
              <Section>
              <p className='py-2 flex items-center'><TiStarFullOutline /> Undergraduate Transcript ( Student Copy)</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> Original Degree</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> English Proficiency ( TOEFL, IELTS, Doulingo, Letter of Medium of
                Instruction )</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> Resume</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> Sample Writing</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> Letter of Recommendations ( 3 or more )</p>
              <p className='py-2 flex items-center'><TiStarFullOutline /> GRE ( Graduate Record Exam )</p>
                <p className='py-2 flex items-center'><TiStarFullOutline /> Official Transcript ( From School</p>
                </Section>
            </div>
              
              <div className=''>
              <Section>
                  <div className='text-2xl lg:text-3xl font-bold mt-5 lg:mt-0'> PhD Requirement</div>
              </Section>
              <Section>
            <p className='py-2 flex items-center'><TiStarFullOutline /> Undergraduate Transcript ( Student Copy)</p>
            <p className='py-2 flex items-center'><TiStarFullOutline /> 
            Masters Degree with Graduation Paper ( Thesis)
            </p>
            <p className='py-2 flex items-center'><TiStarFullOutline /> Original Degree ( Both Masters and Undergraduate )</p>
            <p className='py-2 flex items-center'><TiStarFullOutline /> Research Proposal</p>
            <p className='py-2 flex items-center'><TiStarFullOutline /> Letter of Recommendations ( 3 or more )</p>
            <p className='py-2 flex items-center'><TiStarFullOutline /> English Proficiency ( TOEFL, IELTS, Doulingo, Letter of Medium of
              Instruction )</p>
            <p className='py-2 flex items-center'><TiStarFullOutline /> GRE ( Graduate Record Exam )</p>
            <p className='py-2 flex items-center'><TiStarFullOutline /> Official Transcript ( Both Masters and Undergraduate From School )</p>
            </Section>
            </div>

      </div>
        </div>
      </div>
      <div className='py-10'>
      <Section>
          <div className='text-center text-2xl lg:text-4xl text-primary py-10 lg:pt-20 font-extrabold'>General Information on Studying in Canada</div>
          
        </Section>
        <div className='w-11/12 lg:w-4/5 mx-auto'>
          <Section>
            <p className='font-bold'>Available jobs</p>
            <p>            
            Some of the part-time student jobs in Canada are: bookkeeper , customer service assistant , office assistant, restaurant and during summer1 breaks you will have the opportunity to find temporary jobs at: festivals ,camps , concerts , holiday venues,Online Tutoring. Participate in Market Research. Proofreader. Social Media Manager , Data Entry Online Jobs and Freelance Writer.
            </p>
          </Section>
          <Section>
            <p className='font-bold mt-3'>how much can you earn?
            </p>
            <p>
              The average part time for students salary in Canada is $35,100 per year or $18 per hour. Entry level positions start at $29,250 per year while most experienced workers make up to $68,250 per year.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage