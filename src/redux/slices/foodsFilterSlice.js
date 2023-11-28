import { createSlice } from "@reduxjs/toolkit";

const foodsFilterSlice = createSlice({
    name: "foodsFilter",
    initialState: {
        byCategoryId: null,
        byName: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.byCategoryId = action.payload.byCategoryId;
            state.byName = action.payload.byName;
        },
    }
})

export const { setFilter } = foodsFilterSlice.actions;
export default foodsFilterSlice.reducer;