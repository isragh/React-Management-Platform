import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const progress = {
    a: 'To do',
    b: 'In progress',
    c: 'Complete'
}

function TaskItem({ item }) {
    const {deleteTask} = useContext(TaskContext)

    const [select, setSelect] = useState(progress.a)
    
    return (
        <div>
            <div className='card'>
                <div>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        {Object.entries(progress).map(prog => (
                            <option value={prog[1]} key={prog[1]}>{prog[1]}</option>
                        ))}
                    </select>
                </div>
                <div className='important-display'>{item.name}</div>
                <button className='close' onClick={() => deleteTask(item.id)}>
                    <FaTrash color='red' size='15' />
                </button>
                <div className='text-display'>{item.text}</div>
            </div>
        </div>
    )
}

export default TaskItem





//   return (
//     < select
//       onChange={e => handleAddrTypeChange(e)}
//       className="browser-default custom-select" >
//       {
//         Add.map((address, key) => <option value={key}>{address}</option>)
//       }
//     </select >)