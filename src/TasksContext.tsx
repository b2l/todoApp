import { createContext, useContext, useReducer } from "react";

export const TasksContext = createContext([])
export const TasksDispatchContext = createContext<any>(null)

export function TasksProvider({children}: any) {
  const [tasks, dispatch] = useReducer(reducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}


const initialTasks = [
  { id: 1, title: 'task one', completed: false },
  { id: 2, title: 'task two', completed: false },
  { id: 3, title: 'task three', completed: false },
  { id: 4, title: 'task for', completed: true },
]

function reducer(tasks: any, action: any) {
  switch (action.type) {
    case 'taskAdded': {
      return [
        ...tasks,
        {
          id: tasks[tasks.length - 1].id + 1,
          title: action.taskTitle,
          completed: false,
        },
      ]
    }
    case 'taskDeleted': {
      return tasks.filter((t: any) => t !== action.task)
    }
    case 'taskCompleted': {
      return tasks.map((t: any) => (t === action.task ? { ...t, completed: true } : t))
    }
    case 'taskUncompleted': {
      return tasks.map((t: any) => (t === action.task ? { ...t, completed: false } : t))
    }
  }
}
