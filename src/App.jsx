import { useState } from 'react'
import './App.css'
import { Todos, FavColor } from './components/Todos.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);

  const increment = () => {
    setCount(c => c + 1);
  }
  return (
    <>
      <h1>Hello World</h1>

      <Todos todos={todos} />
      <FavColor />

      <hr />
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  )
}

export default App
