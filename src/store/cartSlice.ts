import type { TypeCartDish, TypeDishMutation } from "../types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { addOrder } from "./cartThunk";

interface CartState {
    cartDishes: TypeCartDish[];
    addOrderFetching: boolean;
}

const initialState: CartState = {
    cartDishes: [],
    addOrderFetching: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addDish: (
            state,
            { payload: dish }: PayloadAction<TypeDishMutation>
        ) => {
            const index = state.cartDishes.findIndex(
                (cartDish) => cartDish.dish.id === dish.id
            );

            if (index !== -1) {
                state.cartDishes[index].amount++;
            } else {
                state.cartDishes.push({
                    dish,
                    amount: 1,
                });
            }
        },
        clearCart: (state) => {
            state.cartDishes = [];
        },
        updateCart: (
            state,
            { payload: dishes }: PayloadAction<TypeDishMutation[]>
        ) => {
            const newCartDishes: TypeCartDish[] = [];
            state.cartDishes.forEach((cartDish) => {
                const existingDish = dishes.find(
                    (dish) => cartDish.dish.id === dish.id
                );

                if (!existingDish) {
                    return;
                }

                newCartDishes.push({
                    ...cartDish,
                    dish: existingDish,
                });
            });

            state.cartDishes = newCartDishes;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addOrder.pending, (state) => {
                state.addOrderFetching = true;
            })
            .addCase(addOrder.fulfilled, (state) => {
                state.addOrderFetching = false;
            })
            .addCase(addOrder.rejected, (state) => {
                state.addOrderFetching = false;
            });
    },
    selectors: {
        selectCartDishes: (state) => state.cartDishes,
        selectOrderFetching: (state) => state.addOrderFetching,
    },
});

export const cartReducer = cartSlice.reducer;
export const { addDish, clearCart, updateCart } = cartSlice.actions;

export const { selectCartDishes, selectOrderFetching } = cartSlice.selectors;
