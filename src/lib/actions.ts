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

export async function testService(url: string) {
    console.log('serverAction');
    console.log(url);


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