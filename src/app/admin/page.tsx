import React, { FormEvent } from 'react'

const AdminPage = () => {
    const onSubmitHandle = (e: FormEvent) => {
        if (!confirm("go ahead?")) {
            e.preventDefault();
        }
    }
    return (
        <div className='flex justify-center items-center h-full'>
            <h1 className='agatho text-5xl md:text-7xl text-center mt-32 font-light'>
                Hello, <span className='text-myColor font-black'>
                    Swean
                </span>
            </h1>
        </div>
    )
}

export default AdminPage