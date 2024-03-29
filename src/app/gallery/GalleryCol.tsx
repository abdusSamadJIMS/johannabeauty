
import { colType } from '@/lib/types'
import Image from 'next/image'
import GalleryImage from './GalleryImage'
const GalleryCol = ({ imageArray }: { imageArray: colType[] }) => {
    return (

        <div className="col1 md:w-[22.5%] w-[45%]  gap-5 flex flex-col">

            {
                imageArray.map((image, i) => {

                    return (
                        <GalleryImage key={i} i={i} image={image.image} name={image.name} />
                    )
                })
            }
        </div>
    )
}

export default GalleryCol