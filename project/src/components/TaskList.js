// import { AnimatePresence } from "framer-motion"
import React, { useContext } from 'react'
import TaskContext from "../context/TaskContext"
import TaskItem from './TaskItem'

function TaskList() {
    const { task } = useContext(TaskContext)

    const taskMap = task.map((item) => (
        <TaskItem
            key={item.id}
            item={item}
        />
    ))

    return (
        // <AnimatePresence>
            <div className="table">
                <h5 className="to-do">Tasks to do</h5>
                <h5 className="in-progress">Tasks in progress</h5>
                <h5 className="complete">Completed tasks</h5>
                {taskMap}
            </div>
        // </AnimatePresence>
    )
}

export default TaskList