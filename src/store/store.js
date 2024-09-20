import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import packageReducer from './packageSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        package: packageReducer
    }
});

export default store;