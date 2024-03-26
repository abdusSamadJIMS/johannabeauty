import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen">
            <div className="bg-[url('/static/heroImg.jpg')] h-[30vh] 
            hero
            bg-cover
            ">
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content">
                    <h1 className='md:text-8xl text-5xl agatho'>Dashboard</h1>
                </div>
            </div>
            <div className="grid grid-cols-8 w-screen mb-10 ">
                <div className="col-span-1 border bg-black"></div>
                <div className="col-span-7 bg-red-50 min-h-screen">
                    {children}
                </div>
            </div>


        </main>
    )
}

export default layout