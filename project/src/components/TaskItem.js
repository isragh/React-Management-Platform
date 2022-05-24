import React, { useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const progress = {
    a: 'To do',
    b: 'In progress',
    c: 'Complete'
}

function TaskItem({ item }) {
    const { deleteTask, editTask } = useContext(TaskContext)

    const [select, setSelect] = useState(progress.a)

    const todo = select === 'To do' ? 'to-do' : ''
    const inProgress = select === 'In progress' ? 'in-progress' : ''
    const complete = select === 'Complete' ? 'complete' : ''

    return (
        <div className={`${todo}${inProgress}${complete}`}>
            <div className='small-card'>
                <div>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        {Object.entries(progress).map(prog => (
                            <option value={prog[1]} key={prog[1]}>{prog[1]}</option>
                        ))}
                    </select>
                </div>
                {item.name}
                <button className='close' onClick={() => deleteTask(item.id)}>
                    <FaTrash color='red' size='15' />
                </button>
                <button className='edit' onClick={() => editTask(item)}>
                    <FaEdit size='15' />
                </button>
                <div className='text-display'>{item.text}</div>
            </div>
        </div>
    )
}

export default TaskItem

