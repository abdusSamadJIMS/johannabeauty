// import { addService } from '@/lib/actions';
import CategoryAddForm from '@/components/CategoryAddForm';
import prisma from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

const AdminServicesPage = async () => {
    const data = await prisma.category.findMany({});
    return (
        <div className=''>
            <div className='w-full my-10'>

                <CategoryAddForm />
            </div>
            <table className='table  w-full text'>
                <thead className='table-header-group agatho text-3xl'>
                    <tr>
                        <td>S NO.</td>
                        <td>Category</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{d.title}</td>
                                <td><Link href={'/admin/services/' + d.id}>Details</Link>  </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminServicesPage