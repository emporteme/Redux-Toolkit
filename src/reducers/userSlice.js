import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
}

export const userSlice = createSlice({
    name: 'usergfgf',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        }
    }
})

export const { setFirstName } = userSlice.actions
export const { setLastName } = userSlice.actions
export default userSlice.reducer