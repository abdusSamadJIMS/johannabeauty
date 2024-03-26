'use client'
import { addCatogory, revalidate } from '@/lib/actions'
import { useEdgeStore } from '@/lib/edgestore'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

const CategoryAddForm = () => {
    const { edgestore } = useEdgeStore()
    const router = useRouter();
    const [file, setFile] = useState<File>()
    const [isLoading, setIsLoading] = useState(false)
    const ref = useRef<HTMLFormElement>(null)
    const [categoryObject, setCategoryObject] = useState({
        title: "",
        description: "",
    })
    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        if (file) {
            setIsLoading(true)
            const fileRes = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    console.log(progress);
                },
            })
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/createCategory`, {
                cache: "no-cache",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ ...categoryObject, image: fileRes.url })
            },

            )
            const data = await res.json();
            console.log(data);
            await revalidate();
            setIsLoading(false)
            setFile(undefined)
            setCategoryObject({
                title: "",
                description: ""
            })
            ref.current?.reset();
            // router.refresh();

        }
    }
    useEffect(() => {
        console.log(categoryObject);
    }, [categoryObject])
    return (
        <form ref={ref} onSubmit={onSubmitHandler} className='flex flex-col max-w-md mx-auto '>
            {
                isLoading &&
                <span className='badge badge-success w-full py-5 mb-5'>New Category adding <span className='loading loading-dots'></span> </span>
            }
            <input
                disabled={isLoading}

                value={categoryObject.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setCategoryObject({ ...categoryObject, [e.target.name]: e.target.value })
                }}
                type="text" name="title" id="title" placeholder='Title' className='input  mb-3 bg-transparent border border-black text-black' />
            <input
                disabled={isLoading}

                onChange={(e) => {
                    setFile(e.target.files?.[0]);
                }}
                type="file" name="file" id="file" accept='image/*' className='file-input  mb-3 bg-transparent border border-black text-black' />
            {/* <input type="hidden" name="image" id="image" value={url} /> */}
            <input
                disabled={isLoading}

                value={categoryObject.description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setCategoryObject({ ...categoryObject, [e.target.name]: e.target.value })
                }}
                type="text" name="description" id="description" placeholder='Description' className='input  mb-3 bg-transparent border border-black text-black' />
            <button
                disabled={isLoading}
                type="submit" className='btn btn-ghost btn-outline'>Add</button>
        </form>
    )
}

export default CategoryAddForm