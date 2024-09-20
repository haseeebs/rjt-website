import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    packages: [],
    hotels: [],
    loading: false,
    error: null
}

const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {
        setPackages: (state, action) => {
            state.packages = action.payload;
        },
        setHotels: (state, action) => {
            state.hotels = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setPackages, setHotels, setLoading, setError } = packageSlice.actions;
export default packageSlice.reducer;