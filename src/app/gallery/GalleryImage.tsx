import Image, { StaticImageData } from 'next/image'

const GalleryImage = async ({ image, i, name }: { image: string | StaticImageData, name: string, i: number }) => {

    return (<div key={i} className='imgDiv relative overflow-hidden '>

        <Image src={image}
            loading='lazy'

            alt={`${name} Image`} width={200} height={400} className='w-full hover:scale-95'
        />


        <h1 className='absolute
                        capitalize
                        
                        bg-myColor/60 p-1 px-2 rounded-full text-sm md:text-lg imgText left-3 font-extrabold transition-duration-1000'>{name}</h1>
    </div>
    )
}

export default GalleryImage