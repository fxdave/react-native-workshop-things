import counterSlice from './app/slice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    //middleware: 
})

export type RootState = ReturnType<typeof store.getState>

export default store