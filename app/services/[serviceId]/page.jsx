'use client'
import React from "react"
import Image from "next/image"
import url from "../../url"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
async function getData(id) {
  const res = await axios(`${url}/services/${id}`);
  return res.data
}
export default async function ServiceDetail({ params }) {

  const { data: serviceDetail, isSuccess } = useQuery(["serviceDetail", params.serviceId], () => {
    return getData(params.serviceId);
  });

  return (
    <div>
      {
        (isSuccess && serviceDetail) && (
          <div className="md:w-4/5 md:mx-auto mt-20 p-5 ">
            <div className="w-11-12 lg:w-4/5 mx-auto relative">
              <Image
              src={serviceDetail?.photo}
              alt="blog image"
                width={1000}
                height={500}
                className="object-cover"
            /></div>
            <h1 className="text-2xl font-bold font-sans mt-10">{serviceDetail.title }</h1>
            <div dangerouslySetInnerHTML={{__html: serviceDetail.description}}>
            </div>
          </div>
        )
      }
    </div>
  )
}
