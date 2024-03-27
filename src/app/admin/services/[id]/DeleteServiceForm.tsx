'use client'
import { deleteService } from '@/lib/actions'
import React, { useRef } from 'react'
import toast from 'react-hot-toast';
import { TbTrash } from 'react-icons/tb';
import DeleteServiceFormButton from './DeleteServiceFormButton';

const DeleteServiceForm = ({ id, name }: { id: string, name: string }) => {
    const refBtn = useRef<HTMLButtonElement>(null)
    return (
        <>
            <button
                className="btn btn-ghost"
                onClick={() => {
                    if (document) {
                        (document.getElementById(id + 'deleteService') as HTMLFormElement).showModal();
                    }
                }}
            >

                <TbTrash className='text-red-800 text-2xl' />
            </button>
            <dialog id={id + 'deleteService'} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Alert</h3>
                    <p className="py-4">Do you really want to remove <span className='font-bold'> {name}</span> from list</p>
                    <div className="modal-action">
                        <form action={async (formData: FormData) => {
                            const { message, ok } = await deleteService(formData);
                            if (ok) {
                                toast.success(message)
                            } else {
                                toast.error(message)
                            }
                            refBtn.current?.click();
                        }}>
                            <input type="hidden" name="id" value={id} />
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

export default DeleteServiceForm