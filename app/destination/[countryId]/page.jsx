/* eslint-disable react/no-unescaped-entities */
import Section from '../../../components/Section'
import React from 'react'
import { TiStarFullOutline } from '@react-icons/all-files/ti/TiStarFullOutline'
import url from "../../url"
async function getData(id) {
  const res = await fetch(`${url}/destinations/${id}`,{cache:"no-store"});
  
  if (!res.ok) {
    throw new Error('Failed to fetch destination');
  }
 
  return res.json();
}
export default async function DestinationPage ({ params }) {
  const destination = await getData(params.countryId)
  return (
    <div>
      <Section>
        <div className='text-center text-2xl lg:text-4xl text-primary py-10 lg:pt-20 font-extrabold'>Study your Bachelor's or Master's degree in {destination.title}</div>
      </Section>
      <Section>
        <div className='text-center text-3xl text-primary pb-5 lg:pb-10'>About {destination.title}</div>        
      </Section>
      <div className='w-11/12 lg:w-4/5 mx-auto pb-10 lg:pb-20' >
      <Section>
          <div className='text-primary' dangerouslySetInnerHTML={{__html: destination.about}}>
            
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
          <div className='text-center text-2xl lg:text-4xl text-primary py-10 lg:pt-20 font-extrabold'>General Information on Studying in {destination.title}</div>
          
        </Section>
        <div className='w-11/12 lg:w-4/5 mx-auto'>
          <Section>
            <p className='font-bold'>Requirement to Study in { destination.title}</p>
            <div dangerouslySetInnerHTML={{__html: destination.requirement}}>
            </div>
          </Section>
          <Section>
            <div dangerouslySetInnerHTML={{__html: destination.description}}></div>
            
          </Section>
        </div>
      </div>
    </div>
  )
}

