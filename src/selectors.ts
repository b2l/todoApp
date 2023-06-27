import { createSelector } from "reselect";

const selectSelf = (state: any) => state

export const getTasks = createSelector(selectSelf, state => state.tasks)
export const getFilter = createSelector(selectSelf, state => state.filter)
export const getFilteredTasks = createSelector(getTasks, getFilter, (tasks, filter) => {
  return tasks.filter((task: any) => {
    if (filter === 'all') return true
    return filter === 'completed' ? task.completed : !task.completed
  })
})
