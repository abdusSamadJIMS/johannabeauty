import { StaticImageData } from 'next/image'
import GalleryCol from './GalleryCol'
import { colType } from '@/lib/types';

import { fetchAllWork } from '@/lib/actions';


const Gallery = async () => {

    const works = await fetchAllWork();
    let col1: colType[] = [];
    let col2: colType[] = [];
    let col3: colType[] = [];
    let col4: colType[] = [];

    if (works) {
        let result = [];
        for (let i = 4; i > 0; i--) {
            result.push(works.splice(0, Math.ceil(works.length / i)));
        }
        col1 = result[0]
        col2 = result[1]
        col3 = result[2]
        col4 = result[3]


    }

    return (
        <div className="photos md:p-10 p-4">
            <div className="flex flex-wrap gap-5 justify-center">
                <GalleryCol imageArray={col1} />
                <GalleryCol imageArray={col2} />
                <GalleryCol imageArray={col3} />
                <GalleryCol imageArray={col4} />
            </div>
        </div>
    )
}

export default Gallery