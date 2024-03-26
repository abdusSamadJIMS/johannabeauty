'use client'
import React from 'react'
import b1 from '../../public/banner1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HomeOfferCarouselItem from './HomeOfferCarouselItem'

const HomeOffers = () => {
    const router = useRouter()
    const offers = [
        {
            id: '1',
            image: b1,
        },
        {
            id: '2',
            image: b1,
        },
        {
            id: '3',
            image: b1,
        },

    ]
    return (
        <div className="py-5 md:py-10 md:pt-20 text-myColor md:px-10">
            <header className={` border-b-4 border-b-myColor mb-10 md:mb-20 
        agatho max-md:mx-10`}>
                <h2 className="text-3xl md:text-7xl uppercase">special offers</h2>
            </header>
            <div className="banners">
                <div className="carousel carousel-center">
                    {
                        offers.map((offer) => {
                            let next = parseInt(offer.id) < offers.length ? parseInt(offer.id) + 1 : 1;
                            let prev = parseInt(offer.id) > 1 ? parseInt(offer.id) - 1 : offers.length;
                            return <HomeOfferCarouselItem key={offer.id} id={offer.id} image={offer.image}
                                next={`${next}`}
                                prev={`${prev}`}
                            />

                        })
                    }
                    {/* <HomeOfferCarouselItem id='1' image={b1} next='1' prev='1' /> */}

                </div>
            </div>
        </div>
    )
}

export default HomeOffers