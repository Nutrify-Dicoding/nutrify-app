import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        username: null,
        userInfo: {},
    },
    reducers: {
        setAuth: (state, action) => ({
            ...state,
            isAuthenticated: action.payload.isAuthenticated,
            token: action.payload.token,
            username: action.payload.username,
            userInfo: action.payload.userInfo,
        }),
        clearAuth: (state) => ({
            ...state,
            isAuthenticated: false,
            token: null,
            username: null,
        }),
    },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
