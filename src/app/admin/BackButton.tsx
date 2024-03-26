'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'

const BackButton = () => {
    const router = useRouter()
    const pathname = usePathname();
    const pathArray = pathname.slice(1,).split("/")
    const newPathArray = pathArray.slice(0, pathArray.length - 1)
    const backPathname = newPathArray.join("/")
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return (
        <button type="button" onClick={() => {
            const url = baseUrl + "/" + backPathname
            router.push(url)
        }}
            className='btn m-3
            max-md:btn-sm
            '>
            <BiLeftArrowAlt className='text-lg md:text-3xl' />
        </button>
    )
}

export default BackButton