import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeOfferCarouselItem = ({ id, image, next, prev }: { id: string, image: StaticImageData, prev: string, next: string, }) => {
    return (
        <div
            id={`offer${id}`} className="carousel-item relative w-full cursor-pointer">
            <Link href={''}>
                <Image src={image} alt='' className="w-full" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link href={`#offer${prev}`} className="btn max-md:btn-xs btn-circle bg-myColor hover:bg-myColor hover:text-white">❮</Link>
                <Link href={`#offer${next}`} className="btn max-md:btn-xs btn-circle bg-myColor hover:bg-myColor hover:text-white">❯</Link>
            </div>
        </div>
    )
}

export default HomeOfferCarouselItem