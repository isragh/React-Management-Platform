import React, { useState, useContext } from 'react'
import TaskContext from '../context/TaskContext'

function TaskForm() {
    const { addTask } = useContext(TaskContext)

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = { text }
        if (newTask.text.length === 0) {
            alert('Write a task!')
        } else {
            addTask(newTask)
            setText('')
        }
    }

    return (
        <div>
            <h2>Task Management</h2>
            <div className='card'>
                <form onSubmit={handleSubmit}>
                    <h2>Set task</h2>
                    <div className='input-group'>
                        <input onChange={(e) => setText(e.target.value)}
                            type="text"
                            placeholder='Write here the new task'
                            value={text}
                        />
                        <button className='btn-primary' type='submit'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskForm