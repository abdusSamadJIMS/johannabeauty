import Image, { StaticImageData } from 'next/image'
import React from 'react'

const HomeCategoryCarouselItem = ({ id, image, title, description }: {
    id: string, image: StaticImageData | string, title: string, description: string
}) => {
    return (
        <div id={`service${id}`} className="carousel-item flex-col  w-full sm:w-[48%] md:w-[24%] ">
            <div className="relative w-full h-72 sm:h-80 md:h-[26rem]">

                <Image src={image} alt="Burger" fill className="object-cover" />
            </div>
            <div className='text-myColor '>
                <h6 className='font-bold text-xl tracking-wide my-1'>{title}</h6>
                <p className='text-sm opacity-55' >{description}</p>
            </div>

        </div>
    )
}

export default HomeCategoryCarouselItem