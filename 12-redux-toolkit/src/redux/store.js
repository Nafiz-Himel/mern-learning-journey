import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


//steps:
// create stroe
// wrap app component under Provider
// create slice
// register reducer in store