import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

function TaskCounter() {
    const { task } = useContext(TaskContext)

    function tasks() {
        if (task.length === 1) {
            return <h4>{task.length} task to do!</h4>
        } else return <h4>{task.length} tasks to do!</h4>
    }

    return (
        <div className='task-counter'>
            {tasks()}
        </div>
    )
}

export default TaskCounter