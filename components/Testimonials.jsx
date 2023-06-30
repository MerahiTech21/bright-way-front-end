"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Section from "./Section";
import url from '../app/url'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const getDestinations = async () => {
  const res = await axios.get(`${url}/testimonials`).then(response => response.data)
  return res
}

const SingleImageCarousel = () => {

  const { data, isSuccess} = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => getDestinations()
  })

    return (
        <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all 300ms"
  transitionDuration={3000}
  removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{ data ?
  data.map((testimonial) => (
    <Section key={testimonial.id}>
    <div  className="w-11/12 mx-auto rounded-md bg-white p-6 text-center  md:text-left md:min-h-[15rem] md:max-h-[15rem]">
          <div className="md:flex md:flex-row">
            <div className="mx-auto mb-6 flex  items-center justify-center md:mx-0 md:w-96 lg:mb-0">
          <Image src={testimonial.photo} width={250} height={250}  alt="testimonials_image" className="rounded-lg shadow-md dark:shadow-black/30 "  />
            </div>
            <div className="md:ml-6">
              <p
                className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                {testimonial.message}
              </p>
              <p
                className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                {testimonial.full_name}
              </p>
              
            </div>
      </div>
      </div>
  </Section>
    
  )
  ):<div className="text-center text-lg text-red-500">No testimonials found</div>
}
</Carousel>
    )
}

export default SingleImageCarousel

