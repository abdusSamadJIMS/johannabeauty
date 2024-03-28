
import { colType } from '@/lib/types'
import Image, { StaticImageData } from 'next/image'
const GalleryCol = ({ imageArray }: { imageArray: colType[] }) => {
    return (

        <div className="col1 md:w-[22.5%] w-[45%]  gap-5 flex flex-col">
            {
                imageArray.map((image, i) => (
                    <div key={i} className='imgDiv relative overflow-hidden '>
                        <Image src={image.image} alt={`${image.name} Image`} width={200} height={400} className='w-full hover:scale-95'
                        />

                        <h1 className='absolute
                        capitalize
                        
                        bg-myColor/60 p-1 px-2 rounded-full text-sm md:text-lg imgText left-3 font-extrabold transition-duration-1000'>{image.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default GalleryCol