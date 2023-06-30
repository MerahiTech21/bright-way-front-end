import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Section from "./Section";
import Spinner from "../components/Spinner"
import { CardBody, Typography } from './MaterialTailwind'
import { useEffect } from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import url from '../app/url'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  
const fetchTeams = async () => {
  const res = await axios.get(`${url}/get_teams`)
  return res.data
}

export default function HomeTeams(){
  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["ourTeams"],
    queryFn: fetchTeams
  })
  
  useEffect(() => {
    if(isSuccess && data) {
      console.log("teams=",data)
    }
  }, [isSuccess, data])
    return (
      <div className='min:w-screen bg-[#4BAA96] bg-repeat bg-cover bg-[url(/bgall.jpg)] flex flex-col items-center'>
        <div className='min:w-screen h-full bg-primary bg-opacity-75'>
            <div className='text-center text-4xl text-white font-mono font-bold py-10'>Our Team</div>
            <div className='grid grid-cols-1 gap-4 px-4 md:grid-cols-4 md:gap-10 md:px-28 md:py-8'>
              {
                  data && data.map(team => (
                            <div key={team.id} className="">
                              <div className="bg-white shadow-2xl rounded-2xl">
                                <div className="">
                                  <div className=""
                                  >
                                  <img src={team.photo} alt="profile-picture" className="border-none rounded-t-2xl" />
                                  </div>
                                  <div>
                                    <h6 className="mb-2 text-xl m-5 text-center font-mono font-bold leading-tight">
                                      {team.f_name+" "+team.m_name}
                                    </h6>
                                    <p  className="text: md md:text-xl text-center font-mono my-3 px-6 pb-3">
                                      {team.profession}
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                  ))
              }
              </div>
        </div>
      </div>
    )
}

 
