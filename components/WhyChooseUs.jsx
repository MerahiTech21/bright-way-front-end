import React from 'react'
import Image from 'next/image'
import honesty from '@public/honesty.png'
import punctul from '@public/panctual.png'
import integrit from '@public/integrity.png'
import accessibility from '@public/accessibility.png'
import accountability from '@public/accountability.png'
import acridit from '@public/acridited.png'
import affordable from '@public/affordable.png'
import convenence from '@public/convenience.png'
import Section from './Section'
const WhyChooseUs = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-20 py-5  lg:py-20 w-11/12 mx-auto'>
        
    <div className='flex justify-center'>
      <Section className='flex flex-col justify-center items-center'>
        <Image src={honesty} alt="honest icon" style={{maxWidth:60}} className='backdrop-blur' />
        <div className='lg:mt-5 text-lg'>Honesty</div>
      </Section>
    </div>
    <div className='flex justify-center'>
    <Section>          
       <Image src={accountability} alt="accountability icon" style={{maxWidth:60}} />
      <div className='lg:mt-5 text-lg'>Accountablity</div>
     
      </Section>
    </div>
      <div className='flex justify-center'>
    <Section className='mt-10 lg:mt-0'>
        <Image src={affordable} alt="affordable icon" style={{maxWidth:60}} />
        <div className='lg:mt-5'>Affordable</div>
        </Section>
      </div>
      <div className='flex justify-center'>
    <Section className='mt-10 lg:mt-0'>
    <Image src={accessibility} alt="accessibility icon" style={{maxWidth:60}} />
      <div className='lg:mt-5 text-lg'>Accessible</div>
        </Section>
      </div>
      <div className='flex justify-center'>
  <Section>
  <Image src={punctul} alt="panctual icon" style={{maxWidth:60}} />

    <div className='lg:mt-5 text-lg'>Punctuality</div>
        </Section>
      </div>
      <div className='flex justify-center'>
  <Section>
  <Image src={convenence} alt="convenence icon" style={{maxWidth:60}} />
    <div className='lg:mt-5 text-lg'>Convenience</div>
        </Section>
      </div>
      <div className='flex justify-center'>
  <Section className='mt-10 lg:mt-0'>
  <Image src={acridit} alt="acridit icon"  style={{maxWidth:60}}/>
    <div className='lg:mt-5 text-lg text-center'>Accredited</div>
        </Section>
      </div>
      <div className='flex justify-center'>
  <Section className='mt-10 lg:mt-0'>
  <Image src={integrit} alt="convenence icon" style={{maxWidth:60}} />
    <div className='lg:mt-5 text-lg text-center'>Integrit</div>
        </Section>
      </div>
      
    </div>
  )
}

export default WhyChooseUs