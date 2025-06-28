import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    data: false
}

const performanceSlice = createSlice({
    name : "performance",
    initialState : initialState,
    reducers:{

    }
});


// export const { } = performanceSlice.actions;
export default performanceSlice.reducer;