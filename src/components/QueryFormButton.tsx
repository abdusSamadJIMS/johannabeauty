'use client'
import { useFormStatus } from 'react-dom'
import { IoIosSend } from 'react-icons/io'

const QueryFormButton = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit"
            disabled={pending}
            className="btn   w-full
                        bg-transparent hover:bg-transparent hover:text-white
                        border-white
                        hover:border-white
                        ">
            {
                pending ?
                    <span className="loading loading-sm loading-spinner"></span> :
                    <>
                        Send your query
                        <IoIosSend className="text-2xl" />
                    </>
            }

        </button>
    )
}

export default QueryFormButton