"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Section from "./Section";
import url from "../app/url";
import {use} from 'react'
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
  
const fetchDestinations = async() =>{
  const res = await fetch(`${url}/destinations`)
  return await res.json();
}
const destinationData = fetchDestinations()
const DestinationCards = () =>{
  const destinations = use(destinationData)
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
  destinations.length > 0 &&
  destinations.map(destination => (
            <Section key={destination}>
           <div className="w-11/12 mx-auto block bg-primary text-white rounded-lg py-5 opacity-70 transition duration-300 ease-in-out hover:opacity-100 ">
            <div
              className="w-full relative overflow-hidden flex justify-center opacity-100"
              data-te-ripple-init
              data-te-ripple-color="light">
              <Image
                className="rounded-t-lg"
                  src={destination.photo}
                  width={200}
                  height={100}
                alt="team photo" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-xl text-center font-medium leading-tight">
               {destination.title}
              </h5>
              
                </div>
                </div>
          </Section>
   
  ))
}

</Carousel>
    )
}

export default DestinationCards