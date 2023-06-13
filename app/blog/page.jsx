import BlogCard from "../../components/BlogCard"
import url from "../url";

async function fethBlogs() {
  const res = await fetch(`${url}/news`,{ next: { revalidate: 10 } });  
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  } 
  return  res.json();
}
export default async function Blogs() {
  const blogs = await fethBlogs()
 
  return (
    <div className="bg-light py-24 sm:py-32">
      <div className="px-6 lg:px-8">
          <BlogCard blogs={blogs} />
       
      </div>
    </div>
  );
}
