'use client'
import { fetchHeroImage } from '@/lib/actions';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content text-center  text-white">
                <div className="max-w-md md:max-w-full pt-48">
                    <h1 className={`mb-3 text-6xl md:text-9xl font-bold text-white tracking-wide 
                    agatho
                    `}>Johanna Beauty</h1>
                    <p className="mb-9 text-sm  md:text-2xl font-light text-white">The space of your beauty</p>
                    <Link rel='external' href={`https://wa.me/${whatsApp}`} target='_blank' className="btn  bg-transparent hover:bg-transparent hover:border-white text-white border-white btn-circle max-md:text-sm border-2 h-28 w-28">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
