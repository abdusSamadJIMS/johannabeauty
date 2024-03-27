import { addService, addSubService, deleteService, deleteSubService, fetchUniqueCategory } from '@/lib/actions';
import prisma from '@/lib/prisma'
import Image from 'next/image';
import { redirect } from 'next/navigation'
import React from 'react'
import CategoryUpdateForm from './CategoryUpdateForm';
import AddServiceForm from './AddServiceForm';
import DeleteServiceForm from './DeleteServiceForm';
import { BiClipboard, BiNotepad } from 'react-icons/bi';
import UpdateServiceForm from './UpdateServiceForm';
import DeleteSubServiceForm from './DeleteSubServiceForm';
import AddSubServiceForm from './AddSubServiceForm';
import UpdateSubServiceForm from './UpdateSubServiceForm';

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
                        <AddServiceForm id={Category.id} />
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
                                                <div className=' w-[20%] flex '>
                                                    <UpdateSubServiceForm oldName={ss.name} id={s.id} oldPrice={ss.price} />
                                                    <DeleteSubServiceForm id={s.id} name={ss.name} />

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
                                            <AddSubServiceForm id={s.id} />
                                        </div>
                                    </div>
                                </li>
                                <li className='list-none flex items-center gap-5'>
                                    {/*  */}
                                    <UpdateServiceForm id={s.id} name={s.name} />
                                    <DeleteServiceForm id={s.id} name={s.name} />
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