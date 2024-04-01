'use client'
import { fetchHeroImage } from '@/lib/actions';
import React, { useEffect, useState } from 'react'
import HomeHeroContent from './HomeHeroContent';

const Hero = ({ whatsApp }: { whatsApp: string }) => {
    const [isIOS, setIsIOS] = useState<boolean>(false);
    const [bgImageUrl, setBgImageUrl] = useState('');
    useEffect(() => {
        // Check if window and navigator are available (browser environment)
        if (typeof window !== 'undefined' && window.navigator) {
            setIsIOS(/iPad|iPhone|iPod/.test(window.navigator.userAgent));
        }

        fetchHeroImage().then((res) => setBgImageUrl(res.image))
    }, []);

    return (
        // bg-[url('/static/heroImg.jpg')]
        <div className={`hero min-h-screen
        ${isIOS ? "" : "bg-fixed"} bg-center bg-no-repeat bg-cover
        relative`}
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            <HomeHeroContent whatsApp={whatsApp} />
        </div>
    )
}

export default Hero
