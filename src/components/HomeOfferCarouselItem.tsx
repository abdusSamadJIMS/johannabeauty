import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeOfferCarouselItem = ({ id, image, next, prev }: { id: string, image: StaticImageData | string, prev: string, next: string, }) => {
    return (
        <div
            id={`offer${id}`} className="carousel-item relative w-full cursor-pointer h-64 md:h-[80vh]">
            <Image title={`offer${next}`} src={image} alt={`offer-${next}`} fill className="object-cover" />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link title='navigation' href={`#offer${prev}`} className="btn max-md:btn-xs btn-circle bg-myColor hover:bg-myColor hover:text-white">❮</Link>
                <Link title='navigation' href={`#offer${next}`} className="btn max-md:btn-xs btn-circle bg-myColor hover:bg-myColor hover:text-white">❯</Link>
            </div>
        </div>
    )
}

export default HomeOfferCarouselItem