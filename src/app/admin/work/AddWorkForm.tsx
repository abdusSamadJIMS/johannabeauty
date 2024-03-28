'use client'

import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

const AddWorkForm = ({ total }: { total: number }) => {
    const refBtn = useRef<HTMLButtonElement>(null)
    const ref = useRef<HTMLFormElement>(null)
    const [work, setWork] = useState("")

    const [disable, setDisable] = useState(false)
    const [file, setFile] = useState<File>()
    const { edgestore } = useEdgeStore();
    const router = useRouter();
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

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/work`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ image: fileRes.url, name: work })
            })
            const data = await res.json();
            refBtn.current?.click();
            ref.current?.reset();
            setWork("")
            setDisable(false)
            router.refresh();
            console.log(data);
        }
    }
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => {
                    if (document) {
                        (document.getElementById('addWork') as HTMLFormElement).showModal();
                    }
                }}
            >

                Add Work
            </button>
            <dialog id={'addWork'} className="modal ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Work</h3>
                    <form
                        ref={ref}
                        onSubmit={onSubmitHandler} className='max-w-md'>
                        <input disabled={disable || (total >= 10)}
                            onChange={(e) => {
                                setFile(e.target.files?.[0]);
                            }}
                            type="file" accept='image/*' name="file" id="file" className='file-input w-full my-2 file-input-bordered' />
                        <input
                            required
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setWork(e.target.value)
                            }}
                            value={work} type="text" name="work" id="work" className="input w-full my-2 input-bordered" placeholder="Work" />
                        <button disabled={disable || (total >= 10)} type="submit" className='btn  bg-myColor w-full my-2'>
                            {(total >= 10) ? "Work Limit Reached" : "Add Work"}
                        </button>
                        {
                            (total >= 10) &&
                            <h2 className="bg-error px-3 py-1 rounded text-black text-center font-bold">Max work limit reached</h2>
                        }
                    </form >
                    <div className="modal-action">
                        <form method='dialog' className='flex  gap-2'>
                            <button
                                disabled={disable}
                                ref={refBtn} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </>
    )
}

export default AddWorkForm