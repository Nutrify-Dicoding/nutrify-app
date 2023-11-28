import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        token: null,
        username: null,
        messages: [],
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
        addMessage: (state, action) => {
            state.messages.push({
                text: action.payload.text,
                type: action.payload.type,
            });
        },
        removeMessage: (state, action) => {
            if(action.payload === undefined) {
                return;
            }
            state.messages = state.messages.filter(
                (message) => message.text !== action.payload
            );
        },
    }
})

export const { setAuth, clearAuth, addMessage, removeMessage } = authSlice.actions;
export default authSlice.reducer;