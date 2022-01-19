import React, { useState } from "react";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import './App.css'

const App = () => {
  // let message = "HELLO WORLD!"
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar progamação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Livro',
      completed: true
    }

  ]);

  const handleTaskAddition = (taskTitle) =>{
    console.log(taskTitle)
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,

      }]
    
    setTasks(newTasks)
  };



  return ( 
      <>
        <div className="container"> 
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks}/>
        </div> 
       
      </>
  )

}

export default App;