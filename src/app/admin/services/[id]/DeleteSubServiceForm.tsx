'use client'
import { deleteSubService } from '@/lib/actions'
import React, { useRef } from 'react'
import toast from 'react-hot-toast'
import { TbTrash } from 'react-icons/tb'
import DeleteServiceFormButton from './DeleteServiceFormButton'

const DeleteSubServiceForm = ({ id, name }: { id: string, name: string }) => {
    const refBtn = useRef<HTMLButtonElement>(null)
    return (
        <>
            <button
                className="btn btn-ghost btn-xs md:btn-sm"
                onClick={() => {
                    if (document) {
                        (document.getElementById(name + 'deleteService') as HTMLFormElement).showModal();
                    }
                }}
            >

                <TbTrash className='text-red-800 text-lg' />
            </button>
            <dialog id={name + 'deleteService'} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Alert</h3>
                    <p className="py-4">Do you really want to remove <span className='font-bold'> {name}</span> from list</p>
                    <div className="modal-action">
                        <form action={async (formData: FormData) => {
                            const { message, ok } = await deleteSubService(formData)
                            if (ok) {
                                toast.success(message)
                            } else {
                                toast.error(message)
                            }
                            refBtn.current?.click();
                        }}>
                            <input type="hidden" name="id" value={id} />
                            <input type="hidden" name="name" value={name} />
                            <DeleteServiceFormButton name={name} />
                        </form>
                        <form method='dialog' className='flex  gap-2'>
                            <button ref={refBtn} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </>

    )
}

export default DeleteSubServiceForm