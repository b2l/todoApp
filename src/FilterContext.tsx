import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type State = 'all' | 'completed' | 'notcompleted'
const initialState = 'all' as State

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChanged: (state, action: PayloadAction<State>) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { filterChanged } = filterSlice.actions

export default filterSlice.reducer

export const filters = [
  { key: 'completed', label: 'View completed' },
  { key: 'notcompleted', label: 'View not completed' },
  { key: 'all', label: 'View all' },
]