import { TodoList } from './components/TodoList'
import './App.css'
import { useState } from 'react'



function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState('');


  return (
    <div>
    <TodoList text={text} setText={setText} />

   </div>
  )
}

export default App
