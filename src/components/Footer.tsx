import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className=" px-10">
            <div className="flex max-md:gap-4 max-md:flex-col items-center justify-center md:justify-between border-t-2 border-t-myColor text-myColor py-10">
                <div>
                    <p className="max-md:text-sm font-bold">Johanna Beauty All rights reserved</p>
                </div>
                <div className="linkss flex gap-5 max-md:text-sm">
                    <Link href={'/about'}>About us</Link>
                    <Link href={'/services'}>Services</Link>
                    <Link href={'/gallery'}>Gallery</Link>
                    <Link href={'/contact'}>Contact</Link>
                </div>
                <div className="">
                    <p>+91 8010 51 2106</p>
                </div>
            </div>
        </div>
    )
}

export default Footer