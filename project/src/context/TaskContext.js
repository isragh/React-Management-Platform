import { createContext, useState } from 'react'
import { v4 } from 'uuid'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([
        // {
        //     id: 1,
        //     text: 'context'
        // }
    ])

    const deleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTask(task.filter((item) => item.id !== id))
        }
    }

    const addTask = (newTask) => {
        newTask.id = v4()
        setTask([newTask, ...task])
    }

    return (
        <TaskContext.Provider value={{
            task,
            deleteTask,
            addTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext