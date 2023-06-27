import React, { useReducer, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'
import { TasksProvider } from './TasksContext'
import {
  FilterProvider,
  useFilter,
  useFilterDispatch,
} from './FilterContext'
import { Nav } from './Nav'

function App() {
  return (
    <FilterProvider>
      <TasksProvider>
        <div className="App">
          <header className="App-Header">
            <h1>TodoApp</h1>
          </header>
          <Nav></Nav>
          <main className="App-Body">
            <AddTask />
            <TaskList />
          </main>
        </div>
      </TasksProvider>
    </FilterProvider>
  )
}

export default App
