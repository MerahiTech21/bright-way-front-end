
import Image from "next/image"
import Link from "next/link"
import Section from "@components/Section"
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

export default function Blogs() {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="px-6 lg:px-8">
        <div className="mx-auto w-full lg:mx-0">
        <Section>
          <h2 className="text-center text-3xl font-bold  text-white sm:text-4xl font-mono">Our Supportive blogs</h2>          
          <p className="mt-2 text-lg text-center text-white leading-8  font-mono">
          Learn how to grow your business with our expert advice.
        </p>
          </Section>
        </div>
        <div className="lg:w-4/5 lg:mx-auto">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Section key={post.id} >
            <article className="flex max-w-xl flex-col items-start justify-between bg-white overflow-hidden rounded-lg shadow-lg cursor-pointer pb-5">
            <Image src='/blogimg.jpeg' alt="" width={500} height={300} className="w-full bg-gray-50 transition ease-in-out delay-150  hover:scale-150  duration-1000"  />
              <div className="flex items-center ms-5  gap-x-4 text-xs w-full mt-3">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <Link
                  href={post.category.href}
                  className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </Link>
              </div>
              <div className="group relative px-5">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="mt-8 flex items-center gap-x-4 px-5">
                <Image src={post.author.imageUrl} alt="" width={256} height={256} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </Link>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              </article>
              </Section>
          ))}
          </div>
          </div>
      </div>
    </div>
  )
}
