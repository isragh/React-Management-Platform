import { createContext, useState } from 'react'
import { v4 } from 'uuid'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([])

    const [taskEdit, setTaskEdit] = useState({
        item: {},
        edit: false
    })

    const deleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTask(task.filter((item) => item.id !== id))
        }
    }

    const addTask = (newTask) => {
        newTask.id = v4()
        setTask([newTask, ...task])
    }

    const editTask = (item) => {
        setTaskEdit({
            item,
            edit:true
        })
    }

    const updateTask = (id, updateItem) => {
        setTask(task.map((item) => item.id === id ? {...item, ...updateItem} : item))
    }

    return (
        <TaskContext.Provider value={{
            task,
            deleteTask,
            addTask,
            editTask,
            taskEdit,
            updateTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext