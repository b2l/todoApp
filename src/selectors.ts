import { createSelector } from "reselect";
import { RootState } from "./store";

const selectSelf = (state: RootState) => state

export const getTasks = createSelector(selectSelf, state => state.tasks)
export const getFilter = createSelector(selectSelf, state => state.filter)
export const getFilteredTasks = createSelector(getTasks, getFilter, (tasks, filter) => {
  return tasks.filter((task) => {
    if (filter === 'all') return true
    return filter === 'completed' ? task.completed : !task.completed
  })
})
