import { PayloadAction, PrepareAction, createSlice, nanoid } from '@reduxjs/toolkit'

export interface Task {
  id: string
  title: string
  completed: boolean
}

type State = Task[]

const initialState = [
  { id: nanoid(), title: 'task one', completed: false },
  { id: nanoid(), title: 'task two', completed: false },
  { id: nanoid(), title: 'task three', completed: false },
  { id: nanoid(), title: 'task for', completed: true },
] as State

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action: PayloadAction<Task>) {
        state.push(action.payload)
      },
      prepare: (title: string) => {
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
    taskDeleted: (state, action: PayloadAction<Task>) => {
      return state.filter((task) => task !== action.payload)
    },
    taskCompleted: (state, action: PayloadAction<Task>) => {
      return state.map((task: any) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      )
    },
    taskUncompleted: (state, action: PayloadAction<Task>) => {
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
