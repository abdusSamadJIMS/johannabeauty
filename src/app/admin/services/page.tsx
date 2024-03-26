import CategoryAddForm from '@/components/CategoryAddForm';
import CategoryTable from '@/components/CategoryTable';
import prisma from '@/lib/prisma'

const AdminServicesPage = async () => {
    const data = await prisma.category.findMany({});
    return (
        <div className='mt-10'>
            <header className={`border-b-4 border-b-myColor mb-20 
            agatho`}>
                <h2 className="text-3xl md:text-7xl uppercase">Service Categories</h2>
            </header>
            <div className='w-full my-10'>

                <CategoryAddForm />
            </div>
            <CategoryTable data={data} />
        </div>
    )
}

export default AdminServicesPage