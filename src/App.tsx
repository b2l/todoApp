import { Provider } from 'react-redux'
import './App.css'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'
import { Nav } from './Nav'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
