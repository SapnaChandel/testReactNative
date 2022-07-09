import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        show: (state) => {
            state.value = true
        },
        hide: (state) => {
            state.value = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { show, hide } = loaderSlice.actions

export default loaderSlice.reducer