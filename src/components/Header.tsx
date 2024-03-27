'use client'

import { links } from '@/lib/links'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '../../public/static/logo/logoJohanna.png';
import { RxHamburgerMenu } from 'react-icons/rx'
const Header = () => {
    const pathname = usePathname()
    const adminNavLinks = [
        {
            href: "/admin",
            label: "home"
        },
        {
            href: "/admin/services",
            label: "services"
        },
        {
            href: "/admin/contact-info",
            label: "contact info"
        },
        {
            href: "/api/auth/signout",
            label: "sign out"
        }
    ]
    const navLinks = (pathname.includes("admin") ? adminNavLinks : links)
    if (pathname.includes("admin")) {
    }
    return (
        <nav className="flex  justify-between w-full items-center p-5 absolute z-10 top-0">
            <div className={'agatho'}>
                <Link href={'/'} className="font-bold md:text-2xl tracking-wider bg-transparent">
                    <Image src={logo} alt='Johanna-Logo' className='w-14 md:w-20 bg-white rounded-full bg-opacity-80'
                    />
                </Link>
            </div>
            <div className="flex gap-10 items-center text-white max-md:hidden">
                {
                    navLinks.map((link) =>
                    (
                        <Link key={link.href} href={link.href} className={`border   px-3 py-1 rounded-full ${pathname == link.href ? "border-myColor" : "border-transparent"} capitalize mb-10`}>{link.label}</Link>

                    ))
                }

            </div>
            <div className='md:hidden'>


                <div className="drawer drawer-end ">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button ">
                            <RxHamburgerMenu className='text-3xl text-white cursor-pointer' />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu p-4 min-h-full flex items-center justify-center  text-base-content max-w-[50%] bg-myColor">
                            {/* Sidebar content here */}
                            <div className='flex flex-col gap-6 text-2xl text-white font-thin'>
                                {
                                    navLinks.map((link) => (
                                        <Link key={link.href} href={link.href} className={`capitalize ${(link.href == pathname) ? "underline font-medium" : "font-thin"}`}>{link.label}</Link>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header