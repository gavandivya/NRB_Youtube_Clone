import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';
import videoSlice from './videoSlice';

const store = configureStore({
    reducer: {
        SideMenu: slice,
        caching: videoSlice,
    }
})


export default store;

