'use client'
import { useFormStatus } from 'react-dom'

const UpdateContactInfoFormButton = () => {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className="btn btn-outline w-full">
            {
                pending ? "Updating ... " : "Update"
            }
        </button>

    )
}

export default UpdateContactInfoFormButton