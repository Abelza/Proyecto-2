import { useState } from 'react'
import './App.css'
import Lista1 from './Lista1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <h1>Hola Abel</h1>
      <Lista1></Lista1>
    </div>
    )
}

export default App
