import { createSlice } from "@reduxjs/toolkit";

const selectedFoodSlice = createSlice({
    name: "selectedFood",
    initialState: {
        food_id: null,
        name: null,
        image: null,
        fat: 0,
        carb: 0,
        protein: 0,
        cal: 0,
        portion: 1,
    },
    reducers: {
        setSelectedFood: (state, action) => {
            state.food_id = action.payload.food_id;
            state.name = action.payload.name;
            state.image = action.payload.image;
            state.fat = action.payload.fat;
            state.carb = action.payload.carb;
            state.protein = action.payload.protein;
            state.cal = action.payload.cal;
        },
        setSelectedFoodPortion: (state, action) => {
            state.portion = action.payload.portion;
        },
        clearSelectedFood: (state) => {
            state.food_id = null;
            state.name = null;
            state.image = null;
            state.fat = 0;
            state.carb = 0;
            state.protein = 0;
            state.cal = 0;
            state.portion = 1;
        },
    }
})

export const { setSelectedFood, clearSelectedFood, setSelectedFoodPortion } = selectedFoodSlice.actions;
export default selectedFoodSlice.reducer;