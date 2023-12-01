import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        token: null,
        username: null,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.token = action.payload.token;
            state.username = action.payload.username;
        },
        clearAuth: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.username = null;
        },
    }
})

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;