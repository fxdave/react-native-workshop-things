import type { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state) {
            state.count += 1;
        }
    }
})


export function countSelector(state: RootState) {
    return state.counter.count
}

export const { increment } = counterSlice.actions

export default counterSlice;