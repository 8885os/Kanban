import React from 'react'
import { useState } from 'react'
import '../styles/AddTask.css'

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
    const handleKey = (e) => {
        if (e.keyCode === 13) {
            onClick();
        }
    }

    return (
        <div className="makingtask-holder">
            <div className='makingtask'>
                <textarea id="text" value={text} onChange={(e) =>
                    setTask(e.target.value)} onKeyUp={handleKey}>

                </textarea>
                <button className='btn' onClick={onClick} >
                    Add Task
                </button>
            </div>
        </div>
    )

}



export default AddTask