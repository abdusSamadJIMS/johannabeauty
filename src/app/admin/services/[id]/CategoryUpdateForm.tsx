'use client'
import { useEdgeStore } from '@/lib/edgestore'
import { Category } from '@prisma/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

const CategoryUpdateForm = ({ Category }: { Category: Category }) => {
    const { edgestore } = useEdgeStore()
    const router = useRouter();
    const [file, setFile] = useState<File>()
    const [isLoading, setIsLoading] = useState(false)
    const [changedFields, setChangedFields] = useState({
        title: false, image: false, description: false
    })
    const ref = useRef<HTMLFormElement>(null)
    const [categoryObject, setCategoryObject] = useState({
        id: Category.id,
        title: Category.title,
        description: Category.description,
        oldFileUrl: Category.image
    })
    let updatedCategory: Category;

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        if (file) {
            setIsLoading(true)
            const fileRes = await edgestore.publicFiles.upload({
                file,
                options: {
                    replaceTargetUrl: categoryObject.oldFileUrl
                },
                onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    // console.log(progress);
                },
            })
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/createCategory`, {
                cache: "no-cache",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ ...categoryObject, image: fileRes.url, changedFields })
            },
            )
            const data = await res.json();
            if (data.ok) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }

            updatedCategory = await data.updatedCategory as Category
            // // console.log(data);

            // await revalidate2();
            setIsLoading(false)
            setDisable(!disable)
            setFile(undefined)
            ref.current?.reset();
            router.refresh();
            setCategoryObject({
                description: updatedCategory.description,
                title: updatedCategory.title,
                oldFileUrl: updatedCategory.image,
                id: updatedCategory.id,
            })
        } else {
            setIsLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/createCategory`, {
                cache: "no-cache",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ ...categoryObject, changedFields })
            },

            )
            const data = await res.json();
            if (data.ok) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
            updatedCategory = await data.updatedCategory as Category
            // // console.log(data);
            // await revalidate2();
            setIsLoading(false)
            setDisable(!disable)
            setFile(undefined)
            router.refresh();
            ref.current?.reset();
            setCategoryObject({
                description: updatedCategory.description,
                title: updatedCategory.title,
                oldFileUrl: updatedCategory.image,
                id: updatedCategory.id,
            })
        }
    }
    const [disable, setDisable] = useState(true)
    useEffect(() => {
    }, [categoryObject])

    return (
        <form
            ref={ref}
            onSubmit={onSubmitHandler}
            className='flex flex-col' >
            <input
                onChange={() =>
                    setDisable((prev) => { return !prev })
                }
                type="checkbox" name='updateForm' checked={!disable} value="updateForm" className="toggle mb-5" />

            <input disabled={isLoading || disable}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setCategoryObject({ ...categoryObject, [e.target.name]: e.target.value })
                    setChangedFields({ ...changedFields, title: true })
                }}
                type="text" name="title" id="title" value={categoryObject.title} placeholder='Title' className='input border-black mb-3 text-white max-w-full' />
            <label htmlFor="image" className='mb-3 max-w-full relative h-40 border '>
                <Image src={Category.image} alt={Category.title + " image"} fill
                    className='object-contain'
                />
            </label>
            <input disabled={isLoading || disable}
                onChange={(e) => {
                    setFile(e.target.files?.[0]);
                    setChangedFields({ ...changedFields, image: true })

                }}
                type="file" name="image" id="image" className='file-input mb-3 w-full' />
            <textarea disabled={isLoading || disable}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setCategoryObject({ ...categoryObject, [e.target.name]: e.target.value })
                    setChangedFields({ ...changedFields, description: true })
                }}
                name="description" id="description" value={categoryObject.description} placeholder='Title' className='textarea border-black mb-3 text-white  max-w-full' />
            <button disabled={isLoading || disable} type="submit" className='btn  max-w-full'>Update</button>
        </form >
    )

}

export default CategoryUpdateForm