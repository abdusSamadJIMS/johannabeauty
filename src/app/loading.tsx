import React from 'react'

const loading = () => {
    return (
        <section className='h-screen flex flex-col items-center justify-center'>
            <span className="loading loading-infinity md:w-52 w-20"></span>
            <h2 className='cinzel text-2xl font-black'>Beautify your world</h2>
        </section>
    )
}

export default loading