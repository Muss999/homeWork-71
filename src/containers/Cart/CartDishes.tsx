import CartItem from "./CartItem.tsx";
import type { TypeCartDish } from "../../types";
import type { FC } from "react";
import { DELIVERY_COST } from "../../helpers/consts.ts";

interface Props {
    cartDishes: TypeCartDish[];
    cartTotalCost: number;
}

const CartDishes: FC<Props> = ({ cartDishes, cartTotalCost }) => {
    return (
        <>
            {cartDishes.map((cartDish) => (
                <CartItem key={cartDish.dish.id} cartDish={cartDish} />
            ))}
            <div className="card mb-2 p-2">
                <div className="row align-items-center">
                    <div className="col">Delivery:</div>
                    <div className="col-3 text-right">{DELIVERY_COST} KGS</div>
                </div>
            </div>
            <div className="card border-0 p-2">
                <div className="row">
                    <div className="col text-right">Total:</div>
                    <div className="col-3 text-right">
                        <strong>{cartTotalCost}</strong> KGS
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDishes;
