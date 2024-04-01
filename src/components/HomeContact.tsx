import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiEnvelope, BiPhone, } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import QueryForm from './QueryForm'
import Map from './Map'

const HomeContact = ({ whatsApp, instagram, mailId, phoneNumber }: { whatsApp: string, instagram: string, mailId: string, phoneNumber: string }) => {


    return (
        <div
            id='contact-us'
            className={`my-10 text-myColor
          min-h-screen
    bg-gradient-to-r from-myColor to-gray-600
    hero
    `}>
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content md:justify-start w-full max-md:flex-col grid grid-cols-10 sm:gap-10">


                <div className="  w-full max-md:flex-col md:col-span-5 col-span-10">
                    <QueryForm />
                    <div className='max-w-full text-wrap'>
                        <Link rel='external' href={`mailto:"${mailId}"`} title='Mail Id' target='_blank' className='flex my-5 items-center gap-3 text-white text-wrap md:text-lg max-w-full'>
                            <BiEnvelope className='text-lg md:text-3xl' />
                            {mailId}
                        </Link>
                        <Link rel='external' href={`tel:${phoneNumber}`} title='Phone No.' target='_blank' className='flex font-bold mb-10 items-center gap-3 text-white md:text-lg
                        '>
                            <BiPhone className='text-lg md:text-3xl' />
                            {phoneNumber}
                        </Link>
                        <div className='flex items-center gap-3 text-white text-xl'>
                            <Link rel='external' href={instagram} target='_blank' title='Instagram' className='bg-transparent border-2 p-2 rounded-full'>
                                <FaInstagram className=' text-2xl text-white' />
                            </Link>
                            <Link rel='external' href={`https://wa.me/${whatsApp}`} target='_blank' title='Whatsapp' className='bg-transparent border-2 p-2 rounded-full'>
                                <FaWhatsapp className=' text-2xl text-white' />
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="left col-span-10  md:col-span-5 h-full flex flex-col justify-center items-center ">
                    <p className='text-lg  md:hidden agatho text-white'>10<span className='font-sans'>/</span>45, Block 10, Geeta Colony, New Delhi, Delhi, 110031</p>

                    <div className=" overflow-hidden  sm:w-full sm:h-full
                w-full h-[100vw]

                bg-myColor/55 rounded-t-xl  mockup-window y ">

                        <Map />
                    </div>
                    <p className='text-2xl  max-md:hidden agatho text-white'>10<span className='font-sans'>/</span>45, Block 10, Geeta Colony, New Delhi, Delhi, 110031</p>
                </div>
            </div>
        </div>
    )
}

export default HomeContact