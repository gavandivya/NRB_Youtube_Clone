import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './chatSlice';
import slice from './slice';
import videoSlice from './videoSlice';

const store = configureStore({
    reducer: {
        SideMenu: slice,
        caching: videoSlice,
        chat: chatSlice,
    }
})


export default store;

