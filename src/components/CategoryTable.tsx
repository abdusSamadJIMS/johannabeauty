import { deleteCategory } from '@/lib/actions'
import { Category } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

const CategoryTable = ({ data }: { data: Category[] }) => {
    return (
        <div className="overflow-x-auto">
            <table className='table  w-full text'>
                <thead className='table-header-group agatho text-3xl'>
                    <tr>
                        <td>S NO.</td>
                        <td>Category</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className='capitalize'>{d.title}</td>
                                <td><Link href={'/admin/services/' + d.id} className='link link-hover'>Details</Link>  </td>
                                <td className='flex justify-end'>
                                    <form action={deleteCategory}>
                                        <input type="hidden" name="id" value={d.id} />
                                        <input type="hidden" name="image" value={d.image} />
                                        <button type="submit" className='btn btn-error'>Delete</button>
                                    </form>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CategoryTable