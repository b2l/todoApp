import { useDispatch, useSelector } from 'react-redux'
import { Task } from './Task'
import { taskCompleted, taskUncompleted, taskDeleted } from './TasksContext'

export function TaskList() {
  const tasks = useSelector((state: any) => state.tasks)
  const dispatch = useDispatch()
  const filter = useSelector((state: any) => state.filter)

  const filteredTasks = tasks.filter((task: any) => {
    if (filter === 'completed') return task.completed
    if (filter === 'notcompleted') return !task.completed
    if (filter === 'all') return true
  })

  const handleCompleteTask = (task: any) => {
    dispatch(taskCompleted(task))
  }

  const handleUncompleteTask = (task: any) => {
    dispatch(taskUncompleted(task))
  }

  const handleDeleteTask = (task: any) => {
    dispatch(taskDeleted(task))
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
