import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Features/Slices/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})