import { createSlice } from "@reduxjs/toolkit";

/* const initialState = {
    query : "",
    fetchResult: [],
    fetchFiltered: [],
} */

const stateSlice = createSlice({
    name: "query",
    initialState: {
        query: "",
        data: [],
        dataFiltered: [],
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setDataFilter: (state, action) => {
            state.dataFiltered = action.payload;
        },
    },
});
export const { setQuery } = stateSlice.actions;
export default stateSlice.reducer;
