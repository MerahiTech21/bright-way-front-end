"use client"
import { Fragment, useState,useEffect,use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { HiChevronDown } from '@react-icons/all-files/hi/HiChevronDown'
import { FcMenu } from '@react-icons/all-files/fc/FcMenu'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { usePathname } from 'next/navigation'
import Spinner from './Spinner'
import axios from 'axios'
import url from '../app/url'
import { useQuery } from '@tanstack/react-query'
const getDestinations = async () => {
  const res = await axios.get(`${url}/destinations`).then((response) => response.data)
  return res
}
// const destinationData = getDestinations()
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function TheHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const path = usePathname()
//  const data = use(destinationData)
 const { data, isLoading, isFetching, error, isSuccess } = useQuery({
  queryKey: ["destinations"],
  queryFn: () => getDestinations(),
});
useEffect(() => {
  if(isSuccess && data) {
    console.log(data)
  }
}, [isSuccess, data])
  return (
    <Fragment>
    <header className="bg-white top-0 z-50 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center -m-1.5 p-1.5">
            <Image src="/KURAZ2.png" width={100} height={100} priority={true} alt="" />
            <span className="ml-2 text-primary font-bold">KURAZ CONSULTANCY</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FcMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
        <Link href="/" className={path==='/' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Home</Link>
          <Link href="/about" className={path==='/about' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>About</Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Destination
              <HiChevronDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                    {data ?
                      data.map((destination) => (
                    <div
                      key={destination.id}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto hover:text-amber-400">
                      <Popover.Button as={Link} href={`/destination/${destination.id}`} className="block font-semibold text-gray-900" >
                      {destination.title}
                      <span className="absolute inset-0" />
                    </Popover.Button>                      
                      </div>
                    </div>
                      )):<Spinner />
                }
                </div>      
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/services" className={path==='/services' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Services</Link>
          <Link href="/blog" className={path==='/blog' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Blog</Link>
          <a href="/contactus" className={path==='/contact' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Contact</a>
            <Link href="/applay" className={path === '/applay' ? "border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900" : "text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Applay</Link>
            <Link href="/bookconsulting" className={path === '/bookconsulting' ? "border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900" : "text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Book free Consulting</Link>
          
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src="/logo.png" width={80} height={80} priority={true} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Destinations
                        <HiChevronDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {data?
                          data.map((destination) => (
                          <Disclosure.Button
                            key={destination.id}   
                           className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <Link   href={`/destination/${destination.id}`} className='hover:text-amber-500' onClick={() => setMobileMenuOpen(false)}>{destination.title}</Link>
                          </Disclosure.Button>
                          ))
                          :<Spinner />
                      }
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
               
                <Link href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link href="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <a href="#contactarea" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                  <Link href="/applay" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Applay</Link>
                  <Link href="/bookconsulting" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Book free Consulting</Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      </header>
      </Fragment>
  )
}
