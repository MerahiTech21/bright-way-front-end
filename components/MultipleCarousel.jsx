"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
import { use } from 'react'
// import useSWR from 'swr'
import url from '../app/url'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const fetchDestinations = async() =>{
  const res = await fetch(`${url}/destinations`)
  return await res.json();
}
const destinationData = fetchDestinations()
const Clients = () => {
  const destinatoins = use(destinationData)
 
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
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    
      {destinatoins?.length > 0 &&
        destinatoins.map(destinatoin=>(
          <Section key={destinatoin.id} className="w-full">
            <div className="flex justify-center overflow-hidden relative transition ease-in-out delay-150 ">
              <Image src="/flag.png" width={150} height={150} alt="carousel_image" className="" />
            </div>
            <div className="text-lg text-center text-white hover:underline mt-5" >
              <Link href={`/destinatoin/${destinatoin.id}`}>{destinatoin.title}</Link>
            </div>
      </Section>
        ))
      }
    </Carousel>
  );
};

export default Clients;
