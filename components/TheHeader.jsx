/* eslint-disable @next/next/no-img-element */
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
  const res = await axios.get(`${url}/destinations`)
  return res.data
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TheHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const path = usePathname()

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
      <header className="bg-[#FFFFFF] top-0 fixed z-50 shadow-sm w-screen">
        <nav className="mx-auto flex items-center justify-between px-6 lg:px-20" aria-label="Global">
          <div className='flex-[.1]'>
            <Link href="/" className="py-1">
              <img className="w-20 h-auto" src="/asset/logoo.png" alt="" />
            </Link>
          </div>
          <div className="flex py-4 lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FcMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-6 flex-1 justify-center items-center gap-10">
            <Link href="/" className={path==='/' ?"text-primary font-semibold text-lg":"text-[#F48E20] hover:text-primary font-semibold text-lg"}>Home</Link>
            <Link href="/about" className={path==='/about' ?"text-primary font-semibold text-lg":"text-[#F48E20] hover:text-primary font-semibold text-lg"}>About</Link>
            <Popover className="relative">
              <Popover.Button className="text-[#F48E20] flex items-center font-semibold hover:text-primary lg:text-lg xl:mx-1 xl:gap-x-1 xl:text-xl xl:leading-6">
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
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto hover:text-amber-400">
                        <Popover.Button as={Link} href={`/destination/${destination.id}`} className="block font-semibold text-[#F48E20] hover:text-primary hover:cursor-pointer" >
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
            <Link href="/services" className={path==='/services' ?"text-primary font-semibold text-lg":"text-[#F48E20] hover:text-primary font-semibold text-lg"}>Services</Link>
            <Link href="/blog" className={path==='/blog' ?"text-primary font-semibold text-lg":"text-[#F48E20] hover:text-primary font-semibold text-lg"}>Blog</Link>
            <a href="/contact" className={path==='/contact' ?"text-primary font-semibold text-lg":"text-[#F48E20] hover:text-primary font-semibold text-lg"}>Contact</a>
              <Link href="/applay" className={path === '/applay' ? "text-primary font-semibold text-lg":"text-[#F48E20] hover:text-primary font-semibold text-lg"}>Apply</Link>
          </Popover.Group>
          <Link href="/bookconsulting" className='hidden lg:block'><button className='rounded-md text-[#FFFFFF] bg-[#F48E20] hover:bg-primary p-2 text-lg'>Book Free Consulting</button></Link>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <Image className="h-8 w-auto" src="/asset/logoo.png" width={80} height={80} priority={true} alt="" />
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
                  <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                  <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>
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
                              as="Link"
                              href={`/destination/${destination.id}`}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              <span className='hover:text-amber-500'>{destination.title}</span>
                            </Disclosure.Button>
                            ))
                            :<Spinner />
                        }
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  
                  <Link href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Services</Link>
                  <Link href="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</Link>
                  <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</Link>

                    <Link href="/applay" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Apply</Link>
                    <Link href="/bookconsulting" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Book free Consulting</Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </Fragment>
  )
}
