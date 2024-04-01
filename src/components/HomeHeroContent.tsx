import Link from 'next/link'
import React from 'react'

const HomeHeroContent = ({ whatsApp }: { whatsApp: string }) => {
    return (
        <>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content text-center  text-white">
                <div className="max-w-md md:max-w-full pt-20 sm:pt-48">
                    <p className='agatho w-fit mx-auto max-sm:text-sm max-sm:px-1 max-sm:py-[.1rem] text-myColor bg-white px-3 py-2 rounded-full mb-3'>Welcome To</p>
                    <h1 className={`mb-3 text-6xl md:text-9xl font-bold text-white tracking-wide 
        agatho
        `}>Johanna Beauty Salon</h1>
                    <p className="my-2 uppercase  text-sm  md:text-2xl font-bold text-white">Discover Your Beauty Haven, Where Luxury Meets Affordability</p>
                    <p className="my-2 uppercase  text-sm  md:text-2xl font-bold text-white">At Johanna Beauty Salon</p>
                    <Link rel='external' href={`https://wa.me/${whatsApp}`} target='_blank' className="btn  bg-transparent hover:bg-transparent hover:border-white text-white border-white btn-circle max-md:text-sm border-2 h-28 w-28">Contact Us</Link>
                </div>
            </div>
        </>
    )
}

export default HomeHeroContent