import React from 'react'
import Image from 'next/image'
import honesty from '../public/honesty.png'
import punctul from '../public/panctual.png'
import integrit from '../public/integrity.png'
import accessibility from '../public/accessibility.png'
import accountability from '../public/accountability.png'
import acridit from '../public/acridited.png'
import affordable from '../public/affordable.png'
import convenence from '../public/convenience.png'

const WhyChooseUs = () => {
  return (
    <div className='grid grid-cols-2 font-mono mx-auto md:grid-cols-4 lg:grid-cols-4 gap-20 py-20 '>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>
          <Image src={honesty} alt="honest icon" width={80} height={80} className='backdrop-blur' />
          <div className='mt-5'>Honesty</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>          
          <Image src={accountability} alt="accountability icon" width={80} height={80} className='backdrop-blur' />
          <div className='mt-5'>Accountablity</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>
          <Image src={affordable} alt="affordable icon" width={80} height={80} className='backdrop-blur'/>
          <div className='mt-5'>Affordable</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>
          <Image src={accessibility} alt="accessibility icon" style={{maxWidth:"60%",maxHeight:"60%"}} className='backdrop-blur' />
          <div className='mt-5'>Accessible</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>
          <Image src={punctul} alt="panctual icon" width={80} height={80} className='backdrop-blur' />
          <div className='mt-5'>Punctuality</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>
          <Image src={convenence} alt="convenence icon" width={80} height={80} className='backdrop-blur' />
          <div className='mt-5'>Convenience</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>
          <Image src={acridit} alt="acridit icon" width={80} height={80} className='backdrop-blur' />
          <div className='mt-5'>Accredited</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-between'>
          <Image src={integrit} alt="convenence icon" width={80} height={80} className='backdrop-blur' />
          <div className='mt-5'>Integrit</div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs