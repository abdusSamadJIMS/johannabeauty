'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../../public/static/clientImage.jpg'
import Link from 'next/link'
const Founder = () => {
    const [more, setMore] = useState(false)
    const text = "As a single mother, I understand the importance of self-care and confidence in our daily lives. That's why I'm committed to providing each client with an exceptional experience that leaves them feeling pampered, rejuvenated, and radiant. Whether it's crafting the perfect haircut, mastering the latest trends in hair color, or providing luxurious spa treatments, our team is dedicated to bringing out the best in every client who walks through our doors.";
    const moreText1 = "I bring a unique blend of expertise and creativity to every service we offer. But more than just technical skills, my commitment to our clients goes beyond the salon chair. I believe in building lasting relationships and creating a sense of community within our salon walls."
    const moreText2 = "I’ve been recognised in and awarded at Delhi Vidhan Sabha and also at local and international levels. "
    const moreText3 = "I'm actively involved in providing Free Bridal Makeups for People who Cannot Afford, as giving back to our community is a core value here at Johanna Beauty Salon."
    return (
        <>
            <div
                id='founder'
                className='py-16 grid md:grid-cols-2 gap-5 text-myColor'>
                <div className=" relative w-full h-[100vw] md:h-[40vw] md:w-[40vw] my-auto">
                    <Image src={img} alt='img' fill className='object-cover' />
                </div>
                <div className='flex  flex-col  items-center '>
                    <h2 className='uppercase agatho text-4xl md:text-8xl self-start justify-self-start mb-5'>The Founder</h2>
                    <div className=' justify-self-center my-auto items-center max-w-md'>
                        <h4 className='font-bold text-xl mb-10'>Swean Vohra</h4>
                        <p className='max-md:text-sm opacity-55 mb-5'>{text}
                            <button
                                onClick={() => {
                                    setMore(true)
                                }}
                                type="button" className={`m-0 p-0 link text-primary ${more && 'hidden'}`} >more</button>
                        </p>
                        {
                            more &&

                            <>
                                <p className='max-md:text-sm opacity-55 mb-5'>{moreText1}</p>
                                <p className='max-md:text-sm opacity-55 mb-5'>{moreText2}</p>
                                <p className='max-md:text-sm opacity-55 mb-5'>{moreText3}
                                    <button
                                        onClick={() => {
                                            setMore(false)
                                        }}
                                        type="button" className={`m-0 p-0 link text-primary ${!more && 'hidden'}`} >show less</button>
                                </p>
                            </>
                        }
                        <Link href={""} title='insta' className='border border-myColor px-4 py-2 rounded-full agatho'>Instagram</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Founder