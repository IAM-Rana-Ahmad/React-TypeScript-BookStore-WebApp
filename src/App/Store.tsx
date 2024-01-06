import { configureStore } from '@reduxjs/toolkit'
import BookSlice from '../Features/BookSlice'


const Store = configureStore({
  reducer: {
    app: BookSlice,
  },
})
export type RootState = ReturnType<typeof Store.getState>

export default Store