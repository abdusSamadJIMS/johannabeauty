'use client'

import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

const AddOfferForm = ({ total }: { total: number }) => {
    const router = useRouter();
    const [file, setFile] = useState<File>();
    const [disable, setDisable] = useState(false)
    const ref = useRef<HTMLFormElement>(null)
    const { edgestore } = useEdgeStore();
    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        if (file) {
            setDisable(true)
            const fileRes = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    console.log(progress);
                },
            });

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/offer`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ image: fileRes.url })
            })
            const data = await res.json();

            ref.current?.reset();
            setDisable(false)
            router.refresh();
            console.log(data);
        }

    }
    return (
        <form
            ref={ref}
            onSubmit={onSubmitHandler} className='max-w-md my-10'>
            <h3 className='text-3xl agatho font-semibold'>Add New Offer</h3>
            <input disabled={disable || (total >= 10)}
                onChange={(e) => {
                    setFile(e.target.files?.[0]);
                }}
                type="file" accept='image/*' name="file" id="file" className='file-input w-full my-2' />
            <button disabled={disable || (total >= 10)} type="submit" className='btn  bg-myColor w-full my-2'>
                {(total >= 10) ? "Offers Limit Reached" : "Add Offer"}
            </button>
            {
                (total >= 10) &&
                <h2 className="bg-error px-3 py-1 rounded text-black text-center font-bold">Max offer limit reached</h2>
            }
        </form >
    )
}

export default AddOfferForm