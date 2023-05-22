
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Section from "./Section";

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
const ourClients = [1,2,3,4,5]
const Clients = () => {
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
    
      {
        ourClients.map(n=>(
          <Section key={n} className="w-full">
            <div className="flex justify-center overflow-hidden transition ease-in-out delay-150  hover:scale-150  duration-1000">
              <Image src="/flag.png" width={150} height={150} alt="carousel_image" className="" />
            </div>
        <div className="text-lg text-center hover:underline" >Country Name</div>
      </Section>
        ))
      }
    </Carousel>
  );
};

export default Clients;
