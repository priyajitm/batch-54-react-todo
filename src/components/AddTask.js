import { useEffect, useState } from 'react'

const AddTask = ({handleClick}) => {

const [task, setTask] = useState('')
const [showError, setShowError] = useState(false)

const addTaskClick = () => {
    if (task) {
        handleClick(task)
        setTask('')
    } else {
        setShowError(true)
    }
} 


useEffect(() => {
    console.log('useeffect called')
    setTimeout(() => {
        setShowError(false)
    }, 3000)
},[showError])



    return (
        <>
             <div className='add-task'>
            <input placeholder="Add you task here" value={task} onChange={(event) => setTask(event.target.value)} />
            <button className='btn' onClick={addTaskClick}>Add Task</button>
        </div>
        { showError && <p style={{color: 'red'}}>Please add a task!!</p>}
        </>
       
    )
}

export default AddTask;