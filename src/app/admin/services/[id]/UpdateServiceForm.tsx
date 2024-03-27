'use client'
import { updateService } from '@/lib/actions';
import React, { useRef } from 'react'
import toast from 'react-hot-toast';
import { BiNotepad } from 'react-icons/bi';
import UpdateServiceFormButton from './UpdateServiceFormButton';

const UpdateServiceForm = ({ id, name }: { id: string, name: string }) => {
    const ref = useRef<HTMLButtonElement>(null)
    return (
        <>
            <button
                className="btn btn-ghost"
                onClick={() => {
                    if (document) {
                        (document.getElementById(id + 'updateService') as HTMLFormElement).showModal();
                    }
                }}
            >

                <BiNotepad className='text-2xl text-green-600' />
            </button>
            <dialog id={id + 'updateService'} className="modal">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg">Update Service</h3>
                    {/* <p className="py-4">Do you really want to remove <span className='font-bold'> {name}</span> from list</p> */}
                    <div className="modal-action flex flex-col gap-4">
                        <form
                            className='flex justify-between max-md:flex-col gap-2'
                            action={async (FormData: FormData) => {
                                const { message, ok } = await updateService(FormData)
                                if (ok) {
                                    toast.success(message)
                                } else {
                                    toast.error(message)
                                }

                                ref.current?.click()
                            }}>
                            <input type="hidden" name="id" value={id} />
                            <input required type="text" name="name" id="name" className='input' placeholder='Enter new name' />
                            <UpdateServiceFormButton />
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
export default UpdateServiceForm