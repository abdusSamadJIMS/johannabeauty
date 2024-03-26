import Link from 'next/link'
import React from 'react'
import { BiEnvelope, BiPhone, } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'

const HomeContact = () => {
    return (
        <div className="my-10 text-myColor bg-[url('/static/contactImg.jpg')] min-h-screen
    bg-cover
    bg-fixed
    hero
    ">
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content md:justify-start w-full max-md:flex-col">
                <form action="" className="items-start text-myColor max-md:w-full w-1/2">
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
                    <div className=''>
                        <Link href={'mailto:"abdussamadjims@gmail.com"'} title='Mail Id' target='_blank' className='flex my-5 items-center gap-3 text-white text-lg'>
                            <BiEnvelope className='text-3xl' />
                            abdussamadjims@gmail.com
                        </Link>
                        <Link href={'tel:+918010512106'} title='Phone No.' target='_blank' className='flex font-bold mb-10 items-center gap-3 text-white text-lg'>
                            <BiPhone className='text-3xl' />
                            +91 8010 51 2106
                        </Link>
                        <div className='flex items-center gap-3 text-white text-xl'>
                            <Link href={''} target='_blank' title='Instagram' className='bg-transparent border-2 p-2 rounded-full'>
                                <FaInstagram className=' text-2xl text-white' />
                            </Link>
                            <Link href={''} target='_blank' title='Whatsapp' className='bg-transparent border-2 p-2 rounded-full'>
                                <FaWhatsapp className=' text-2xl text-white' />
                            </Link>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default HomeContact