'use client'

import { updateSubService } from "@/lib/actions";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BiNotepad } from "react-icons/bi";
import UpdateSubServiceFormButton from "./UpdateSubServiceFormButton";

const UpdateSubServiceForm = ({ id, oldName, oldPrice }: { id: string, oldName: string, oldPrice: number }) => {
    const ref = useRef<HTMLButtonElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            <button
                className="btn btn-ghost btn-xs md:btn-sm"
                onClick={() => {
                    if (document) {
                        (document.getElementById(oldName + 'updateSubService') as HTMLFormElement).showModal();
                    }
                }}
            >

                <BiNotepad className='text-lg text-green-600' />
            </button>
            <dialog id={oldName + 'updateSubService'} className="modal">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg">Update {oldName}</h3>
                    {/* <p className="py-4">Do you really want to remove <span className='font-bold'> {name}</span> from list</p> */}
                    <div className="modal-action flex flex-col gap-4">
                        <form
                            ref={formRef}
                            className='flex justify-between flex-col gap-2'
                            action={async (FormData: FormData) => {
                                setIsLoading(true);
                                const { message, ok } = await updateSubService(FormData)
                                if (ok) {
                                    toast.success(message)
                                } else {
                                    toast.error(message)
                                }
                                formRef.current?.reset();
                                setIsLoading(false)
                                ref.current?.click()
                            }}>
                            <input type="hidden" name="id" value={id} />
                            <input type="hidden" name="oldName" value={oldName} />
                            <input disabled={isLoading} required type="text" defaultValue={oldName} name="name" id="name" className='input' placeholder='Enter new name' />
                            <input disabled={isLoading} required type="number" min={0} defaultValue={oldPrice} name="price" id="price" className='input' placeholder='Enter new price' />
                            <UpdateSubServiceFormButton />
                        </form>
                        <form method='dialog' className='w-full'>
                            <button ref={ref} className="btn w-full">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </>
    )
}

export default UpdateSubServiceForm