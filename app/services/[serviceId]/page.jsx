import React from "react"
import Image from "next/image"
import url from "../../url"
async function getData(id) {
  const res = await fetch(`${url}/services/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
export default async function ServiceDetail({ params }) {
  const serviceDetail = await getData(params.serviceId)
  return (
    <div>
      <div className="md:w-4/5 md:mx-auto mt-20 p-5 ">
        <div className="w-11-12 lg:w-4/5 mx-auto relative">
          <Image
          src={serviceDetail?.photos[0]?.path}
          alt="blog image"
            width={1000}
            height={500}
            className="object-cover"
        /></div>
        <h1 className="text-2xl font-bold font-sans mt-10">{serviceDetail.title }</h1>
        <div dangerouslySetInnerHTML={{__html: serviceDetail.description}}>
     
        </div>
      </div>
    </div>
  )
}
