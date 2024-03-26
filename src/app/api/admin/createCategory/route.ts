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