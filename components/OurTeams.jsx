"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Section from "./Section";
import { Card, CardHeader, CardBody, Typography } from './MaterialTailwind'
import { use } from 'react'
// import useSWR from 'swr'
import url from '../app/url'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  
async function fechTeams(){
  const res = await fetch(`${url}/get_teams`)
 return res.json();
}
const activeTeams = fechTeams()

export default function OurTeams(){
  const teams = use(activeTeams)
 
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
  keyBoardControl={true}
  customTransition="all 300ms"
  transitionDuration={300}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{
  teams?.length > 0 &&
  teams.map(team => (
            <Section key={team}>
           <div className="w-11/12 mx-auto block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
           <Card className="max-w-full overflow-hidden mb-10 min-h-[25rem] max-h-[25rem]">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-lg relative h-64 "
        >
        <Image src={team.photo} fill alt="profile-picture" />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue-gray">
            {team.f_name+" "+team.m_name}
          </Typography>
          <Typography color="gray" className="mt-3 font-normal">
            {team.quote}
          </Typography>
        </CardBody>
      </Card>
                </div>
          </Section>
   
  ))
}

</Carousel>
    )
}

 