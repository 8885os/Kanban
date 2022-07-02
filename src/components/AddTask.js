import React from 'react'
import { useState } from 'react'
const AddTask = ({ onAdd }) => {
    const [text, setTask] = useState('')
    const onClick = (e) => {
        if (!text) {
            alert('Add a task')
            return
        }

        onAdd({ text })

        setTask('')

    }

    return (
        <div id='makingtask'>
            <textarea id="text" value={text} onChange={(e) =>
                setTask(e.target.value)}>

            </textarea>
            <button className='btn' onClick={onClick}>
                Add Task
            </button>
        </div>
    )

}



export default AddTask