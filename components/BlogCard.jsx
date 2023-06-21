/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Section from './Section';
  
const BlogsCard = async ({blogs}) => {
  return (
    <div className="bg-light py-0 sm:py-5">
      <div className="px-6 lg:px-8">
        <div className="mx-auto w-full lg:mx-0">
        <Section>
          <h2 className="text-center text-3xl font-bold sm:text-4xl font-mono">Whats'up In Bright Way Path!</h2>          
          </Section>
        </div>
        
          <div className="lg:w-4/5 lg:mx-auto">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 md:gap-y-16 border-gray-200 pt-8 sm:mt-3 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-1">
           {
              blogs && blogs.map((blog) => (
                <Section key={blog.id}>
              <div className="w-full rounded-2xl p-5 md:flex lg:gap-10 border-solid border-2 border-primary shadow-2xl">
              <Image src={blog.photos[0]?.path} alt='blog image' width={300} height={50}/>
              <div className="flex flex-col items-start">
                <p className="font-bold text-2xl lg:text-3xl text-primary my-5">{blog.title}</p>
                <p className="font-normal text-lg">{blog.short_desc}</p>
                <Link href={`/blog/${blog.id}`}><button className="mt-5 bg-primary rounded-md p-2 text-white font-bold text-center">READ MORE</button></Link>
              </div>
                  </div>
                  </Section>
                  ))
                   
           }
            </div>
          </div>
       
      </div>
    </div>
  )
}

export default BlogsCard