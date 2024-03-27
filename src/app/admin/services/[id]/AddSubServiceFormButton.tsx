import React from 'react'
import { useFormStatus } from 'react-dom'

const AddSubServiceFormButton = () => {
    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            type="submit" className='btn w-full btn-success my-2'>
            {
                pending ? "Adding ... " : "Add"
            }
        </button>

    )
}

export default AddSubServiceFormButton