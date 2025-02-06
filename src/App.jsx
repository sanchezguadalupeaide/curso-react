import { useState } from 'react'
import './App.css'
import { Logos } from './componentes/Logos'
import { AddTask }  from './componentes/AddTask'

function App() {
  const [tasks, setTasks] = useState([])

  const addTasks = (newTask) =>{
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  return (
    <>
      <Logos />
      <h1>Administrador de Tareas</h1>
      <AddTask addTasks={addTasks}/>
    </>
  )
}

export default App
