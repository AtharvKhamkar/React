import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    value : 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialValue,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        addNumber: (state, action) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement,addNumber,reset } = counterSlice.actions

export default counterSlice.reducer