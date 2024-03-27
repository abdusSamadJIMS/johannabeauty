'use client'

import { useFormStatus } from "react-dom"

const UpdateSubServiceFormButton = () => {
    const { pending } = useFormStatus()
    return (
        <button
            disabled={pending}
            type="submit" className="btn btn-success">
            {
                pending ? "Updating ..." : "Update"
            }
        </button>

    )
}

export default UpdateSubServiceFormButton