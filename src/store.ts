import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './FilterContext';
import taskReducer from './TasksContext'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    tasks: taskReducer
  },
})
