import { createSlice } from "@reduxjs/toolkit";

const toastifySlice = createSlice({
    name: "toastify",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push({
                text: action.payload.text,
                type: action.payload.type,
                option: action.payload.option,
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

export const { addMessage, removeMessage } = toastifySlice.actions;
export default toastifySlice.reducer;