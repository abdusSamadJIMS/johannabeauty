'use client'

import { useFormStatus } from "react-dom"

const DeleteServiceFormButton = ({ name }: { name: string }) => {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} type="submit" className='btn btn-error w-full'>{pending ? "Deleting ..." : "Delete"} {name}</button>

    )
}

export default DeleteServiceFormButton