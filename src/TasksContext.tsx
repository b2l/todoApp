import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'task one', completed: false },
  { id: 2, title: 'task two', completed: false },
  { id: 3, title: 'task three', completed: false },
  { id: 4, title: 'task for', completed: true },
]

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: (state, action) => {
      return action.payload
    },
    taskDeleted: (state, action) => {
      return state.filter((task) => task !== action.payload)
    },
    taskCompleted: (state, action) => {
      return state.map((task: any) =>
        task === action.payload ? { ...task, completed: true } : task
      )
    },
    taskUncompleted: (state, action) => {
      return state.map((t: any) =>
        t === action.payload ? { ...t, completed: false } : t
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { taskAdded, taskCompleted, taskDeleted, taskUncompleted } = tasksSlice.actions

export default tasksSlice.reducer
