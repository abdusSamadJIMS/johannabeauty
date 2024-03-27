'use client'

import { useFormStatus } from "react-dom"

const DeleteSubServiceFormButton = () => {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className='btn btn-xs btn-error'>
            {pending ? "Deleting ... " : "Delete"}
        </button>

    )
}

export default DeleteSubServiceFormButton