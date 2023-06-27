import { useDispatch, useSelector } from 'react-redux'
import { Task } from './Task'
import { taskCompleted, taskDeleted, taskUncompleted } from './TasksContext'
import { getFilteredTasks } from './selectors'

export function TaskList() {
  const tasks = useSelector(getFilteredTasks)
  const dispatch = useDispatch()

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
      {tasks.map((task: any) => (
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
