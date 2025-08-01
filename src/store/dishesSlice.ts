import { createSlice } from "@reduxjs/toolkit";
import type { TypeDishMutation } from "../types";
import { getDishes } from "./dishesThunk";

interface State {
    items: TypeDishMutation[];
    getDishesFetching: boolean;
}
const initialState: State = {
    items: [],
    getDishesFetching: false,
};

const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDishes.pending, (state) => {
            state.getDishesFetching = true;
        });
        builder.addCase(getDishes.fulfilled, (state, { payload: dishes }) => {
            state.getDishesFetching = false;
            state.items = dishes;
        });
        builder.addCase(getDishes.rejected, (state) => {
            state.getDishesFetching = false;
        });
    },
    selectors: {
        selectDishes: (state) => state.items,
        selectGetDishesFetching: (state) => state.getDishesFetching,
    },
});

export const dishesReducer = dishesSlice.reducer;
export const { selectDishes, selectGetDishesFetching } = dishesSlice.selectors;
