'use client'
import { sendQuery } from '@/lib/actions'
import React, { useEffect, useRef, useState } from 'react'
import { BiEnvelope, BiPhone } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'
import QueryFormButton from './QueryFormButton'
import toast from 'react-hot-toast'

const QueryForm = () => {
    const [disable, setDisable] = useState(false)
    const ref = useRef<HTMLFormElement>(null)

    useEffect(() => {

    }, [disable])

    return (
        <>
            <form
                ref={ref}

                action={async (formData: FormData) => {
                    setDisable(true)
                    const { message, ok } = await sendQuery(formData)
                    setDisable(false)
                    ref.current?.reset();
                    if (ok) {
                        toast.success(message)
                    } else {
                        toast.error(message)
                    }

                }} className="items-start text-myColor  w-full">
                <h1 className="mb-3 agatho text-4xl font-bold  text-white text-center">Ask your query</h1>
                <label className="input mb-3 md:w-full border-white hover:border-white  flex items-center gap-2 bg-transparent rounded-full">
                    <input disabled={disable} required minLength={5} maxLength={30} type="text" name='name' className="grow text-white w-full  max-md:w-full bg-transparent  " placeholder="Name" />
                </label>

                <label className="input mb-3 md:w-full border-white hover:border-white  flex items-center gap-2 bg-transparent rounded-full">
                    <input disabled={disable} required min={5} maxLength={100} type="email" name='email' className="grow text-white w-full bg-transparent  " placeholder="Email" />
                </label>

                <label className="input mb-3 md:w-full border-white hover:border-white  flex items-center gap-2 bg-transparent rounded-full">
                    <input disabled={disable} required min={5} maxLength={100} type="number" name='phone' className="grow text-white w-full bg-transparent  " placeholder="Phone Number" />
                </label>

                <textarea disabled={disable} required minLength={10} maxLength={200} name='query' className="mb-3 textarea text-white textarea-bordered bg-transparent w-full border-white hover:border-white" placeholder="Query"></textarea>
                <QueryFormButton />
            </form>

        </>

    )
}

export default QueryForm