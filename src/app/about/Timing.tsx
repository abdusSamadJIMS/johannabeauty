import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/static/services/hariTreatment.jpg'
import img2 from '../../../public/static/services/eyeTreatment.jpg'

const Timing = () => {
    return (
        <div
            id='salon-timing'
            className='grid grid-cols-2 md:grid-cols-4 gap-5 text-myColor py-10'
        >
            <div className="col-span-1 md:h-[45vw] relative  max-md:hidden hero bg-[url('/static/services/hariTreatment.jpg')]">
                <div className="hero-overlay bg-opacity-45"></div>
            </div>
            <div className="col-span-2  h-[45vh] md:h-[45vw] relative hero bg-[url('/static/services/eyeTreatment.jpg')]">
                <div className="hero-overlay bg-opacity-45"></div>
            </div>
            <div className="max-md:col-span-full col-span-1 max-md:w-full ">
                <div>
                    <h2 className='text-5xl md:text-7xl agatho uppercase'>Salon</h2>
                    <h2 className='text-5xl md:text-7xl agatho uppercase pl-10'>Timing</h2>
                </div>
                <div className="uppercase mt-10 pl-10 ">
                    <ul className='list'>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>monday</p>
                            <p className='opacity-75 max-md:text-sm'>10AM - 7Pm</p>
                        </li>
                        <li className="mb-3 pl-10">
                            <p className='font-semibold md:text-xl'>tuesday</p>
                            <p className='opacity-75 max-md:text-sm'>10AM - 7Pm</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>wednesday</p>
                            <p className='opacity-75 max-md:text-sm'>10AM - 7Pm</p>
                        </li>
                        <li className="mb-3 pl-10">
                            <p className='font-semibold md:text-xl'>thursday</p>
                            <p className='opacity-75 max-md:text-sm'>10AM - 7Pm</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>friday</p>
                            <p className='opacity-75 max-md:text-sm'>10AM - 7Pm</p>
                        </li>
                        <li className="mb-3 pl-10">
                            <p className='font-semibold md:text-xl'>saturday</p>
                            <p className='opacity-75 max-md:text-sm'>10AM - 7Pm</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>sunday</p>
                            <p className='opacity-75 max-md:text-sm'>10AM - 7Pm</p>
                        </li>
                        <li className="mb-3 pl-10">
                            <p className='font-semibold md:text-xl'>holiday</p>
                            <p className='opacity-75 max-md:text-sm'>Timing may vary</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Timing