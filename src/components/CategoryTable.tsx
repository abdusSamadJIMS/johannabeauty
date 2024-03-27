'use client'
import { deleteCategory } from '@/lib/actions'
import { Category } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import ServiceDeleteDialogButton from './ServiceDeleteDialogButton'

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
                                    <ServiceDeleteDialogButton id={d.id} title={d.title} image={d.image} />
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