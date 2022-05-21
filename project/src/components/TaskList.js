import { motion, AnimatePresence } from "framer-motion"
import React, { useContext } from 'react'
import TaskContext from "../context/TaskContext"
import TaskItem from './TaskItem'

function TaskList() {
    const { task } = useContext(TaskContext)

    if (!task || task.length === 0) {
        return <p>No Tasks!</p>
    }

    return (
        <AnimatePresence>
            <div>
                {task.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <TaskItem
                            key={item.id}
                            item={item}
                        />
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    )
}

export default TaskList