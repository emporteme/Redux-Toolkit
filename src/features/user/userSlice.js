import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: ''
}

export const UserSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        }
    }
})

export const { setFirstName } = UserSlice.actions