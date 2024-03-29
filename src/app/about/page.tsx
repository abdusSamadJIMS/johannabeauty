import React from 'react'
import Concept from './Concept'
import Founder from './Founder'
import Timing from './Timing'
import OutTeam from './OutTeam'
import { Metadata } from 'next'
import AboutHero from './AboutHero'
import { fetchAboutFounderImage, fetchAboutHeroImage, fetchContactInfo } from '@/lib/actions'

export const metadata: Metadata = {
    title: "About Us",
    description: "Unveil our story: where passion meets expertise in beauty. With 22+ years' experience, indulge in services celebrating confidence and beauty. Join us!"
}

const AboutPage = async () => {
    const heroData = await fetchAboutHeroImage()
    const founderData = await fetchAboutFounderImage();
    const info = await fetchContactInfo();

    return (
        <main>
            <AboutHero imageUrl={heroData.image} />
            <div className='px-8 md:px-20 my-20'>
                <Concept />
                <Founder instaUrl={info?.instagram || ""} imageUrl={founderData.image} />
                <Timing />
                <OutTeam />
            </div>

        </main>
    )
}

export default AboutPage