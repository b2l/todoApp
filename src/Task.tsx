import { useId } from 'react'
import { Checkbox } from './Checkbox'

export function Task({
  task,
  onComplete,
  onUncomplete,
  onDelete,
}: any) {
  const checkboxId = useId()
  return (
    <li className={task.completed ? 'Task completed' : 'Task'}>
      <div>
        <Checkbox
          name={`task-completed-${task.id}`}
          id={checkboxId}
          defaultChecked={task.completed}
          onChange={e => e.target.checked ? onComplete(task) : onUncomplete(task)}
        />
        <span>{task.title}</span>
      </div>
      <button onClick={e => {e.preventDefault(); onDelete(task)}}className="BtnDeletTask">x</button>
    </li>
  )
}
