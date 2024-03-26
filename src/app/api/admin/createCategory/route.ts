import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const body = await req.json();
    const { title, image, description } = body
    if (!(title || image || description)) {
        return NextResponse.json({ message: "All fields are mandatory ! ", ok: false }, { status: 400 })
    }
    try {
        const newCategory = await prisma.category.create({
            data: {
                description,
                image,
                title
            }
        })
        if (!newCategory) {
            return NextResponse.json({ message: "Unexpected Error occurred ! ", ok: false }, { status: 500 })
        }
        return NextResponse.json({ message: "Category created successfully ! ", ok: true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Unexpected Error occurred ! ", ok: false }, { status: 500 })

    }
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    // console.log(body.changedFields);

    const changedFields: { title: boolean, image: boolean, description: boolean } = body.changedFields;

    try {
        if (changedFields.image) {
            const { title, image, description, id } = body;
            const updatedCategory = await prisma.category.update({
                where: { id },
                data: { title, image, description }
            })
            // console.log('success');

            return NextResponse.json({ message: "Category updated successfully ! ", ok: true }, { status: 200 })
        } else {
            const { title, description, id } = body;
            const updatedCategory = await prisma.category.update({
                where: { id },
                data: { title, description }
            })
            // console.log('success');

            return NextResponse.json({ updatedCategory, message: "Category updated successfully ! ", ok: true }, { status: 200 })
        }
    } catch (error) {
        // console.log(error);

        return NextResponse.json({ message: "Unexpected Error occurred ! ", ok: false }, { status: 500 })

    }


}