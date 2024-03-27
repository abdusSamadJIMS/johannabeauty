'use client'
import { addService } from '@/lib/actions'
import React, { useRef, useState } from 'react'
import AddServiceFormButton from './AddServiceFormButton'
import toast from 'react-hot-toast'

const AddServiceForm = ({ id }: { id: string }) => {
    const ref = useRef<HTMLFormElement>(null)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <form
            ref={ref}
            action={async (formData: FormData) => {
                setIsLoading(true)
                const { message, ok } = await addService(formData)
                if (ok) {
                    toast.success(message)
                } else {
                    toast.error(message)
                }
                setIsLoading(false)
                ref.current?.reset();
            }}>
            <input required disabled={isLoading} type="text" name='name' className='input w-full my-2' placeholder='Name of sub service' />
            <input type="hidden" name="categoryId" value={id} />
            <AddServiceFormButton />
        </form>
    )
}

export default AddServiceForm