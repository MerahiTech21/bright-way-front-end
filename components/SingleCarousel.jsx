"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
 
export default function Example() {
  return (
    <Carousel transition={{ duration: 2 }} autoplay autoplayDelay={5000} loop={true} className="rounded-bl-[100px] relative lg:min-h-screen">
      <Image
        src="/home3.jpeg"
              alt="image 1"
             fill
      />
      <Image
        src="/home2.jpg"
              alt="image 2"
             fill
      />
      <Image
        src="/home3.jpeg"
              alt="image 3"
             fill
      />
    </Carousel>
  );
}