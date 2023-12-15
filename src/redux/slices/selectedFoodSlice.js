import { createSlice } from '@reduxjs/toolkit';

const selectedFoodSlice = createSlice({
    name: 'selectedFood',
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
        setSelectedFood: (state, action) => ({
            ...state,
            food_id: action.payload.food_id,
            name: action.payload.name,
            image: action.payload.image,
            fat: action.payload.fat,
            carb: action.payload.carb,
            protein: action.payload.protein,
            cal: action.payload.cal,
        }),
        setSelectedFoodPortion: (state, action) => ({
            ...state,
            portion: action.payload.portion,
        }),
        clearSelectedFood: (state) => ({
            ...state,
            food_id: null,
            name: null,
            image: null,
            fat: 0,
            carb: 0,
            protein: 0,
            cal: 0,
            portion: 1,
        }),
    },
});

export const {
    setSelectedFood,
    clearSelectedFood,
    setSelectedFoodPortion,
} = selectedFoodSlice.actions;
export default selectedFoodSlice.reducer;
