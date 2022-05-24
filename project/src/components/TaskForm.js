import React, { useState, useEffect, useContext } from 'react'
import TaskContext from '../context/TaskContext'

function TaskForm() {
    const { addTask, taskEdit, updateTask } = useContext(TaskContext)
    const [text, setText] = useState('')

    useEffect(() => {
        if (taskEdit.edit === true) {
            setText(taskEdit.item.text)
        }
    }, [taskEdit])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = { text }
        if (newTask.text.length === 0) {
            alert('Write a task!')
            newTask(null)
        }

        if (taskEdit.edit === true) {
            updateTask(taskEdit.item.id, newTask)
            setText('')
            taskEdit.edit = false
        } else {
            addTask(newTask)
            setText('')
        }
        
    }

    return (
        <div className='container'>
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