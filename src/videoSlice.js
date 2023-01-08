import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name: "caching",
    initialState: {
        videoList: []
    },
    reducers: {
        cacheVideoData: (state, action) => {
            state.videoList = action.payload;
        }
    }

})

export const { cacheVideoData } = videoSlice.actions;
export default videoSlice.reducer;
