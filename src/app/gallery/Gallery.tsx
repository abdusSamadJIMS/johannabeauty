import { StaticImageData } from 'next/image'
import GalleryCol from './GalleryCol'
import { colType } from '@/lib/types';

import img1 from '../../../public/static/services/groomingService.jpg'
import img2 from '../../../public/static/services/bodyTreatment.jpg'
import img3 from '../../../public/static/abdusSamad.png'
import img4 from '../../../public/static/clientImage.jpg'
import { fetchAllWork } from '@/lib/actions';


const Gallery = async () => {

    const works = await fetchAllWork();
    let col1: colType[] = [{ image: img1, name: "Hair", id: "", createdAt: undefined }];
    let col2: colType[] = [{ image: img2, name: "Hair", id: "", createdAt: undefined }];
    let col3: colType[] = [{ image: img3, name: "Hair", id: "", createdAt: undefined }];
    let col4: colType[] = [{ image: img4, name: "Hair", id: "", createdAt: undefined }];

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