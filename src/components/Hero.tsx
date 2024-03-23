// import { agatho } from '@/app/layout'
import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-[url('/static/heroImg.jpg')]
        bg-fixed bg-center bg-no-repeat
        relative">
            <div className="hero-overlay bg-opacity-60"></div>
            <nav className="flex  justify-between w-full items-center p-5 absolute z-10 top-0">
                {/* <div className={agatho.className}> */}
                <div className={'agatho'}>
                    <Link href={'/'} className="font-bold md:text-2xl tracking-wider text-white">Johanna Beauty</Link>
                </div>
                <div className="flex gap-10 items-center text-white max-md:hidden">
                    <Link href={'/about'}>About us</Link>
                    <Link href={'/service'}>Services</Link>
                    <Link href={'/contact'}>Contacts</Link>
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
                                <div className='flex flex-col gap-6 text-2xl text-white'>
                                    <Link href={'/about'}>About us</Link>
                                    <Link href={'/service'}>Services</Link>
                                    <Link href={'/contact'}>Contacts</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hero-content text-center  text-white">
                <div className="max-w-md md:max-w-full pt-48">
                    <h2 className={`mb-3 text-6xl md:text-9xl font-bold text-white tracking-wide 
                    agatho
                    `}>Johanna Beauty</h2>
                    <p className="mb-9 text-sm  md:text-2xl font-light text-white">The space of your beauty</p>
                    <Link href={'https://wa.me/918010512106'} target='_blank' className="btn  bg-transparent hover:bg-myColor hover:border-white text-white border-white btn-circle max-md:text-sm border-2 h-28 w-28">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
