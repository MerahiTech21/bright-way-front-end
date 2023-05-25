import Image from "next/image"
import Link from "next/link"
import Section from "@components/Section";

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
  
  export default function Services() {
  return (
    <div className="pb-5 lg:pb-20">
      <div className="pt-20 pb-10 lg:pb-20 w-full">
    <h2 className="text-center text-3xl font-bold font-mon sm:text-4xl">Services We provide</h2>
    <p className="mt-2 text-lg text-center leading-8 font-mono">
      Learn how to grow your business with our expert advice.
    </p>
   </div>
      <div className="lg:w-4/5 lg:mx-auto px-6 lg:px-8">
        
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16     lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
