import { addService, addSubService, deleteService, deleteSubService, fetchUniqueCategory } from '@/lib/actions';
import prisma from '@/lib/prisma'
import Image from 'next/image';
import { redirect } from 'next/navigation'
import React from 'react'
import CategoryUpdateForm from './CategoryUpdateForm';

const CategoryDetail = async ({ params }: { params: { id: string } }) => {

    const byteSize = (str: string) => new Blob([str]).size;
    if (!(byteSize(params.id) == 24)) redirect("/admin/services")

    const Category = await fetchUniqueCategory(params.id);

    let subService;

    if (!Category) {
        redirect("/admin/services")
    }
    return (
        <div className='mt-10' >
            <header className={`border-b-4 border-b-myColor mb-20 
            agatho`}>
                <h2 className="text-3xl md:text-7xl uppercase">{Category.title}&apos;s Detail</h2>
            </header>
            <div className='flex flex-col max-w-md mx-auto my-10'>

                <div className="collapse collapse-arrow mb-5 bg-myColor">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Update Category
                    </div>
                    <div className="collapse-content">
                        <CategoryUpdateForm Category={Category} />
                    </div>
                </div>
                <div className="collapse bg-myColor2 collapse-arrow mb-3">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Add New Service
                    </div>
                    <div className="collapse-content">
                        <form action={addService}>
                            <input type="text" name='name' className='input w-full my-2' placeholder='Name of sub service' />
                            <input type="hidden" name="categoryId" value={Category.id} />
                            <button type="submit" className='btn w-full btn-success my-2'>Add</button>
                        </form>
                    </div>
                </div>
                {
                    Category.Service.length > 0
                        ? <p className='text-myColor agatho text-center text-3xl'>All Services</p>
                        : <p className='text-myColor agatho text-center text-3xl'>No Services</p>
                }

                {
                    Category.Service.map((s, i) => (

                        <div key={i} className="collapse my-2 collapse-plus bg-myColor">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium text-white capitalize" >
                                {s.name}
                            </div>
                            <div className="collapse-content ">
                                {
                                    s.SubService.map((ss, ii) => (
                                        <ul className='mb-2 w-full capitalize' key={ii}>
                                            <li className='w-full flex justify-between items-center capitalize'><p className="w-[40%]">{ss.name}</p> <p className="w-[40%]">{ss.price}</p>
                                                <div className='w-[20%] '>
                                                    <form action={deleteSubService}>
                                                        <input type="hidden" name="id" value={s.id} />
                                                        <input type="hidden" name="name" value={ss.name} />
                                                        <button type="submit" className='btn btn-xs btn-error'>Delete</button>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    ))
                                }
                                <li>
                                    <div className="collapse bg-transparent collapse-arrow bg-myColor2">
                                        <input type="checkbox" />
                                        <div className="collapse-title  font-medium">
                                            Add New Sub Service
                                        </div>
                                        <div className="collapse-content">
                                            <form action={addSubService} className='flex flex-col'>
                                                <div className="flex justify-evenly">

                                                    <input type="text" name='name' className='input w-[45%] my-2 bg-transparent border-myColor' placeholder="Name of sub service's Service" />
                                                    <input type="number" name='price' className='input w-[45%] my-2 bg-transparent border-myColor' placeholder="Price of sub service's Service" />
                                                </div>
                                                <input type="hidden" name="serviceId" value={s.id} />
                                                <button type="submit" className='btn w-full btn-success my-2'>Add</button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <form action={deleteService}>
                                        <input type="hidden" name="id" value={s.id} />
                                        <button type="submit" className='btn btn-error w-full'>Delete {s.name}</button>
                                    </form>
                                </li>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default CategoryDetail