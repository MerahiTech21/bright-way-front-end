import Image from "next/image"
import url from "../../url"
import ShareLink from "../../../components/ShareLink"



async function fethData(id) {
  const res = await fetch(`${url}/news/${id}`,{ next: { revalidate: 10 } });  
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  } 
  return  res.json();
}
export const metadata = {
  title:"News",
  openGraph: {
    title: 'News',
    description: 'Supportive blogs',
    url: 'https://brightapi.merahitechnologies.com/news',
    siteName: 'Bright Consultancy',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}
export default async function BlogDetail({params}) {
  const blogDetail = await fethData(params.blogId)
 
  console.log('blogDetail=',blogDetail)
  return (
    <div>
      <div className="md:w-4/5 md:mx-auto mt-20 p-5 ">
        {  blogDetail?.photos?.length > 0 &&
        <div className="w-11-12 lg:w-4/5 mx-auto relative">   
           
            <Image
            src={blogDetail?.photos[0]?.path}
            alt="blog image"
              width={1000}
              height={500}
              className="object-cover"
            />
         
        </div>
          }
        <div className="w-11-12 lg:w-4/5 mx-auto p-4">Posted on {blogDetail.created_at?.slice(0,10) }</div>
        <h1 className="text-2xl font-bold font-sans mt-10">{blogDetail.title} ({blogDetail.created_at?.slice(0, 10)})</h1>
        <div dangerouslySetInnerHTML={{__html: blogDetail.description}}></div>
        <ShareLink id={blogDetail.id} description={blogDetail.short_desc} />
        {
         
        }
       
      </div>
    </div>
  )
}
