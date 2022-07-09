import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: []
}

export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authInit: (state) => {
            state.loading = true
        },

        authSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
            // console.log(Object.keys(state.data).length)
        },

        authError: (state, data) => {
            state.loading = false
        },
    },
})

export const { authInit, authSuccess, authError } = slice.actions

export default slice.reducer
