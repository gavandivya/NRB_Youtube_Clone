import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './slice/chatSlice';
import slice from './slice/slice';
import videoSlice from './slice/videoSlice';

const store = configureStore({
    reducer: {
        SideMenu: slice,
        caching: videoSlice,
        chat: chatSlice,
    }
})


export default store;

