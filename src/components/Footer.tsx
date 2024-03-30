import Link from 'next/link'
import React from 'react'
import FooterLinks from './FooterLinks'
import { FaComputer } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '../../public/static/logo/logoJohanna.png'

const Footer = ({ phoneNumber }: { phoneNumber: string | null | undefined }) => {
    return (
        <div className=" px-10">
            <div>
                <Image src={logo} alt='LOGO'
                    width={80} height={10}
                />
            </div>
            <div className="flex max-md:gap-4 max-md:flex-col items-center justify-center md:justify-between border-t-2 border-t-myColor text-myColor pt-10
            pb-5
            ">
                <div>
                    <p className="max-md:text-sm font-bold">Johanna Beauty All rights reserved</p>
                </div>
                <FooterLinks />
                <Link rel='external' href={`tel:${phoneNumber}`} title='Phone No.' target='_blank'>
                    <p>+{phoneNumber}</p>
                </Link>
            </div>
            <div className='pb-5 w-full flex justify-end items-center'>
                <Link rel='external' href={'https://www.linkedin.com/in/abdus-samad-633b3425a/'} title='Developer LinkedIn'
                    target='_blank'
                    className="agatho text-myColor2 text-right text-xs md:text-lg link pb-5 font-semibold
                flex items-center gap-3
                ">
                    <FaComputer />
                    Website created by Abdus Samad
                </Link>
            </div>
        </div>
    )
}

export default Footer