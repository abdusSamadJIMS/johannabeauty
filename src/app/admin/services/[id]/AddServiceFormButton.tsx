'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const AddServiceFormButton = () => {
    const { pending } = useFormStatus()
    return (

        <button type="submit" disabled={pending} className='btn w-full btn-success my-2'>{pending ? "Adding ..." : "Add"}</button>

    )
}

export default AddServiceFormButton