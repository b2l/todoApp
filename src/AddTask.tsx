import { useId, useState } from 'react'
import { useDispatch } from 'react-redux'
import { taskAdded } from './TasksContext'

export function AddTask() {
  const dispatch = useDispatch()
  const [taskTitle, setTaskTitle] = useState('')
  const inputId = useId()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(taskAdded(taskTitle))
    setTaskTitle('')
  }
  return (
    <form aria-label="addTaksForm" onSubmit={handleSubmit}>
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
