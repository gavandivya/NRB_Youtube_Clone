import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: "chat",
    initialState: ["Divya: I will and can do it"],
    reducers: {
        chatMenu: (state, action) => {
            state.splice(50, 1);
            state = state.unshift(action.payload);
        }
    }

});


export const { chatMenu } = chatSlice.actions;
export default chatSlice.reducer;