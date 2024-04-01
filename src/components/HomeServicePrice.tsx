'use client'
// import { agatho } from '@/app/layout'
import { services } from '@/lib/services'
import { Categories } from '@/lib/types'
import React, { useEffect, useState } from 'react'

const HomeServicePrice = ({ categories }: { categories: Categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].Service)
    // const [selectedService, setSelectedService] = useState(services[0].subServices)
    const [activeCategory, setActiveCategory] = useState(categories[0].title)
    // const [activeService, setActiveService] = useState(services[0].title)
    useEffect(() => {
    }, [selectedCategory])

    return (
        <div className=" py-10 md:pt-20 text-myColor px-10  min-h-screen">
            <header className={`border-b-4 border-b-myColor mb-20 
            agatho`}>
                <h2 className="text-3xl md:text-7xl">Services Details</h2>
            </header>
            {
                categories &&

                <div className="flex items-center text-center gap-5 overflow-auto mb-16">
                    {
                        categories.map((category, index) =>
                        (
                            <div key={index} className="flex gap-10 w-full">
                                <p
                                    onClick={() => {
                                        setSelectedCategory(category.Service)
                                        setActiveCategory(category.title)
                                        // setSelectedService(service.subServices)
                                        // setActiveService(service.title)
                                    }}
                                    className={`cursor-pointer max-sm:text-sm ${activeCategory == category.title ? "" : "opacity-40"}`}
                                >{category.title}</p>
                                {
                                    ((index + 1) != categories.length) &&
                                    <i className='border-r rotate-12 border-r-myColor'></i>
                                }
                            </div>
                        )
                        )
                    }

                </div>
            }
            {/* <div className="flex items-center text-center gap-5 overflow-auto mb-16">
                {
                    services.map((service, index) =>
                    (
                        <div key={index} className="flex gap-10 w-full">
                            <p
                                onClick={() => {
                                    setSelectedService(service.subServices)
                                    setActiveService(service.title)
                                }}
                                className={`cursor-pointer max-sm:text-sm ${activeService == service.title ? "" : "opacity-40"}`}
                            >{service.title}</p>
                            {
                                ((index + 1) != services.length) &&
                                <i className='border-r rotate-12 border-r-myColor'></i>
                            }
                        </div>
                    )
                    )
                }

            </div> */}
            <div className="subServices my-5">

                <div className="join border-myColor join-vertical w-full">
                    {
                        selectedCategory.map((service, index) =>
                        (
                            <div key={index} className="collapse collapse-arrow join-item border border-myColor">
                                <label htmlFor="my-accordion-4">
                                    <input type="radio" name="my-accordion-4" defaultChecked />
                                </label>
                                <div className={`collapse-title text-xl  uppercase 
                                agatho`}>
                                    {service.name}
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        {
                                            service.SubService?.map((sub, index) =>
                                            (
                                                <li className='uppercase w-full flex justify-between text-sm mb-3' key={`${index}sub`}>

                                                    <p className='font-medium capitalize'>{sub.name}</p>
                                                    {/*<p >₹ {sub.price}/-</p>*/}
                                                </li>
                                            )
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default HomeServicePrice