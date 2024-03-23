import React from 'react'

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
                    <p className='max-w-lg text-white agatho text-center max-md:text-xs'>We invite you to familiarize yourself with our beauty salon, where you will find a full range of services from professional masters using the most modern technologies and cosmetics from leading brands</p>
                </div>
            </div>

        </main>
    )
}

export default AboutPage