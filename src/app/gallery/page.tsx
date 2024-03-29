import React from 'react'
import Gallery from './Gallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Our Gallery",
    description: "Dive into our gallery and witness the stunning transformations created by our expert team at Johanna Beauty. Experience the beauty journey firsthand."
}



const galleryPage = () => {
    return (
        <div className='min-h-screen  bg-[#e0d5c9] mb-10 overflow-x-hidden  '>
            <div className="header border-b-[3px] border-b-neutral-content w-fit mx-auto">
                <h1 className='pt-28 pb-5 text-center text-2xl md:text-5xl cinzel font-black text-myColor agatho'>Our <span className='font-extralight'> Gallery</span> </h1>
            </div>
            <Gallery />
        </div>
    )
}

export default galleryPage