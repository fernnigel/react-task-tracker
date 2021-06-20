import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {

  const [showAddTask,setShowAddTask] = useState(false)

  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "doctors appointment",
  //     day: "feb 5th",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "meeting at school",
  //     day: "feb 6th",
  //     reminder: true,
  //   },
  // ])

  const [tasks, setTasks] = useState("")

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  const toggleReminder =(id)=>{
    setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder}:task))
  }

  const addTask = (task)=>{
    const id = Math.floor(Math.random()*10000) + 1
    const newTask ={id,...task}
    console.log(newTask)
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete = {deleteTask}  onToggle={toggleReminder}/> : <h3>No tasks to show</h3>}
    </div>
  )
}

export default App;
