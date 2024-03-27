'use client';
import { useFormStatus } from 'react-dom'

const UpdateServiceFormButton = () => {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} type="submit" className='btn btn-primary'>{pending ? "Updating ..." : "Update"}</button>

    )
}

export default UpdateServiceFormButton