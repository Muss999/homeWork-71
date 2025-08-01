import type { MouseEventHandler } from "react";
import { DELIVERY_COST } from "../../helpers/consts";
import type { TypeDishMutation, TypeOrderMutation } from "../../types";
import SpinnerButton from "../../components/Spinner/SpinnerButton";

interface Props {
    order: TypeOrderMutation;
    dishes: TypeDishMutation[];
    deleteLoading: boolean | string;
    removeOrder: MouseEventHandler;
}

const OrderItem = ({ order, dishes, removeOrder, deleteLoading }: Props) => {
    const entries = Object.entries(order.order);

    const totalDishPrice = entries.reduce((total, [dishId, amount]) => {
        const dish = dishes.find((d) => d.id === dishId);
        if (!dish) return total;
        return total + dish.price * amount;
    }, 0);
    const totalCost = totalDishPrice + DELIVERY_COST;
    return (
        <div className="d-flex justify-content-between border p-3 my-2 rounded w-100">
            <div className="col-8">
                {entries.map(([dishId, amount]) => {
                    const dish = dishes.find((d) => d.id === dishId);
                    if (!dish) return null;
                    return (
                        <div
                            className="row align-items-center col-12"
                            key={dishId}
                        >
                            <div className="col-6">
                                x{amount} {dish.name}
                            </div>
                            <div className="col-6 text-center">
                                {dish.price} KGS
                            </div>
                        </div>
                    );
                })}

                <div className="row align-items-center col-12">
                    <div className="col-6">Delivery:</div>
                    <div className="col-6 text-center">{DELIVERY_COST} KGS</div>
                </div>
            </div>
            <div className="d-flex flex-column gap-2 align-items-end">
                <p className="m-0">Order Total:</p>
                <p className="m-0">{totalCost} KGS</p>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={removeOrder}
                    disabled={
                        deleteLoading ? deleteLoading === order.id : false
                    }
                >
                    {deleteLoading && deleteLoading === order.id && (
                        <SpinnerButton />
                    )}
                    Complete Order
                </button>
            </div>
        </div>
    );
};

export default OrderItem;
