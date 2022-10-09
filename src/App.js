import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './components/AddTask';
import TaskContainer from './components/TasksContainer';

const App = () => {

  const [tasks, setTasks] = useState([])

  const handleAddClick = (task) => {
    
    const id = uuidv4()
    
    setTasks([...tasks, {
      id,
      taskName: task,
      status: 'pending'
    }])
  }


  return (
    <div className='container'>
      <AddTask handleClick={handleAddClick}/>
      <TaskContainer tasksList={tasks}/>
    </div>
  )
}

export default App;
