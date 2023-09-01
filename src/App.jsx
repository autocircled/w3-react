import './App.css'
import Counter from './components/Counter'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className="App">
      <h1>Work Station</h1>

      <Counter />
      <Todos />
    </div>
  )
}

export default App
