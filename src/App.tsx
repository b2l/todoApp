import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1>TodoApp</h1>
      </header>
      <nav className="App-Nav">
        <a className="Link" href="#completed">View completed</a>
        <a className="Link" href="#notcompleted">View not completed</a>
        <a className="Link" href="#all">View all</a>
      </nav>
      <main className="App-Body">
        <AddTask/>
        <TaskList/>
      </main>
    </div>
  );
}

export default App;
