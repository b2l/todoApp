import { Task } from './Task'

export function TaskList() {
  const tasks = [
    { id: '1', title: 'task one', completed: false },
    { id: '2', title: 'task two', completed: false },
    { id: '3', title: 'task three', completed: false },
    { id: '4', title: 'task for', completed: true },
  ]
  return (
    <ul className="TaskList">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}
