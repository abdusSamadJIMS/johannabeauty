'use client'
import { links } from '@/lib/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const FooterLinks = () => {
    const pathname = usePathname()
    return (
        <div className="linkss flex gap-5 max-md:text-sm">
            {
                links.map((link) => (
                    <Link key={link.href} href={link.href} className={`${(pathname == link.href) ? "underline underline-offset-4" : ""}   capitalize`}>{link.label}</Link>

                ))
            }

        </div>
    )
}

export default FooterLinks