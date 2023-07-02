import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Section from "./Section";
import Spinner from "../components/Spinner";
// import { CardBody, Typography } from './MaterialTailwind'
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import url from "../app/url";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
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

const fetchTeams = async () => {
  const res = await axios.get(`${url}/get_teams`);
  return res.data;
};

export default function OurTeams() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["ourTeams"],
    queryFn: () => fetchTeams(),
  });

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
      {isLoading ? (
        <Spinner />
      ) : data ? (
        data.map((team) => (
          <Section key={team.id}>
            <div className="w-11/12 mx-auto block rounded-lg bg-white">
              <div className="max-w-full overflow-hidden mb-10 min-h-[23rem] max-h-[20rem]">
                <div className="m-0 rounded-lg relative h-72">
                  <Image
                    src={team.photo}
                    fill
                    alt="profile-picture"
                    className="border-none rounded-t-lg"
                  />
                </div>
                <div>
                  <h6 className="font-bold pl-5 mt-2">
                    {team.f_name + " " + team.m_name}
                  </h6>
                  <p className="mt-3 font-normal pl-5">{team.quote}</p>
                </div>
              </div>
            </div>
          </Section>
        ))
      ) : (
        <div className="text-center text-lg text-red-500">No Teams found</div>
      )}
    </Carousel>
  );
}
