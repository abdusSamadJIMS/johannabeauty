import React from 'react'
import img1 from '../../../public/static/abdusSamad.png'
import Image from 'next/image'

const OutTeam = () => {
    const repeat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
    return (
        <div
            id='our-team'
            className='text-myColor py-20'>
            <h2 className='text-5xl md:text-7xl uppercase agatho text-center mb-5'>Our Team</h2>
            <div className='custom-carousel-container flex overflow-auto gap-3 max-w-full scroll-smooth snap-mandatory'
            >
                {
                    repeat.map((item, i) => (
                        <div key={i} className='custom-carousel-item overflow-scroll flex-shrink-0 w-[50vw] md:w-[15vw] pb-5'>
                            <div className='h-56 md:h-[20rem] relative mb-2 w-full'>
                                <Image src={img1} alt='img' fill className='object-cover' />
                            </div>
                            <div className='text-center'>
                                <h5 className='font-semibold'>Abdus Samad</h5>
                                <p>Developer</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OutTeam