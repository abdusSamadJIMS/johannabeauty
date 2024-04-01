import React from 'react'
import HomeOfferCarouselItem from './HomeOfferCarouselItem'
import { Offer } from '@prisma/client'

const HomeOffers = ({ offers }: { offers: Offer[] }) => {

    return (
        <div className="py-5 md:py-10 md:pt-20 text-myColor md:px-10">
            <header className={` border-b-4 border-b-myColor mb-10 md:mb-20 
        agatho max-md:mx-10`}>
                <h2 className="text-3xl md:text-7xl uppercase">special offers</h2>
            </header>
            <div className="banners">
                <div className="carousel carousel-center w-full">
                    {
                        offers.map((offer, i) => {
                            i = i + 1
                            let next = i < offers.length ? i + 1 : 1;
                            let prev = i > 1 ? i - 1 : offers.length;
                            return <HomeOfferCarouselItem key={i} id={`${i}`} image={offer.image}
                                next={`${next}`}
                                prev={`${prev}`}
                            />

                        })
                    }
                    {/* <HomeOfferCarouselItem id='1' image={b1} next='1' prev='1' /> */}

                </div>
            </div>
            <div className="bg-myColor">

                <p className='max-w-xl mx-auto text-center sm:text-3xl agatho text-white py-2'>
                    Discover Exclusive Beauty Deals at Johanna Beauty Salon: Maximize Your Glamour with Our Hidden Gems
                </p>
            </div>
        </div>
    )
}

export default HomeOffers