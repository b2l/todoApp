import { useId, useState } from 'react'
import { useTasksDispatch } from './TasksContext'

export function AddTask() {
  const dispatch = useTasksDispatch()
  const [taskTitle, setTaskTitle] = useState('')
  const inputId = useId()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch({ type: 'taskAdded', taskTitle })
    setTaskTitle('')
  }
  return (
    <form className="" onSubmit={handleSubmit}>
      <label htmlFor={inputId}>+ Add a task</label>
      <input
        type="text"
        name="newTaskTitle"
        id={inputId}
        placeholder="Try typing prepare the formation"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
    </form>
  )
}
