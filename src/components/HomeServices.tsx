'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


// import { agatho } from '@/app/layout'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import HomeServiceCarouselItem from './HomeCategoryCarouselItem'
import { services } from '@/lib/services'
import { fetchAllCategories } from '@/lib/actions'
import { Category, Service } from '@prisma/client'
import { Categories } from '@/lib/types'
import HomeCategoryCarouselItem from './HomeCategoryCarouselItem'


const HomeServices = ({ categories }: { categories: Categories | undefined }) => {
    const [serviceNo, setServiceNo] = useState(1)

    return (
        <div className=" py-10 md:pt-20 text-myColor px-10  ">
            <header className={`flex  justify-between  items-center border-b-4 border-b-myColor mb-10 
            agatho`}>
                <h2 className="text-3xl md:text-7xl">OUR SERVICES</h2>
            </header>
            {
                categories && <>
                    <div className="carousel carousel-start rounded gap-[2.2%] md:gap-[1.5%] w-full">
                        {
                            categories?.map((category, index) => (
                                <HomeCategoryCarouselItem id={(index + 1).toString()} description={category.description} image={category.image} title={category.title} key={index} />
                            ))
                        }

                    </div>
                    <div className="md:hidden arrowrs flex items-center gap-3 justify-end">
                        <Link
                            title='navigation'
                            onClick={() => {
                                setServiceNo(prev => {
                                    return prev == 1 ? categories.length : prev - 1
                                })
                            }}
                            href={`/#service${serviceNo == 1 ? categories.length : serviceNo - 1}`}>
                            <HiArrowLongLeft className='text-2xl' />
                        </Link>
                        <Link
                            title='navigation'
                            onClick={() => {
                                setServiceNo(prev => {
                                    return prev == categories.length ? 1 : prev + 1
                                })
                            }} href={`/#service${serviceNo < categories.length ? serviceNo + 1 : 1}`}>
                            <HiArrowLongRight className='text-2xl' />
                        </Link>
                    </div>
                    <div className="max-md:hidden arrowrs flex items-center gap-3 justify-end">
                        <Link
                            title='navigation'
                            onClick={() => {
                                setServiceNo(prev => {
                                    return prev == 1 ? categories.length : 1
                                })
                            }}
                            href={`/#service${serviceNo == 1 ? categories.length : 1}`}>
                            <HiArrowLongLeft className='text-4xl' />
                        </Link>
                        <Link
                            title='navigation'
                            onClick={() => {
                                setServiceNo(prev => {
                                    return prev == categories.length ? 1 : categories.length
                                })
                            }} href={`/#service${serviceNo < categories.length ? categories.length : 1}`}>
                            <HiArrowLongRight className='text-4xl' />
                        </Link>
                    </div>
                </>
            }
        </div>
    )
}

export default HomeServices