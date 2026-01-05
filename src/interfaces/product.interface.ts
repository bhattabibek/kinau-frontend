import type { baseInitialStateI } from "./baseInitialState.interface";

export interface productI {
    isWeeklyDeals: boolean;
    isBestSeller: boolean;
    _id: string;
    name: string;
    description: string;
    category: {
        _id: string;
        name: string;
        slug: string;
        id: string;
    };
    basePrice: number;
    variants: any[];
    mainImages: string[];
    tags: string[];
    isActive: boolean;
    isFeatured: boolean;
    createdAt: Date | string;
    updatedAt: Date | string;
    slug: string;
    totalStock: number;
    priceRange: {
        min: number;
        max: number;
    };
    id: string;
    price?: number;
}

export interface SizeI extends baseInitialStateI {
    _id: string;
    name: string;
    code: string;
    description: string;
}

export interface ColorI extends baseInitialStateI {
    _id: string;
    name: string;
    hexCode: string;
    description: string;
}