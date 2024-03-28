import React from 'react'

const Timing = () => {
    return (
        <div
            id='salon-timing'
            className='grid grid-cols-2 md:grid-cols-4 gap-5 text-myColor py-10'
        >
            <div className="col-span-1 max-md:col-span-full md:h-[45vw] relative h-[45vh]  hero bg-[url('/static/aboutTiming1.jpg')]">
                <div className="hero-overlay bg-opacity-45"></div>
            </div>
            <div className="col-span-2  max-md:hidden h-[45vh] md:h-[45vw] relative hero bg-[url('/static/aboutTiming2.jpg')]">
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
                            <p className='opacity-75 max-md:text-sm'>10:30AM - 8:00PM</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>tuesday</p>
                            <p className='opacity-75 max-md:text-sm'>Off</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>wednesday</p>
                            <p className='opacity-75 max-md:text-sm'>10:30AM - 8:00PM</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>thursday</p>
                            <p className='opacity-75 max-md:text-sm'>10:30AM - 8:00PM</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>friday</p>
                            <p className='opacity-75 max-md:text-sm'>10:30AM - 8:00PM</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>saturday</p>
                            <p className='opacity-75 max-md:text-sm'>10:30AM - 8:00PM</p>
                        </li>
                        <li className="mb-3">
                            <p className='font-semibold md:text-xl'>sunday</p>
                            <p className='opacity-75 max-md:text-sm'>10:30AM - 8:00PM</p>
                        </li>
                        <li className="mb-3">
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