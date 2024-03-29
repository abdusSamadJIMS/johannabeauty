import React from 'react'
import AddWorkForm from './AddWorkForm'
import { deleteWork, fetchAllWork } from '@/lib/actions'
import Image from 'next/image';

const workPage = async () => {
    const works = await fetchAllWork();
    return (
        <div>
            <div>
                <div className='agatho text-myColor text-7xl border-b-2 border-b-myColor flex justify-between items-center'>
                    <h2>Work</h2>
                    <AddWorkForm total={works?.length || 0} />
                </div>
                <div className="overflow-x-auto">
                    {
                        works &&


                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    works?.map((work, i) => (
                                        <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td>
                                                <Image src={work.image} alt={`${work.name}-image`} width={100} height={100} />
                                            </td>
                                            <td className='capitalize'>{work.name}</td>
                                            <td>
                                                <form action={deleteWork}>
                                                    <input type="hidden" name="image" value={work.image} />
                                                    <input type="hidden" name="id" value={work.id} />
                                                    <button type="submit" className='btn btn-error btn-sm'>Remove</button>
                                                </form>
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default workPage