import Link from 'next/link'
import React from 'react'
import FooterLinks from './FooterLinks'

const Footer = ({ phoneNumber }: { phoneNumber: string | null | undefined }) => {
    return (
        <div className=" px-10">
            <div className="flex max-md:gap-4 max-md:flex-col items-center justify-center md:justify-between border-t-2 border-t-myColor text-myColor py-10">
                <div>
                    <p className="max-md:text-sm font-bold">Johanna Beauty All rights reserved</p>
                </div>
                <FooterLinks />
                <Link href={`tel:${phoneNumber}`} title='Phone No.' target='_blank'>
                    <p>+{phoneNumber}</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer