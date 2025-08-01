import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TypeDish, TypeDishesList, TypeDishMutation } from "../types";
import axiosApi from "../axiosApi";

interface editDishParams {
    id: string;
    dish: TypeDish;
}

export const getDishes = createAsyncThunk<TypeDishMutation[]>(
    "allDishes/get",
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
export const addDish = createAsyncThunk<void, TypeDish>(
    "allDishes/add",
    async (apiDish) => {
        await axiosApi.post("/dishes/allDishes.json", apiDish);
    }
);

export const editDishThunk = createAsyncThunk<void, editDishParams>(
    "allDishes/edit",
    async ({ id, dish }) => {
        await axiosApi.put(`/dishes/allDishes/${id}.json`, dish);
    }
);

export const fetchOneDish = createAsyncThunk<TypeDish, string>(
    "allDishes/fetchOne",
    async (id) => {
        const { data: dish } = await axiosApi<TypeDish | null>(
            `/dishes/allDishes/${id}.json`
        );

        if (!dish) {
            throw new Error("Not found");
        }

        return dish;
    }
);

export const deleteDish = createAsyncThunk<void, string>(
    "allDishes/delete",
    async (id) => {
        await axiosApi.delete(`/dishes/allDishes/${id}.json`);
    }
);
