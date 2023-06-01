"use client"
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { HiChevronDown } from '@react-icons/all-files/hi/HiChevronDown'
import { FcMenu } from '@react-icons/all-files/fc/FcMenu'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'

import {usePathname} from 'next/navigation'

const contries = [
  { name: "Study in Poland",  href:'/destination/1' },
  { name: "Study in Canada", href:'/destination/1' },
  { name: "Study in China", href:'/destination/1' },
  { name: 'Study in Italy',href:'/destination/1' },
  { name: 'Study in USA', href:'/destination/1' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderTwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const path = usePathname()

  return (
    <header className="bg-white">
      <nav className="shadow-2xl rounded-full mx-auto my-5 flex flex-row justify-between max-w-6xl items-center lg:px-8" aria-label="Global">
        <div className="flex">
          <Link href="/" className="flex items-center -m-1.5 p-1.5">
            <Image className="h-8 w-auto" src="/logo2.jpg" width={10} height={10} priority={true} alt="" />
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
        <Popover.Group className="flex flex-row justify-between items-center flex-[0_2_0]">
          <div className='flex justify-between'>
            <Link href="/" className={path==='/' ?"mx-4 flex-1 text-md font-satoshi font-semibold text-gray-900":"mx-4 flex-1 text-md font-satoshi font-semibold text-gray-900"}>Home</Link>
            <Link href="/about" className={path==='/about' ?"mx-4 text-md font-satoshi font-semibold text-gray-900":"mx-4 text-md font-satoshi font-semibold text-gray-900"}>About</Link>
            <Popover className="mx-4 relative">
              <Popover.Button className="flex items-center gap-x-1 text-md font-satoshi font-semibold text-gray-900">
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
                    {contries.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md font-satoshi hover:bg-gray-50"
                      >
                        <div className="flex-auto hover:text-amber-400">
                        <Popover.Button as={Link} href={item.href} className="block font-semibold text-gray-900" >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Popover.Button>                      
                        </div>
                      </div>
                    ))}
                  </div>      
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link href="/services" className={path==='/services' ?"mx-4 text-md font-satoshi font-semibold text-gray-900":"mx-4 text-md font-satoshi font-semibold text-gray-900"}>Services</Link>
            <Link href="/blog" className={path==='/blog' ?"mx-4 text-md font-satoshi font-semibold text-gray-900":"mx-4 text-md font-satoshi font-semibold"}>Blog</Link>
            <Link href="/contact" className={path==='/contact' ?"mx-4 text-md font-satoshi font-semibold text-gray-900":"mx-4 text-md font-satoshi font-semibold text-gray-900"}>Contact</Link>
          </div>
        </Popover.Group>
        <button className='border-primary-green border-2 text-white m-4 py-1 px-10 rounded-full fill-primary-green bg-primary-green text-xl'>Apply Now</button>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
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
                        {[...contries].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="Link"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <span className='hover:text-amber-500'>{item.name}</span>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
               
                <Link href="/Services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Services</Link>
                <Link href="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Applay</Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}