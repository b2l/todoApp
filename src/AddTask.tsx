import { useId, useState } from 'react'

export function AddTask({onAddTask}: {onAddTask: any}) {
  const [taskTitle, setTaskTitle] = useState('')
  const inputId = useId()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onAddTask(taskTitle)
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
        onChange={e => setTaskTitle(e.target.value)}
      />
    </form>
  )
}
