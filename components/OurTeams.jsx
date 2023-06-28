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

export default function OurTeams(){
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
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyboardControl={true}
      customTransition="all 300ms"
      transitionDuration={300}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {isLoading ? <Spinner /> :
        data ?
        data.map(team => (
          <Section key={team.id}>
            <div className="w-11/12 mx-auto block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="max-w-full overflow-hidden mb-10 min-h-[25rem] max-h-[25rem]">
                <div
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-lg relative h-64 "
                >
                  <Image src={team.photo} fill alt="profile-picture" className="border-none rounded-t-lg" />
                </div>
                <CardBody>
                  <Typography variant="h6" color="blue-gray">
                    {team.f_name+" "+team.m_name}
                  </Typography>
                  <Typography color="gray" className="mt-3 font-normal">
                    {team.quote}
                  </Typography>
                </CardBody>
              </div>
            </div>
          </Section>
        )) :
        <div className="text-center text-lg text-red-500" >No Teams found</div>
      }
    </Carousel>
  )
}