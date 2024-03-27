'use client'
import { addSubService } from '@/lib/actions'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import AddSubServiceFormButton from './AddSubServiceFormButton'

const AddSubServiceForm = ({ id }: { id: string }) => {
    const ref = useRef<HTMLFormElement>(null)
    const [isloading, setIsloading] = useState(false)
    return (

        <form ref={ref} action={async (FormData: FormData) => {
            setIsloading(true)
            const { message, ok } = await addSubService(FormData)
            if (ok) {
                toast.success(message)
            } else {
                toast.error(message)
            }
            ref.current?.reset();
            setIsloading(false)
        }} className='flex flex-col'>
            <div className="flex justify-evenly">
                <input disabled={isloading} required type="text" name='name' className='input w-[45%] my-2 bg-transparent border-myColor' placeholder="Name of sub service's Service" />
                <input disabled={isloading} required min={0} type="number" name='price' className='input w-[45%] my-2 bg-transparent border-myColor' placeholder="Price of sub service's Service" />
            </div>
            <input type="hidden" name="serviceId" value={id} />
            <AddSubServiceFormButton />
        </form>
    )
}

export default AddSubServiceForm