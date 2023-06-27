import { useSelector } from 'react-redux'
import { Task } from './Task'
import { getFilteredTasks } from './selectors'

export function TaskList() {
  const tasks = useSelector(getFilteredTasks)

  return (
    <ul className="TaskList">
      {tasks.map((task: any) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  )
}
