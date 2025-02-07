import { useState } from 'react'
import './App.css'
import { Logos } from './componentes/Logos'
import { AddTask }  from './componentes/AddTask'
import { ShowTask } from './componentes/ShowTask'

function App() {
  const [tasks, setTasks] = useState([])

  const addTasks = (newTask) =>{
    let object = {
      task: newTask,
      status:false
    }
    setTasks([...tasks, object])
  }

  const changeStatus = (index) => {
    tasks[index].status = !tasks[index].status
    setTasks([...tasks])
  }

  const removeTask = (index)=>{
    tasks.splice(index, 1)
    setTasks([...tasks])
  }

  return (
    <>
      <Logos />
      <h1>Administrador de Tareas</h1>
      <AddTask addTasks={addTasks}/>
      <ShowTask tasks={tasks} changeStatus={changeStatus} removeTask={removeTask}/>
    </>
  )
}

export default App
