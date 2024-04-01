'use client'
import { useEffect, useState } from "react";

const AboutHero = ({ imageUrl }: { imageUrl: string }) => {
    const [isIOS, setIsIOS] = useState<boolean>(false);

    useEffect(() => {
        // Check if window and navigator are available (browser environment)
        if (typeof window !== 'undefined' && window.navigator) {
            setIsIOS(/iPad|iPhone|iPod/.test(window.navigator.userAgent));
        }
    }, []);
    return (
        <div className={`hero min-h-screen 
        ${isIOS ? "" : "bg-fixed "}
        bg-center
        bg-cover
         bg-no-repeat
        relative`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full flex-col mt-24">
                <h2 className={`mb-3 text-6xl md:text-9xl  text-white tracking-wide 
                    agatho 
                    text-center
                    `}>About Johanna Beauty Salon</h2>
                <p className='max-w-lg text-white agatho text-center max-md:text-sm  opacity-80 text-lg'>Welcome to Johanna Beauty Salon, where beauty meets passion and expertise.
                </p>
            </div>
        </div>
    )
}

export default AboutHero