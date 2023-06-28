import Image from "next/image"
import Link from "next/link"
import Section from "../../components/Section";
import url from "../url";
async function getData() {
  const res = await fetch(`${url}/services`,{cache: 'no-store'});  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  } 
  return res.json();
}
export default async function Services() {
  const services = await getData()
    
  return (
    <div className="pb-5 lg:pb-20">
      <div className="pt-20 pb-10 lg:pb-20 w-full">
        <Section>
        <h2 className="text-center text-3xl font-bold font-mon sm:text-4xl">Services We provide</h2>
        </Section>
   </div>
      <div className="lg:w-11/12 lg:mx-auto px-6 lg:px-8">
        
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16     lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Section key={service.id} >
              <article className="flex max-w-xl flex-col items-start justify-between overflow-hidden bg-white border rounded-lg shadow-xl cursor-pointer py-5 lg:py-10">
              <Link href={`/services/${service.id}`} className="block text-center w-full">
              <Image alt="service icon" src={service.icon} width={250} height={100} className="mx-auto object-cover  "/>
            </Link>          
              
              <div className="group relative px-5">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/service${service.id}`} className="hover:text-blue-600">
                    <span className="absolute inset-0" />
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{service.short_desc}</p>
              </div>               
              </article>
              </Section>
          ))}
        </div>
      </div>
      </div>
  )
}
