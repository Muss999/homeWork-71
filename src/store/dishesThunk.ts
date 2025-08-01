import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TypeDishesList, TypeDishMutation } from "../types";
import axiosApi from "../axiosApi";

export const getDishes = createAsyncThunk<TypeDishMutation[]>(
    "dishes/get",
    async () => {
        const { data } = await axiosApi<TypeDishesList | null>(
            "/dishes/allDishes.json"
        );
        let newDishes: TypeDishMutation[] = [];
        if (data) {
            newDishes = Object.keys(data).map((key) => ({
                ...data[key],
                id: key,
            }));
        }
        return newDishes;
    }
);
