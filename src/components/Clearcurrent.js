import React from 'react'
import '../styles/ClearCurrent.css'

const ClearCurrent = ({ setTasks }) => {

    const onClick = () => {
        setTasks([])
    }

    return (
        <div className='clear-holder' onClick={onClick}>
            <button className='clear-button'>
                Clear Table
            </button>
        </div>
    )
}

export default ClearCurrent