'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

const GalleryImage = ({ image, i, name }: { image: string | StaticImageData, name: string, i: number }) => {
    const [loading, setLoading] = useState(false)
    return (
        <div key={i} className='imgDiv relative overflow-hidden '>
            {
                loading ?
                    <div className="skeleton w-full h-96"></div> :
                    <Image src={image}
                        placeholder='blur'
                        blurDataURL='/static/clientImage.jpeg'

                        alt={`${name} Image`} width={200} height={400} className='w-full hover:scale-95'

                    />
            }

            <h1 className='absolute
                        capitalize
                        
                        bg-myColor/60 p-1 px-2 rounded-full text-sm md:text-lg imgText left-3 font-extrabold transition-duration-1000'>{name}</h1>
        </div>
    )
}

export default GalleryImage