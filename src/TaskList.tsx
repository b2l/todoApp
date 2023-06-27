import { Task } from './Task'

type Props = any
export function TaskList({
  tasks,
  handleCompleteTask,
  handleUncompleteTask,
  handleDeleteTask,
}: Props) {
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
