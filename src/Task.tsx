import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox } from './Checkbox'
import { taskCompleted, taskDeleted, taskUncompleted } from './TasksContext'
import type { Task } from './TasksContext'

interface Props {
  task: Task
}

export function Task({ task }: Props) {
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
  const checkboxId = useId()
  return (
    <li className={task.completed ? 'Task completed' : 'Task'}>
      <div>
        <Checkbox
          name={`task-completed-${task.id}`}
          id={checkboxId}
          defaultChecked={task.completed}
          onChange={(e) =>
            e.target.checked
              ? handleCompleteTask(task)
              : handleUncompleteTask(task)
          }
        />
        <span>{task.title}</span>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault()
          handleDeleteTask(task)
        }}
        className="BtnDeletTask"
      >
        x
      </button>
    </li>
  )
}
