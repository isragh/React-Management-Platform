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
                <h5 className="to-do">To do</h5>
                <h5 className="in-progress">In progress</h5>
                <h5 className="complete">Completed</h5>
                {taskMap}
            </div>
        // </AnimatePresence>
    )
}

export default TaskList