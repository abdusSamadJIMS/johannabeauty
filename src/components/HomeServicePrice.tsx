'use client'
// import { agatho } from '@/app/layout'
import { services } from '@/lib/services'
import React, { useEffect, useState } from 'react'

const HomeServicePrice = () => {
    const [selectedService, setSelectedService] = useState(services[0].subServices)
    const [activeService, setActiveService] = useState(services[0].title)
    useEffect(() => {

    }, [selectedService])

    return (
        <div className=" py-10 md:pt-20 text-myColor px-10  ">
            <header className={`border-b-4 border-b-myColor mb-20 
            agatho`}>
                <h2 className="text-3xl md:text-7xl">PRICES OF OUR SALOON</h2>
            </header>
            <div className="flex items-center text-center gap-5 overflow-auto mb-16">
                {
                    services.map((service) =>
                    (
                        <div key={service.id} className="flex gap-10 w-full">
                            <p
                                onClick={() => {
                                    setSelectedService(service.subServices)
                                    setActiveService(service.title)
                                }}
                                className={`cursor-pointer max-sm:text-sm ${activeService == service.title ? "" : "opacity-40"}`}
                            >{service.title}</p>
                            {
                                (parseInt(service.id) != services.length) &&
                                <i className='border-r rotate-12 border-r-myColor'></i>
                            }
                        </div>
                    )
                    )
                }

            </div>
            <div className="subServices my-5">

                <div className="join border-myColor join-vertical w-full">
                    {
                        selectedService.map((sub) =>
                        (
                            <div key={sub.name} className="collapse collapse-arrow join-item border border-myColor">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title text-xl  uppercase 
                                agatho`}>
                                    {sub.name}
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        {
                                            sub.services?.map((s) =>
                                            (
                                                <li className='uppercase w-full flex justify-between text-sm mb-3' key={s.name}>

                                                    <p className='font-medium capitalize'>{s.name}</p>
                                                    <p >{s.price}</p>
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
                {/* {
                    selectedService.map((subService) =>
                    (
                        <p key={subService}>{subService}</p>
                    ))
                } */}
            </div>
        </div>
    )
}

export default HomeServicePrice