import { usePathname } from 'next/navigation'
import React from 'react'

const AdminHero = () => {


    return (
        <div className="bg-[url('/static/heroImg.jpg')] h-[50vh]
            hero
            bg-fixed
            bg-cover
            ">
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content">
                <h1 className='md:text-8xl text-5xl agatho'>
                    Dashboard
                </h1>
            </div>
        </div>
    )
}

export default AdminHero