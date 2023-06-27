import { PayloadAction, PrepareAction, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: nanoid(), title: 'task one', completed: false },
  { id: nanoid(), title: 'task two', completed: false },
  { id: nanoid(), title: 'task three', completed: false },
  { id: nanoid(), title: 'task for', completed: true },
]

interface Task {
  id: string
  title: string
  completed: boolean
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action: any) {
        state.push(action.payload)
      },
      prepare: (title: any) => {
        const id = nanoid()
        return {
          payload: {
            title,
            id,
            completed: false,
          },
        }
      },
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
export const { taskAdded, taskCompleted, taskDeleted, taskUncompleted } =
  tasksSlice.actions

export default tasksSlice.reducer
