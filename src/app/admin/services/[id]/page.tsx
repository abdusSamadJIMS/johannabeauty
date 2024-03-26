import { addService, addSubService } from '@/lib/actions';
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const CategoryDetail = async ({ params }: { params: { id: string } }) => {

    const byteSize = (str: string) => new Blob([str]).size;
    if (!(byteSize(params.id) == 24)) redirect("/admin/services")

    const Category = await prisma.category.findUnique({
        where: {
            id: params.id
        },
        include: {
            Service: true
        }
    })

    let subService;

    if (!Category) {
        redirect("/admin/services")
    }
    return (
        <div className='flex flex-col max-w-md mx-auto my-10'>
            <div className="collapse collapse-arrow mb-5 bg-myColor">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Update Category
                </div>
                <div className="collapse-content">
                    <form action="" className='flex flex-col'>
                        <input type="text" name="title" id="title" defaultValue={Category.title} placeholder='Title' className='input border-black mb-3 text-white' />
                        <input type="text" name="image" id="image" defaultValue={Category.image} placeholder='Image' className='input border-black mb-3 text-white' />
                        <textarea name="description" id="description" defaultValue={Category.description} placeholder='Title' className='textarea border-black mb-3 text-white' />
                        <button type="submit" className='btn'>Update</button>
                    </form>
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
                        <div className="collapse-title text-xl font-medium capitalize" >
                            {s.name}
                        </div>
                        <div className="collapse-content ">
                            {
                                s.SubService.map((ss, ii) => (
                                    <ul className='mb-2 w-full capitalize' key={ii}>
                                        <li className='w-full flex justify-between capitalize'><p className="">{ss.name}</p> <p className="">{ss.price}</p></li>
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
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryDetail