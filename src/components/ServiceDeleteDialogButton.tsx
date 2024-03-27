import { deleteCategory } from '@/lib/actions';
import React from 'react'
import { TbTrash } from 'react-icons/tb';
import ServiceDeleteDialogButtonDeleteButton from './ServiceDeleteDialogButtonDeleteButton';
import toast from 'react-hot-toast';

const ServiceDeleteDialogButton = ({ id, title, image }: { id: string, title: string, image: string }) => {
    return (
        <>
            <button
                className="btn btn-ghost"
                onClick={() => {
                    if (document) {
                        (document.getElementById(id + 'delete') as HTMLFormElement).showModal();
                    }
                }}
            >

                <TbTrash className='text-red-800 text-2xl' />
            </button>
            <dialog id={id + 'delete'} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Alert</h3>
                    <p className="py-4">Do you really want to remove <span className='font-bold'> {title}</span> from list</p>
                    <div className="modal-action">
                        <form action={async (formData: FormData) => {

                            const { message, ok } = await deleteCategory(formData)
                            if (ok) {
                                toast.success(message)
                            } else {
                                toast.error(message)
                            }
                        }}>
                            <input type="hidden" name="id" value={id} />
                            <input type="hidden" name="image" value={image} />
                            <ServiceDeleteDialogButtonDeleteButton />
                        </form>
                        <form method='dialog' className='flex  gap-2'>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </>
    )
}

export default ServiceDeleteDialogButton