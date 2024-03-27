'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const ServiceDeleteDialogButtonDeleteButton = () => {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} type="submit" className='btn btn-error'>{pending ? "Deleting ..." : "Delete"}</button>

    )
}

export default ServiceDeleteDialogButtonDeleteButton