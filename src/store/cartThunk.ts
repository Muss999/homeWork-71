import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TypeOrder } from "../types";
import axiosApi from "../axiosApi";

export const addOrder = createAsyncThunk<void, TypeOrder>(
    "orders/add",
    async (orderData) => {
        await axiosApi.post("/dishes/orders.json", orderData);
    }
);
