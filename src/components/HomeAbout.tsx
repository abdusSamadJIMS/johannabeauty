import { fetchHomeAboutImage } from '@/lib/actions'
import Link from 'next/link'
import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const HomeAbout = async () => {
    const data = await fetchHomeAboutImage();
    return (
        <div className="grid md:grid-cols-2 gap-y-9 justify-items-center  pt-10 md:pt-20">
            <div className={`md:col-span-1 hero 
            bg-cover md:min-h-[90vh] max-md:hidden`}
                style={{ backgroundImage: `url(${data.image})` }}
            >
                <div className="hero-overlay bg-opacity-55"></div>
                {/* <Image src={aboutImg} alt="aboutImage" className="w-full" /> */}
            </div>
            <div className="md:col-span-1 text-myColor p-5 ">
                <header>
                    <h3 className="text-myColor text-center text-sm md:text-lg max-md:mb-4">About Johanna Beauty</h3>
                </header>
                <div className={`text-center text-4xl md:text-7xl flex flex-col justify-center gap-6 h-full 
                agatho`}>
                    <Link title='Concept' href={'/about#concept'}>Concept</Link>
                    <Link title='The founder' href={'/about#founder'}>The Founder</Link>
                    <Link title='Salon Timing' href={'/about#salon-timing'}>Salon Timing</Link>
                    <Link title='Our Saon' href={'/about#our-salon'}>Our Salon</Link>
                    <Link title='About Page' href={'/about'} className="flex justify-center items-center gap-2 text-lg border w-fit mx-auto px-3 py-1 rounded-full border-myColor">Learn more
                        <HiArrowLongRight className='max-md:mt-1 font-bold' />
                    </Link>
                </div>
            </div>
            <div className="md:col-span-1 hero
            
        bg-cover
        min-h-[40vh]
        md:hidden"
                style={{ backgroundImage: `url(${data.image})` }}
            >
                <div className="hero-overlay bg-opacity-55"></div>

            </div>
        </div>
    )
}

export default HomeAbout