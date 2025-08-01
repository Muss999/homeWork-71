import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    selectDeleteOrderFetching,
    selectGetOrdersFetching,
    selectOrders,
} from "../../store/orderSlice";
import { deleteOrder, getOrders } from "../../store/orderThunk";
import Spinner from "../../components/Spinner/Spinner";
import OrderItem from "./OrderItem";
import { selectDishes } from "../../store/dishesSlice";
import { getDishes } from "../../store/dishesThunk";

const OrdersList = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(selectOrders);
    const dishes = useAppSelector(selectDishes);
    const fetchLoading = useAppSelector(selectGetOrdersFetching);
    const deleteLoading = useAppSelector(selectDeleteOrderFetching);

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getDishes());
    }, [dispatch]);

    const removeOrder = async (id: string) => {
        await dispatch(deleteOrder(id));
        await dispatch(getOrders());
        await dispatch(getDishes());
    };

    return (
        <>
            {fetchLoading ? (
                <Spinner />
            ) : orders.length > 0 ? (
                <div className="d-flex w-100 flex-wrap">
                    {orders.map((order) => (
                        <OrderItem
                            order={order}
                            dishes={dishes}
                            removeOrder={() => removeOrder(order.id)}
                            deleteLoading={deleteLoading}
                            key={order.id}
                        />
                    ))}
                </div>
            ) : (
                <div className="alert alert-warning">Orders are empty!</div>
            )}
        </>
    );
};

export default OrdersList;
