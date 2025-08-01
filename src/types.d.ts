export interface TypeDish {
    name: string;
    price: number;
    image: string;
}
export interface TypeDishMutation extends TypeDish {
    id: string;
}
export interface TypeDishesList {
    [id: string]: TypeDish;
}
