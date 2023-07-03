/* eslint-disable @next/next/no-img-element */
'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link"
import Section from "../../components/Section";
import url from "../url";
async function getData() {
  const res = await axios.get(`${url}/services`)
  return res.data
}
export const metadata = {
  title: 'kuraz consultancy',
  description: '...',
}
export default async function Services() {
  const {data: services, isSuccess} = useQuery({
    queryKey: ["services"],
    queryFn: () => getData()
  })
    
  return (
    <div className="pb-5 lg:pb-20">
      <div className="pt-20 sm:pt-40 pb-10 lg:pb-20 w-full">
        <Section>
        <div className="text-center text-3xl font-bold font-mon sm:text-4xl">Services We provide</div>
        </Section>
      </div>
      <div className="lg:w-11/12 lg:mx-auto px-6 lg:px-8">
        
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16 lg:mx-0 lg:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
          services?.length > 0 && services.map((service) => (
            <Section key={service.id} >
              <div className="border border-secondary rounded-lg shadow-xl pb-5 min-h-[28rem] max-h-[28rem]">
              <div  className="text-center w-full ">
              <img alt="service icon" src={service.icon}  className="w-full min-h-[15rem] max-h-[15rem] rounded-t-lg"/>
            </div>          
              
              <div className="px-5 mt-5">
                <dv className="text-lg font-semibold">
                  <div>
                    {service.title}
                  </div>
                </dv>
                <p className="line-clamp-3 text-sm leading-6 text-gray-600">{service.short_desc}</p>
              </div>               
              </div>
              </Section>
          ))}
        </div>
      </div>
      </div>
  )
}