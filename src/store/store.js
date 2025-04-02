import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './slice'

export const store = configureStore({
    reducer: {
        dataStore: storeReducer,
    }
});
