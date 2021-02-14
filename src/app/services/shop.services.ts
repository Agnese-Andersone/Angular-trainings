import { Injectable } from "@angular/core";

@Injectable ()
export class ShopService {
    public items: ShopItem[];
    public cart: ShopItem[] = [];

    constructor(){
        this.createTestProducts();
    }
    public addProductToCart(item: ShopItem) {
        this.cart.push(item);

    }


    private createTestProducts() {
        this.items = [
        {
            id: 1,
            name: 'olas',
            price: 2.00,
            description: 'lauku'
        },
        {
            id: 2,
            name: 'maize',
            price: 0.80,
            description: 'rudzu'
        },
        {
            id: 3,
            name: 'piens',
            price: 1.50,
            description: 'trekns'
        },
        {
            id: 4,
            name: 'sviests',
            price: 1.40,
            description: '82%'
        },
        {
            id: 5,
            name: 'krējums',
            price: 1.10,
            description: '15%'
        },
        {
            id: 6,
            name: 'kefīrs',
            price: 0.90,
            description: '2.5%'
        },
        ];
    }
}
export interface ShopItem {
    id: number;
    name: string;
    price: number;
    description: string;
}