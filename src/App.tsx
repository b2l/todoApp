import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'

function App() {
  const [filter, setFilter] = useState('all')
  const [tasks, setTasks] = useState([
    { id: 1, title: 'task one', completed: false },
    { id: 2, title: 'task two', completed: false },
    { id: 3, title: 'task three', completed: false },
    { id: 4, title: 'task for', completed: true },
  ])

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'notcompleted') return !task.completed
    if (filter === 'all') return true
  })

  const handleCompleteTask = (task: any) => {
    setTasks(tasks.map(t => t === task ? {...t, completed: true} : t))
  }

  const handleUncompleteTask = (task: any) => {
    setTasks(tasks.map(t => t === task ? {...t, completed: false} : t))
  }

  const handleDeleteTask = (task: any) => {
    setTasks(tasks.filter(t => t !== task))
  }

  const handleFilterChange = (newFilter: any) => (e: any) => {
    e.preventDefault()
    setFilter(newFilter)
  }

  const handleAddTask = (taskTitle: any) => {
    setTasks([
      ...tasks,
      {
        id: tasks[tasks.length - 1].id + 1,
        title: taskTitle,
        completed: false,
      },
    ])
  }

  const filters = [
    { key: 'completed', label: 'View completed' },
    { key: 'notcompleted', label: 'View not completed' },
    { key: 'all', label: 'View all' },
  ]

  return (
    <div className="App">
      <header className="App-Header">
        <h1>TodoApp</h1>
      </header>
      <nav className="App-Nav">
        {filters.map((filterDescriptor) => (
          <a
            className={filterDescriptor.key === filter ? 'Link active' : 'Link'}
            onClick={handleFilterChange(filterDescriptor.key)}
            href={`#${filterDescriptor.key}`}
          >
            {filterDescriptor.label}
          </a>
        ))}
      </nav>
      <main className="App-Body">
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={filteredTasks}
          handleCompleteTask={handleCompleteTask}
          handleUncompleteTask={handleUncompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  )
}

export default App
