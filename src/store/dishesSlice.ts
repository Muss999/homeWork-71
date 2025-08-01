import { createSlice } from "@reduxjs/toolkit";
import type { TypeDish, TypeDishMutation } from "../types";
import {
    addDish,
    deleteDish,
    editDishThunk,
    fetchOneDish,
    getDishes,
} from "./dishesThunk";

interface State {
    items: TypeDishMutation[];
    getDishesFetching: boolean;
    addDishesFetching: boolean;
    oneDish: null | TypeDish;
    editDishFetching: boolean;
    fetchOneLoading: boolean;
    deleteDishFetching: boolean | string;
}
const initialState: State = {
    items: [],
    getDishesFetching: false,
    addDishesFetching: false,
    oneDish: null,
    editDishFetching: false,
    fetchOneLoading: false,
    deleteDishFetching: false,
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

        builder
            .addCase(addDish.pending, (state) => {
                state.addDishesFetching = true;
            })
            .addCase(addDish.fulfilled, (state) => {
                state.addDishesFetching = false;
            })
            .addCase(addDish.rejected, (state) => {
                state.addDishesFetching = false;
            });

        builder
            .addCase(editDishThunk.pending, (state) => {
                state.editDishFetching = true;
            })
            .addCase(editDishThunk.fulfilled, (state) => {
                state.editDishFetching = false;
            })
            .addCase(editDishThunk.rejected, (state) => {
                state.editDishFetching = false;
            });

        builder
            .addCase(fetchOneDish.pending, (state) => {
                state.fetchOneLoading = true;
                state.oneDish = null;
            })
            .addCase(fetchOneDish.fulfilled, (state, { payload: dish }) => {
                state.fetchOneLoading = false;
                state.oneDish = dish;
            })
            .addCase(fetchOneDish.rejected, (state) => {
                state.fetchOneLoading = false;
            });

        builder
            .addCase(deleteDish.pending, (state, { meta }) => {
                state.deleteDishFetching = meta.arg;
            })
            .addCase(deleteDish.fulfilled, (state) => {
                state.deleteDishFetching = false;
            })
            .addCase(deleteDish.rejected, (state) => {
                state.deleteDishFetching = false;
            });
    },
    selectors: {
        selectDishes: (state) => state.items,
        selectGetDishesFetching: (state) => state.getDishesFetching,
        selectAddDishesFetching: (state) => state.addDishesFetching,
        selectEditDishFetching: (state) => state.editDishFetching,
        selectOneDishLoading: (state) => state.fetchOneLoading,
        selectDeleteDishFetching: (state) => state.deleteDishFetching,
        selectOneDish: (state) => state.oneDish,
    },
});

export const dishesReducer = dishesSlice.reducer;
export const {
    selectDishes,
    selectGetDishesFetching,
    selectAddDishesFetching,
    selectEditDishFetching,
    selectOneDishLoading,
    selectDeleteDishFetching,
    selectOneDish,
} = dishesSlice.selectors;
