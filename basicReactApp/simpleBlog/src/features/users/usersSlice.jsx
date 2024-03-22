import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Atharv Khamkar' },
    { id: '1', name: 'Aditya Khamkar' },
    { id: '2', name: 'Amulya Gavare' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer