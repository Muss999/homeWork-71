import Modal from "../../components/Modal/Modal.tsx";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { clearCart, selectCartDishes } from "../../store/cartSlice.ts";
import CartDishes from "./CartDishes.tsx";
import { DELIVERY_COST } from "../../helpers/consts.ts";
import type { TypeOrder } from "../../types";
import { addOrder } from "../../store/cartThunk.ts";

const Cart = () => {
    const cartDishes = useAppSelector(selectCartDishes);
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);

    const onCloseModal = () => setShowModal(false);
    const cartCost = cartDishes.reduce((acc, value) => {
        return acc + value.dish.price * value.amount;
    }, 0);

    const cartTotalCost = cartCost + DELIVERY_COST;

    let cart = <p className="mb-3">Order Total: {cartCost} KGS</p>;

    if (cartDishes.length > 0) {
        cart = (
            <>
                <div className="mb-3 d-flex align-items-center gap-3">
                    <p className="m-0">Order Total: {cartTotalCost} KGS</p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setShowModal(true)}
                    >
                        Checkout
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            {cart}
            <Modal show={showModal} title="Your Order">
                <div className="modal-body">
                    <CartDishes
                        cartDishes={cartDishes}
                        cartTotalCost={cartTotalCost}
                    />
                </div>
                <div className="modal-footer">
                    <button className="btn btn-danger" onClick={onCloseModal}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            const order: TypeOrder = cartDishes.reduce(
                                (acc, cartDish) => {
                                    acc[cartDish.dish.id] = cartDish.amount;
                                    return acc;
                                },
                                {} as TypeOrder
                            );
                            dispatch(addOrder(order));
                            dispatch(clearCart());
                            onCloseModal();
                        }}
                    >
                        Order
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Cart;
