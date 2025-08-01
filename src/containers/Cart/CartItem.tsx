import type { TypeCartDish } from "../../types";

interface Props {
    cartDish: TypeCartDish;
}

const CartItem = ({ cartDish }: Props) => {
    const price = cartDish.dish.price * cartDish.amount;

    return (
        <div className="card mb-2 p-2">
            <div className="row align-items-center">
                <div className="col">{cartDish.dish.name}</div>
                <div className="col-2">x{cartDish.amount}</div>
                <div className="col-3 text-right">{price} KGS</div>
            </div>
        </div>
    );
};

export default CartItem;
