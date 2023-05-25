"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Section from "./Section";

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
  
const fechTeams = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  console.log(data)
}
const teams= [1,2,3,4,5,6]
const DestinationCards = () =>{
  // fechTeams()
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
  teams.length > 0 &&
          teams.map(team => (
            <Section key={team}>
           <div className="w-11/12 mx-auto block rounded-lg bg-white py-5 ">
            <div
              className="w-full relative overflow-hidden flex justify-center"
              data-te-ripple-init
              data-te-ripple-color="light">
              <Image
                className="rounded-t-lg"
                  src="/malaysia.png"
                  width={200}
                  height={100}
                alt="team photo" />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-slate-900">
              <h5
                className="mb-2 text-xl text-center font-medium leading-tight">
                Card title
              </h5>
              <p className="mb-4 text-base">
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </p>
              
                </div>
                </div>
          </Section>
   
  ))
}

</Carousel>
    )
}

export default DestinationCards