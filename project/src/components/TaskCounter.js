import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

function TaskCounter() {
    const { task } = useContext(TaskContext)

    function tasks() {
        return <h4>Total task: {task.length}</h4>
    }

    return (
        <div className='task-counter'>
            {tasks()}
        </div>
    )
}

export default TaskCounter