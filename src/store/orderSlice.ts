import { createSlice } from "@reduxjs/toolkit";
import { deleteOrder, getOrders } from "./orderThunk";
import type { TypeOrderMutation } from "../types";
interface CartState {
    items: TypeOrderMutation[];
    getOrdersFetching: boolean;
    deleteOrderFetching: boolean | string;
}

const initialState: CartState = {
    items: [],
    getOrdersFetching: false,
    deleteOrderFetching: false,
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state) => {
                state.getOrdersFetching = true;
            })
            .addCase(getOrders.fulfilled, (state, { payload: orders }) => {
                state.getOrdersFetching = false;
                state.items = orders;
            })
            .addCase(getOrders.rejected, (state) => {
                state.getOrdersFetching = false;
            });

        builder
            .addCase(deleteOrder.pending, (state, { meta }) => {
                state.deleteOrderFetching = meta.arg;
            })
            .addCase(deleteOrder.fulfilled, (state) => {
                state.deleteOrderFetching = false;
            })
            .addCase(deleteOrder.rejected, (state) => {
                state.deleteOrderFetching = false;
            });
    },
    selectors: {
        selectOrders: (state) => state.items,
        selectGetOrdersFetching: (state) => state.getOrdersFetching,
        selectDeleteOrderFetching: (state) => state.deleteOrderFetching,
    },
});

export const ordersReducer = ordersSlice.reducer;

export const {
    selectOrders,
    selectGetOrdersFetching,
    selectDeleteOrderFetching,
} = ordersSlice.selectors;
