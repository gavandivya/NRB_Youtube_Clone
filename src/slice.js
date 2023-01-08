import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "SideMenu",
    initialState: {
        toggle: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.toggle = !state.toggle
        },
        closeMenu: (state) => {
            state.toggle = false;
        },
        openMenu: (state) => {
            state.toggle = true;
        }
    }
})

export const { toggleMenu, closeMenu, openMenu } = slice.actions;
export default slice.reducer;