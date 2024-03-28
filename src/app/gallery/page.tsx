import React from 'react'
import Gallery from './Gallery'


const galleryPage = () => {
    return (
        <div className='min-h-screen w-screen bg-[#e0d5c9]'>
            <div className="header border-b-[3px] border-b-neutral-content w-fit mx-auto">
                <h1 className='pt-28 pb-5 text-center text-2xl md:text-5xl cinzel font-black text-myColor agatho'>Our <span className='font-extralight'> Work</span> </h1>
            </div>
            <Gallery />
        </div>
    )
}

export default galleryPage