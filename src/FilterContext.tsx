import { createSlice } from '@reduxjs/toolkit'

const initialState = 'all'

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChanged: (state, action) => {
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