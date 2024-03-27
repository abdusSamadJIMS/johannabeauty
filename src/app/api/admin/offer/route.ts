import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { image } = body;
    if (!image) {
        return NextResponse.json({ message: "Image Url Not Found ! ", ok: false }, { status: 400 })
    }
    try {
        const offer = await prisma.offer.create({
            data: { image }
        })
        if (!offer) {
            return NextResponse.json({ message: "Something went wrong! ", ok: false }, { status: 500 })
        }
        return NextResponse.json({ message: "Offer Added ", ok: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong! ", ok: false }, { status: 500 })

    }
}