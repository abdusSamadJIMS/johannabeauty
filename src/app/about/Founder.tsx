import Image from 'next/image'
import React from 'react'
import img from '../../../public/static/abdusSamad.png'
import Link from 'next/link'
const Founder = () => {
    return (
        <div id='founder' className='my-16 grid md:grid-cols-2 gap-5 text-myColor'>
            <div className=" relative w-full h-[100vw] md:h-[40vw] md:w-[40vw] my-auto">
                <Image src={img} alt='img' fill className='object-cover' />
            </div>
            <div className='flex  flex-col  items-center '>
                <h2 className='uppercase agatho text-4xl md:text-8xl self-start justify-self-start mb-5'>The Founder</h2>
                <div className=' justify-self-center my-auto items-center max-w-md'>
                    <h4 className='font-bold text-xl mb-10'>Abdus Samad</h4>
                    <p className='max-md:text-sm opacity-55 mb-5'>Meet Samad, the visionary founder behind Johanna Beauty. With a passion for beauty and a heart for empowering others, Johanna embarked on a journey to create a beauty parlor like no other. Drawing from her own experiences and expertise in the beauty industry, she envisioned a sanctuary where every individual could discover their inner and outer beauty while embracing their uniqueness.</p>
                    <Link href={""} title='insta' className='border border-myColor px-4 py-2 rounded-full agatho'>Instagram</Link>
                </div>
            </div>
        </div>
    )
}

export default Founder