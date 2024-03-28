import React from 'react'
import Concept from './Concept'
import Founder from './Founder'
import Timing from './Timing'
import OutTeam from './OutTeam'

const AboutPage = () => {
    return (
        <main>
            <div className="hero min-h-screen bg-[url('/static/aboutHeroImg.jpg')]
        bg-fixed 
        bg-center
        bg-cover
         bg-no-repeat
        relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-full flex-col mt-24">
                    <h2 className={`mb-3 text-6xl md:text-9xl  text-white tracking-wide 
                    agatho 
                    text-center
                    `}>About Johanna Beauty</h2>
                    <p className='max-w-lg text-white agatho text-center max-md:text-sm  opacity-80 text-lg'>Welcome to Johanna Beauty Salon, where beauty meets passion and expertise.
                    </p>
                </div>
            </div>
            <div className='px-8 md:px-20 my-20'>
                <Concept />
                <Founder />
                <Timing />
                <OutTeam />
            </div>

        </main>
    )
}

export default AboutPage