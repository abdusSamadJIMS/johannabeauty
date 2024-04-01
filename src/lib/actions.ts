"use server"

import * as bcrypt from 'bcrypt'
import prisma from './prisma'
import { revalidatePath } from 'next/cache'
import { backendClient } from './edgestore-server'
import { Options } from 'nodemailer/lib/sendmail-transport'
import { transporter } from './transporter'
import optionGenerator from './userMailOption'



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
export async function revalidate2() {
    try {
        revalidatePath('/service/[id]')
        return true
    } catch (error) {
        return { message: "Field is missing !", ok: false }
    }
}

export async function fetchAllCategories() {
    try {
        const categories = await prisma.category.findMany({ include: { Service: true } });
        revalidatePath('/');
        return categories
    } catch (error) {
        // console.log(error);
    }
}
export async function fetchAllCategoriesWithoutRevalidate() {
    try {
        const categories = await prisma.category.findMany({ include: { Service: true } });
        return categories
    } catch (error) {
        // console.log(error);
    }
}

export async function fetchUniqueCategory(id: string) {
    try {
        const Category = await prisma.category.findUnique({
            where: {
                id
            },
            include: {
                Service: true
            }
        })
        revalidatePath('/');
        return Category;
    } catch (error) {

    }
}

// export async function fetchAllServices() {
//     try {
//         const services = await prisma.service.findMany({})
//     } catch (error) {

//     }
// }

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
        return { message: "Service added Successfully !", ok: true }
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
        // console.log(error);

        return { message: "Server Error!", ok: false }
    }
}


export async function deleteCategory(formData: FormData) {
    const id = formData.get("id") as string
    const image = formData.get("image") as string
    if (!id) {
        return { message: "Something went wrong!", ok: false }
    }



    try {

        const res = await backendClient.publicFiles.deleteFile({
            url: image
        })
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


export async function updateService(formData: FormData) {
    const id = formData.get("id") as string
    const name = formData.get("name") as string

    if (!(id || name)) {
        return { message: "Something went wrong !", ok: false }
    }
    try {
        const updatedService = await prisma.service.update({
            where: { id },
            data: { name }
        })
        if (!updateService) {
            return { message: "Something went wrong !", ok: false }
        }
        revalidatePath('/')
        return { message: "Service updated successfully !", ok: true }

    } catch (error) {
        return { message: "Something went wrong !", ok: false }

    }
}

export async function updateSubService(formData: FormData) {
    const id = formData.get('id') as string
    const oldName = formData.get('oldName') as string
    const name = formData.get('name') as string
    const priceStr = formData.get('price') as string
    const price = parseInt(priceStr)
    console.log("oldName:", oldName);
    console.log("name:", name);


    if (!(id || name || priceStr)) {
        return { message: "Something went wrong !", ok: false }
    }
    try {
        const service = await prisma.service.findUnique({ where: { id } })
        const subServices = service?.SubService;
        let newSubServices;
        if (subServices) {
            newSubServices = subServices?.map(obj => {
                if (obj.name.trim() === oldName.trim()) {

                    return { ...obj, name, price };
                } else
                    return obj;
            });
        }

        const updatedService = await prisma.service.update({
            where: { id },
            data: {
                SubService: newSubServices
            }
        })
        revalidatePath("/")
        return { message: "Sub Service Updated Successfully !", ok: true }
    } catch (error) {
        return { message: "Something went wrong !", ok: false }
    }
}


export async function fetchContactInfo() {
    try {
        const contactInfo = await prisma.contactInfo.findFirst({});
        revalidatePath('/')
        return contactInfo
    } catch (error) {
        console.log(error);
    }
}
export async function fetchContactInfoWithoutRevalidate() {
    try {
        const contactInfo = await prisma.contactInfo.findFirst({});
        return contactInfo
    } catch (error) {
        console.log(error);
    }
}

export async function updateContactInfo(formData: FormData) {
    const id = formData.get("id") as string
    const whatsApp = formData.get("whatsApp") as string
    const instagram = formData.get("instagram") as string
    const phoneNumber = formData.get("phoneNumber") as string
    const mailId = formData.get("mailId") as string

    if (!(id || whatsApp || instagram || phoneNumber || mailId)) {
        return { message: "Something went wrong", ok: false }
    }

    try {
        const updatedContactInfo = await prisma.contactInfo.update({
            where: { id },
            data: {
                instagram, mailId, phoneNumber, whatsApp
            }
        })
        revalidatePath('/')
        return { message: "Update Successfully", ok: true }

    } catch (error) {
        console.log(error);

        return { message: "Something went wrong", ok: false }

    }
}

export async function fetchAllOffers() {
    try {
        const offers = await prisma.offer.findMany();
        revalidatePath("/");
        return offers;
    } catch (error) {

    }
}
export async function fetchAllOffersWithoutRevalidate() {
    try {
        const offers = await prisma.offer.findMany();
        return offers;
    } catch (error) {

    }
}

export async function deleteOffer(formData: FormData) {
    const id = formData.get('id') as string
    const image = formData.get('image') as string

    if (!(id || image)) {
        return { message: "All fields are required", ok: false }
    }

    try {
        const res = await backendClient.publicFiles.deleteFile({
            url: image
        })
        const deletedOffer = await prisma.offer.delete({ where: { id } })
        revalidatePath("/")
        return { message: "Deleted successfully", ok: true }

    } catch (error) {
        return { message: "Something went wrong", ok: false }

    }
}

export async function fetchAllWork() {
    try {
        const works = await prisma.work.findMany({
            where: {
                NOT: [
                    { name: "Timing-2-About" },
                    { name: "Timing-1-About" },
                    { name: "Founder-About" },
                    { name: "Hero-Image-About" },
                    { name: "About-Home" },
                    { name: "Hero-Image-Desktop" },
                    { name: "SALON-IMAGE-NUMBER-1" },
                    { name: "SALON-IMAGE-NUMBER-2" },
                    { name: "SALON-IMAGE-NUMBER-3" },
                    { name: "SALON-IMAGE-NUMBER-4" },
                    { name: "SALON-IMAGE-NUMBER-5" },
                    { name: "SALON-IMAGE-NUMBER-6" },
                    { name: "SALON-IMAGE-NUMBER-7" },
                ]
            }
        });
        fetchAboutTimingImages()
        revalidatePath("/");
        return works;
    } catch (error) {

    }
}
export async function fetchAllWorkWithoutRevalidate() {
    try {
        const works = await prisma.work.findMany({
            where: {
                NOT: [
                    { name: "Timing-2-About" },
                    { name: "Timing-1-About" },
                    { name: "Founder-About" },
                    { name: "Hero-Image-About" },
                    { name: "About-Home" },
                    { name: "Hero-Image-Desktop" },
                    { name: "SALON-IMAGE-NUMBER-1" },
                    { name: "SALON-IMAGE-NUMBER-2" },
                    { name: "SALON-IMAGE-NUMBER-3" },
                    { name: "SALON-IMAGE-NUMBER-4" },
                    { name: "SALON-IMAGE-NUMBER-5" },
                    { name: "SALON-IMAGE-NUMBER-6" },
                    { name: "SALON-IMAGE-NUMBER-7" },
                ]
            }
        });
        fetchAboutTimingImages()
        return works;
    } catch (error) {

    }
}


export async function fetchHeroImage() {
    const data = await prisma.work.findMany({ where: { name: "Hero-Image-Desktop" } })
    return data[0];
}
export async function fetchHomeAboutImage() {
    const data = await prisma.work.findMany({ where: { name: "About-Home" } })
    return data[0];
}
export async function fetchAboutHeroImage() {
    const data = await prisma.work.findMany({ where: { name: "Hero-Image-About" } })
    return data[0];
}
export async function fetchAboutFounderImage() {
    const data = await prisma.work.findMany({ where: { name: "Founder-About" } })
    return data[0];
}
export async function fetchAboutTimingImages() {
    const data = await prisma.work.findMany({
        where: {
            OR: [
                { name: "Timing-2-About" },
                { name: "Timing-1-About" },
            ]
        }
    })
    return data

}
export async function deleteWork(formData: FormData) {
    const id = formData.get("id") as string
    const fileUrl = formData.get("image") as string

    if (!id) {
        return { message: "Something went wrong", ok: false }
    }
    try {
        const res = await backendClient.publicFiles.deleteFile({
            url: fileUrl,
        });
        const deletedWork = await prisma.work.delete({ where: { id } })
        if (!deleteWork) {
            return { message: "Something went wrong", ok: false }

        }
        revalidatePath('/')
        return { message: "Deleted Successfully", ok: true }

    } catch (error) {
        return { message: "Something went wrong", ok: false }

    }
}

export async function getPhoneOnly() {
    try {
        const data = await prisma.contactInfo.findFirst({ select: { phoneNumber: true } })
        return data?.phoneNumber
    } catch (error) {
        console.log(error);

    }
}


export async function sendQuery(formData: FormData) {
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const query = formData.get("query") as string
    const email = formData.get("email") as string

    if (!(name || phone || query || email)) {
        return { message: "Please fill all the fields ! ", ok: false }
    }
    try {
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: ["samadmalik04@gmail.com"],
            subject: "New Query !",
            text: "",
            html: `<div style="text-align: center;">
            <strong>From:&nbsp;</strong>${name}
            <br>
          </div>
          <div style="text-align: center;">
            <strong>Phone Number:&nbsp;</strong>${phone}
            <br>
            <strong>Email Address:&nbsp;</strong>${email}
            <br>
            <br>
            <a href="tell:${phone}" target="_blank" class="cloudHQ__gmail_elements_final_btn" style="background-color: #9d5836; color: #ffffff; border: 0px solid #000000; border-radius: 3px; box-sizing: border-box; font-size: 13px; font-weight: bold; line-height: 40px; padding: 12px 24px; text-align: center; text-decoration: none; text-transform: uppercase; vertical-align: middle;" rel="noopener">Call ${name}</a> 
            <br>
            <br>
          </div>
          <div style="text-align: center;">
            <span style="font-size: 14pt;">
              <strong>Query:&nbsp;</strong>${query} 
              <br>
              <br>
              <br>
            </span>
          </div>
          `

        }
        let success = true;
        await new Promise((res, rej) => {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                    rej(err)
                    success = false
                } else {
                    res(info)
                }
            })
        })

        const mailOptions2 = optionGenerator({ userMail: email, userName: name })

        await new Promise((res, rej) => {
            transporter.sendMail(mailOptions2, (err, info) => {
                if (err) {
                    rej(err)
                    console.log(err);
                } else {
                    res(info)
                }
            })
        })
        if (success) {
            return { message: "Your query has been send successfully ", ok: true }
        } else {
            return { message: "Internal Server Error ! ", ok: false }
        }




    } catch (error) {
        return { message: "Please fill all the fields ! ", ok: false }
    }
}


export async function fetchAllSalonImages() {
    const data = await prisma.work.findMany({
        where: {
            OR: [
                { name: "SALON-IMAGE-NUMBER-1" },
                { name: "SALON-IMAGE-NUMBER-2" },
                { name: "SALON-IMAGE-NUMBER-3" },
                { name: "SALON-IMAGE-NUMBER-4" },
                { name: "SALON-IMAGE-NUMBER-5" },
                { name: "SALON-IMAGE-NUMBER-6" },
                { name: "SALON-IMAGE-NUMBER-7" },
            ]
        }
    })
    return data
}