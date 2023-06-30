"use client"
import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../components/BlogCard"
import url from "../url";
import axios from "axios";

async function fethBlogs() {
  const res = await axios(`${url}/news`);  
  return res
}
export default async function Blogs() {
  
  const {data:blogs, isSuccess} = useQuery({
    queryKey: ['blog'],
    queryFn: () => fethBlogs()
  })
 
  return (
    <div className="bg-light py-12 sm:py-32">
      <div className="px-6 lg:px-8">
        {
          blogs && <BlogCard blogs={blogs} />
        }
      </div>
    </div>
  );
}
