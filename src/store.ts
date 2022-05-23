import { configureStore } from '@reduxjs/toolkit'
import consumptionCalculatorReducer from './features/consumptionCalculator/consumptionCalculatorSlice'
import counterReducer from './features/counter/counterSlice'

export default configureStore({
  reducer: {
    consumptionCalculator: consumptionCalculatorReducer,
    counter: counterReducer
  },
})
