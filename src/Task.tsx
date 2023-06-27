import { useId } from 'react'
import { Checkbox } from './Checkbox'

export function Task({ task }: any) {
  const checkboxId = useId()
  return (
    <li className={task.completed ? 'Task completed' : 'Task'}>
      <div>
        <Checkbox
          name={`task-completed-${task.id}`}
          id={checkboxId}
          defaultChecked={task.completed}
        />
        <span>{task.title}</span>
      </div>
      <button className="BtnDeletTask">x</button>
    </li>
  )
}
