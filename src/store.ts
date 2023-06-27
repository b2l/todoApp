import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './FilterContext';
import taskReducer from './TasksContext'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    tasks: taskReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
