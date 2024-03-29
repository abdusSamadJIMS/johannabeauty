import React from 'react'
import Image from 'next/image'
import img from '../icon3.png'
import { fetchAllSalonImages } from '@/lib/actions'

const OutTeam = async () => {
    const data = await fetchAllSalonImages();
    return (
        <div
            id='our-salon'
            className='text-myColor py-20'>
            <h2 className='text-5xl md:text-7xl uppercase agatho text-center mb-5'>Our Salon</h2>

            <div className="photos overflow-hidden flex gap-5 whitespace-nowrap">
                <div className="photos-slide 
                flex 
                gap-5
                ">
                    {
                        data.map((item, i) => (

                            <div key={i} className="photo h-72 w-56 relative border border-black flex-shrink-0">
                                <Image src={item.image} alt={item.name} fill className='object-cover' />
                            </div>
                        ))
                    }

                </div>
                <div className="photos-slide 
                flex 
                gap-5
                ">
                    {
                        data.map((item, i) => (

                            <div key={i} className="photo h-72 w-56 relative border border-black flex-shrink-0">
                                <Image src={item.image} alt={item.name} fill className='object-cover' />
                            </div>
                        ))
                    }

                </div>
            </div>
            {
                false &&

                <div className='custom-carousel-container flex overflow-auto gap-3 max-w-full scroll-smooth snap-mandatory'
                >
                    {
                        data?.map((item, i) => (
                            <div key={i} className='custom-carousel-item overflow-scroll flex-shrink-0 w-[50vw] md:w-[15vw] pb-5'>
                                <div className='h-56 md:h-[20rem] relative mb-2 w-full'>
                                    <Image src={item.image} alt={item.name} fill className='object-cover' />
                                </div>
                                {/* <div className='text-center'>
                                <h5 className='font-semibold'>Abdus Samad</h5>
                                <p>Developer</p>
                            </div> */}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default OutTeam