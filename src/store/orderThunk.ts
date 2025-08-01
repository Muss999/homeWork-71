import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TypeOrder, TypeOrderMutation, TypeOrdersList } from "../types";
import axiosApi from "../axiosApi";

export const getOrders = createAsyncThunk<TypeOrderMutation[]>(
    "orders/get",
    async () => {
        const { data } = await axiosApi.get<TypeOrdersList | null>(
            "/dishes/orders.json"
        );
        if (!data) return [];
        return Object.entries(data).map(([id, order]) => ({
            id,
            order,
        }));
    }
);

export const addOrder = createAsyncThunk<void, TypeOrder>(
    "orders/add",
    async (orderData) => {
        await axiosApi.post("/dishes/orders.json", orderData);
    }
);

export const deleteOrder = createAsyncThunk<void, string>(
    "orders/delete",
    async (id) => {
        await axiosApi.delete(`/dishes/orders/${id}.json`);
    }
);
