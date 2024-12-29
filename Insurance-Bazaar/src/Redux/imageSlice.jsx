import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "images",
    initialState: {
        value: [],
    },
    reducers: {
        setImages: (state, action) => {
            console.log("Images dispatched to Redux:", action.payload);
            state.value = action.payload; 
        },
    },
});

export const { setImages } = imageSlice.actions;
export default imageSlice.reducer;
