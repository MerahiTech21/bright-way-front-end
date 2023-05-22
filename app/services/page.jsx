"use client"
import Image from "next/image"
import Link from "next/link"
import { Fragment, useRef } from "react";
import { useInView } from "framer-motion";
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
    
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
    
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
    
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
    
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
    
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/blog/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/blog/1' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/blog/1',
      imageUrl:'/homeimg.jpg',
    },
    
  },
  
  // More posts...
]
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translatey(300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </section>
  );
}
export default function Services() {
  return (
    <div>
      <div className="py-20 w-full">
    <h2 className="text-center text-3xl font-bold font-mono text-white sm:text-4xl">Services We provide</h2>
    <p className="mt-2 text-lg text-center text-white leading-8 font-mono">
      Learn how to grow your business with our expert advice.
    </p>
  </div>
      <div className="lg:w-4/5 lg:mx-auto pb-24 sm:py-32 md:py-0 px-6 lg:px-8">
        
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16  border-gray-200   sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Section key={post.id} >
              <article className="flex max-w-xl flex-col items-start justify-between overflow-hidden bg-white border-2 rounded-lg shadow-xl cursor-pointer py-5 lg:py-10">
              <a href="#" class="block text-center w-full">
              <Image alt="service icon" src="/serviceIcon.jpeg" width={250} height={100} class="mx-auto object-cover  "/>
            </a>          
              
              <div className="group relative px-5">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>               
              </article>
              </Section>
          ))}
        </div>
      </div>
      </div>
  )
}
