import { useFilter } from './FilterContext'
import { Task } from './Task'
import { useTasks, useTasksDispatch } from './TasksContext'

export function TaskList() {
  const tasks = useTasks()
  const dispatch = useTasksDispatch()
  const filter = useFilter()

  const filteredTasks = tasks.filter((task: any) => {
    if (filter === 'completed') return task.completed
    if (filter === 'notcompleted') return !task.completed
    if (filter === 'all') return true
  })

  const handleCompleteTask = (task: any) => {
    dispatch({type: 'taskCompleted', task})
  }

  const handleUncompleteTask = (task: any) => {
    dispatch({type: 'taskUncompleted', task})
  }

  const handleDeleteTask = (task: any) => {
    dispatch({type: 'taskDeleted', task})
  }

  return (
    <ul className="TaskList">
      {filteredTasks.map((task: any) => (
        <Task
          onComplete={handleCompleteTask}
          onUncomplete={handleUncompleteTask}
          onDelete={handleDeleteTask}
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  )
}
