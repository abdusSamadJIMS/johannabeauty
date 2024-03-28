import { StaticImageData } from "next/image";

type SubService = {
    name: string;
    price: number;
};

type Service = {
    id: string;
    name: string;
    categoryId: string | null;
    createdAt: Date;
    updatedAt: Date;
    SubService: SubService[];
};

type Category = {
    Service: Service[];
    id: string;
    title: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
};

export type Categories = Category[];

export type colType = {
    id: string | undefined,
    image: string | StaticImageData,
    name: string,
    createdAt: Date | undefined
}