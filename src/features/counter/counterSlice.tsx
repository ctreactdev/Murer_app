import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.value += 1
    },
    decrementCount: (state) => {
      state.value -= 1
    },
  },
})

export const { incrementCount, decrementCount } = counterSlice.actions
export const selectedCount = (state) => state.counter.value
export default counterSlice.reducer
