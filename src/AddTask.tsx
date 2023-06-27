import { useId } from 'react'

export function AddTask() {
  const inputId = useId()
  return (
    <form className="">
      <label htmlFor={inputId}>+ Add a task</label>
      <input
        type="text"
        name="newTaskTitle"
        id={inputId}
        placeholder="Try typing prepare the formation"
      />
    </form>
  )
}
