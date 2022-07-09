import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from '../src/reducers/authReducer'
import loaderReducer from '../src/reducers/loaderReducer'
export default configureStore({
    reducer: {
        loader: loaderReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})