import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiEnvelope, BiPhone, } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'

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
                    <form action="" className="items-start text-myColor  w-full">
                        <h1 className="mb-3 agatho text-4xl font-bold  text-white text-center">Ask your query</h1>
                        <label className="input mb-3 md:w-full border-white hover:border-white  flex items-center gap-2 bg-transparent rounded-full">
                            <input type="text" className="grow text-white w-full  max-md:w-full bg-transparent  " placeholder="Name" />
                        </label>
                        <label className="input mb-3 md:w-full border-white hover:border-white  flex items-center gap-2 bg-transparent rounded-full">
                            <input type="text" className="grow text-white w-full bg-transparent  " placeholder="Email" />
                        </label>
                        <textarea className="mb-3 textarea text-white textarea-bordered bg-transparent w-full border-white hover:border-white" placeholder="Query"></textarea>

                        <button type="submit" className="btn   w-full
                        bg-transparent hover:bg-transparent hover:text-white
                        border-white
                        hover:border-white
                        ">Send your query
                            <IoIosSend className="text-2xl" />
                        </button>
                        <div className='max-w-full text-wrap'>
                            <Link href={`mailto:"${mailId}"`} title='Mail Id' target='_blank' className='flex my-5 items-center gap-3 text-white text-wrap md:text-lg max-w-full'>
                                <BiEnvelope className='text-lg md:text-3xl' />
                                {mailId}
                            </Link>
                            <Link href={`tel:${phoneNumber}`} title='Phone No.' target='_blank' className='flex font-bold mb-10 items-center gap-3 text-white md:text-lg
                        '>
                                <BiPhone className='text-lg md:text-3xl' />
                                {phoneNumber}
                            </Link>
                            <div className='flex items-center gap-3 text-white text-xl'>
                                <Link href={instagram} target='_blank' title='Instagram' className='bg-transparent border-2 p-2 rounded-full'>
                                    <FaInstagram className=' text-2xl text-white' />
                                </Link>
                                <Link href={`https://wa.me/${whatsApp}`} target='_blank' title='Whatsapp' className='bg-transparent border-2 p-2 rounded-full'>
                                    <FaWhatsapp className=' text-2xl text-white' />
                                </Link>
                            </div>

                        </div>
                    </form>

                </div>
                <div className="left col-span-10  md:col-span-5 h-full flex flex-col justify-center items-center ">
                    <h1 className='text-lg  md:hidden agatho text-white'>10<span className='font-sans'>/</span>45, Block 10, Geeta Colony, New Delhi, Delhi, 110031</h1>

                    <div className=" overflow-hidden  sm:w-full sm:h-full
                w-full h-[100vw]

                bg-myColor/55 rounded-t-xl  mockup-window y ">

                        <iframe
                            title='google map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0999705171816!2d77.26475037518024!3d28.65672518298222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3fe4c3b247%3A0xa870a523fcbe08da!2sJohanna%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1711709372791!5m2!1sen!2sin" style={{ border: '0', height: "90%", width: "100%", opacity: .45 }}
                            allowFullScreen={false}
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            className=''

                        ></iframe>
                    </div>
                    <h1 className='text-2xl  max-md:hidden agatho text-white'>10<span className='font-sans'>/</span>45, Block 10, Geeta Colony, New Delhi, Delhi, 110031</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeContact