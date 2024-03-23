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

            <div className="hero-content text-center  text-white">
                <div className="max-w-md md:max-w-full pt-48">
                    <h2 className={`mb-3 text-6xl md:text-9xl font-bold text-white tracking-wide 
                    agatho
                    `}>Johanna Beauty</h2>
                    <p className="mb-9 text-sm  md:text-2xl font-light text-white">The space of your beauty</p>
                    <Link href={'https://wa.me/918010512106'} target='_blank' className="btn  bg-transparent hover:bg-transparent hover:border-white text-white border-white btn-circle max-md:text-sm border-2 h-28 w-28">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
