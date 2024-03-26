"use server"

import * as bcrypt from 'bcrypt'
import prisma from './prisma'
import { revalidatePath } from 'next/cache'



export async function signUp(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {


        if (!(username || password)) {
            return { message: "username or password missing ! ", ok: false }
        }
        const protectedPassword = await bcrypt.hash(password, 10)


        const user = await prisma.user.create({
            data: {
                username,
                password: protectedPassword
            }
        })
        if (!user) {
            return { message: "Error while creating new user ! ", ok: false }
        }
        return { message: "New user created successfully ! ", ok: true }
    } catch (error) {
        return { message: "Error while creating new user ! ", ok: false }

    }

}

export async function revalidate() {
    try {
        revalidatePath('/service')
        return true
    } catch (error) {
        return { message: "Field is missing !", ok: false }
    }
}

export async function fetchAllCategories() {
    try {
        const categories = await prisma.category.findMany();
        revalidatePath('/');
        return categories
    } catch (error) {
        console.log(error);
    }
}

export async function addCatogory(formData: FormData) {
    const title = formData.get('title') as string
    const image = formData.get('image') as string
    const description = formData.get('description') as string

    if (!(title || image || description)) {
        return { message: "Field is missing !", ok: false }
    }

    try {
        const category = await prisma.category.create({
            data: {
                title,
                description,
                image
            }
        })
        if (!category) {
            return { message: "Category Creation failed !", ok: false }
        }
        revalidatePath('/')
        return { message: "Category Creation Successful !", ok: true }

    } catch (error) {
        return { message: "Category Creation failed !", ok: false }

    }
}

export async function addService(formData: FormData) {
    const name = formData.get('name') as string
    const categoryId = formData.get('categoryId') as string

    if (!(name || categoryId)) {

        return { message: "Field is missing !", ok: false }
    }
    try {


        const newService = await prisma.service.create({
            data: {
                name,
                categoryId,
            }
        })
        revalidatePath('/')
        return { message: "Sub Service added Successfully !", ok: true }
    } catch (error) {
        return { message: "Server Error !", ok: false }

    }
}

export async function addSubService(formData: FormData) {
    const name = formData.get('name') as string
    const priceStr = formData.get('price') as string
    const serviceId = formData.get('serviceId') as string
    const price = parseInt(priceStr)
    try {
        const service = await prisma.service.findUnique({
            where: {
                id: serviceId
            }
        })
        let subService = service?.SubService
        if (subService) {
            for (let i = 0; i < subService.length; i++) {
                if (subService[i].name == name) {
                    return { message: "Already Exists !", ok: false }
                }

            }
        }

        subService?.push({ name, price })

        const updatedService = await prisma.service.update({
            where: {
                id: serviceId
            },
            data: {
                SubService: subService
            }
        })

        revalidatePath('/')
        return { message: "Creation Successful!", ok: true }
    } catch (error) {
        console.log(error);

        return { message: "Server Error!", ok: false }
    }
}


export async function deleteCategory(formData: FormData) {
    const id = formData.get("id") as string
    if (!id) {
        return { message: "Something went wrong!", ok: false }
    }

    try {
        const deletedServices = await prisma.service.deleteMany({
            where: {
                categoryId: id
            }
        })
        const deletedCategory = await prisma.category.delete({
            where: {
                id
            },
        })
        revalidatePath("/")
        return { message: "Category deleted successfully!", ok: true }

    } catch (error) {
        return { message: "Something went wrong!", ok: false }

    }
}

export async function deleteService(formData: FormData) {
    const id = formData.get("id") as string
    if (!id) {
        return { message: "Something went wrong!", ok: false }
    }
    try {


        const deletedService = await prisma.service.delete({
            where: {
                id
            }
        })
        revalidatePath("/")
        return { message: "Service Deleted Successfully!", ok: true }

    } catch (error) {
        return { message: "Something went wrong!", ok: false }

    }
}

export async function deleteSubService(formData: FormData) {
    const id = formData.get("id") as string
    const name = formData.get("name") as string
    if (!(id || name)) {
        return { message: "Something went wrong!", ok: false }
    }

    try {


        const service = await prisma.service.findUnique({
            where: { id }
        })

        let subService = service?.SubService;

        const newSub = subService?.filter((sub) => {
            if (sub.name != name) {
                return sub
            }
        })
        const updatedService = await prisma.service.update({
            where: { id },
            data: {
                SubService: newSub
            }
        })
        revalidatePath('/')
        return { message: "Sub Service Deleted Successfully!", ok: true }

    } catch (error) {
        return { message: "Something went wrong!", ok: false }

    }
}