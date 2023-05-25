"use client"
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import {usePathname} from 'next/navigation'


const products = [
  { name: 'Analytics',  href:'/' },
  { name: 'Engagement', href:'/' },
  { name: 'Security', href:'/' },
  { name: 'Integrations',href:'/' },
  { name: 'Automations', href:'/' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderTwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const path = usePathname()

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src="/logo.png" width={80} height={80} priority={true} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Link href="/" className={path==='/' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Home</Link>
          <Link href="/about" className={path==='/about' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>About</Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Destination
              <BiChevronDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
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

          <Link href="/services" className={path==='/services' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Services</Link>
          <Link href="/blog" className={path==='/blog' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Blog</Link>
          <Link href="/contact" className={path==='/contact' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Contact</Link>
          <Link href="/applay" className={path==='/applay' ?"border-b-4 border-indigo-500 text-sm font-semibold leading-6 text-gray-900":"text-sm font-semibold leading-6 text-gray-900 hover:border-b-4 border-indigo-500"}>Applay</Link>
          
        </Popover.Group>
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
                <Link href="/home" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Destinations
                        <BiChevronDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="Link"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
               
                <Link href="/service" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Services</Link>
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
