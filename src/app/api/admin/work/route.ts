import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { image, name } = body;
    if (!image || !name) {
        return NextResponse.json({ message: "All fields are Not Found ! ", ok: false }, { status: 400 })
    }
    try {
        const offer = await prisma.work.create({
            data: { image, name }
        })
        if (!offer) {
            return NextResponse.json({ message: "Something went wrong! ", ok: false }, { status: 500 })
        }
        return NextResponse.json({ message: "Offer Added ", ok: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong! ", ok: false }, { status: 500 })

    }
}