export interface Place{
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    rating: number;
    reviewsNumber: number;
    currentPrice: number;
    oldPrice?: number;
    rooms: number;
    duration: string;
    discount?: string;
    promotion?: string;
}   